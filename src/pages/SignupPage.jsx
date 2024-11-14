import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GoogleIcon from "@mui/icons-material/Google";
import "./signup.css";
import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignupPage() {
    const [input, setInput] = useState({
        userName: "",
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const signupHandler = async (e) => {
        e.preventDefault();
        if (!input.email || !input.userName || !input.password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }
        if (input.password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setError("");
        console.log(input);
        try {
            const res = await axios.post('http://snapverse-6nqx.onrender.com/api/auth/signup', input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res.data.success) {
                navigate("/login");
                toast.success("Signup succesfull");
                setInput({
                    userName: "",
                    email: "",
                    password: ""
                });
            }
        } catch (error) {
            console.log(error);
            toast.error("Some error occured");
        }
    };

    const _521 = useMediaQuery("(min-width:521px)");

    return (
        <>
            {_521 ? (
                <svg className="svg" viewBox="10 -10 170 80" aria-label="Welcome message">
                    <text className="svgText" x="10" y="45">
                        hola'
                    </text>
                </svg>
            ) : (
                <>
                    <div className="text-5xl text-center mt-[10vh] font-extrabold text-purple">
                        Sign Up
                    </div>
                    <img className="p-32 mt-18" src="src/assets/auth.svg" alt="Authentication visual" />
                </>
            )}

            <div className="signup-container">
                <div className="w-full flex justify-center fixed bottom-[3vw]">
                    <div className="authBox">
                        <div className="font-baloo flex justify-center text-[2.5rem] font-extrabold">
                            <p className="text-purple">hola'</p>&nbsp;mi amigos
                        </div>

                        <form onSubmit={signupHandler} className="flex flex-col gap-3 mt-2">
                            <Input type="text" name="name" value={input.name} onChange={changeEventHandler} placeholder="Enter your full name" />
                            <Input type="text" name="userName" value={input.userName} onChange={changeEventHandler} placeholder="Enter your username" />
                            <Input type="email" name="email" value={input.email} onChange={changeEventHandler} placeholder="Enter your email" />
                            <Input type="password" name="password" value={input.password} onChange={changeEventHandler} placeholder="Enter your password" />
                            <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" />
                            <Button variant="purple">Sign up</Button>
                            {error && <p className="error-message text-red-500 text-end">{error}</p>}

                            <div className="flex justify-center items-center gap-2 my-3">
                                <Separator className="w-[48%]" />
                                <p className="text-purple text-sm">OR</p>
                                <Separator className="w-[48%]" />
                            </div>

                            <div className="flex gap-2 w-full">
                                <Button size="full" variant="outline">
                                    Continue with <GoogleIcon />
                                </Button>
                                <Button size="full" variant="outline">
                                    Continue with <MailOutlineIcon />
                                </Button>
                            </div>

                            <div className="flex justify-center mt-4">
                                Already have an account?
                                <p className="text-purple ml-1 hover:underline cursor-pointer">
                                    Sign in
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignupPage;
