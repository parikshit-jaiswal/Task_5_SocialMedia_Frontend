import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GoogleIcon from '@mui/icons-material/Google';
import './signup.css'
import PasswordInput from "@/components/extra/PasswordInput";


import React, { useState } from 'react'
import { useMediaQuery } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';
import { Loader2 } from 'lucide-react';

function LoginPage() {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const _521 = useMediaQuery("(min-width:521px)")

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const signupHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post('https://snapverse-6nqx.onrender.com/api/auth/login', input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res.data.success) {
                navigate("/");
                toast.success("Login succesfull");
                setInput({
                    email: "",
                    password: ""
                });
            }
        } catch (error) {
            console.log(error);
            toast.error("User doesn't exist");
        } finally {
            setLoading(false);
        }
        console.log(input)
    }

    return (
        <>
            {
                _521 ? <svg className='svg' viewBox="10 -10 170 80">
                    <text className="svgText" x="10" y="45">hola'</text>
                </svg> : <> <div className="text-5xl text-center mt-[15vh] font-extrabold text-purple">Sign In</div> <img className='p-36 mt-18' src="src\assets\auth.svg" alt="" /></>
            }


            <div className="mt-[-2rem]">
                <div className="w-full flex justify-center fixed bottom-[8vh]">
                    <div className="authBox signin">
                        <div className="font-baloo flex justify-center text-[2.5rem] text-nowrap font-extrabold ">
                            <p className='text-purple'>hola'</p> &nbsp;mi amigos</div>

                        <form onSubmit={signupHandler} autoComplete="off" className="flex flex-col gap-3 mt-2">
                            <Input type="email" name="email" value={input.email} onChange={changeEventHandler} placeholder="Enter your email" />
                            <div className="mb-[-1.5rem]"><PasswordInput input={input} changeEventHandler={changeEventHandler} placeholder={"Enter your password"} name={"password"} /></div>
                            {
                                loading ? (
                                    <Button variant='purple' disabled >
                                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                        Please wait
                                    </Button>
                                ) : (
                                    <Button variant='purple'>Sign in</Button>
                                )
                            }
                            <div className="flex justify-center items-center">
                                <div className="w-[48%]"><Separator /></div> &nbsp;<p className='text-purple text-sm'>OR</p>&nbsp; <div className="w-[48%]"><Separator /></div>
                            </div>
                            <div className="flex gap-2 w-full">
                                <Button size='full' variant='outline' type="button">Continue with <GoogleIcon /></Button>
                                <Button size='full' variant='outline' type="button">Continue with <MailOutlineIcon /></Button>
                            </div>
                            <div className=" flex justify-center">Don't have an account? <p className='text-purple ml-1 hover:underline hover:cursor-pointer text-nowrap
                            '><Link to={"/signup"}>Sign up</Link></p></div>
                        </form>
                    </div>
                </div >
            </div>
        </>
    )
}

export default LoginPage