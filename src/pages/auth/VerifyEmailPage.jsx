import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GoogleIcon from '@mui/icons-material/Google';
import './signup.css';

import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import OTPInput from '@/components/extra/OtpInput';
import axios from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

function VerifyEmailPage() {
    const _521 = useMediaQuery("(min-width:521px)");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Define OTP state here
    const [otp, setOtp] = useState();

    const handleOtp = (data) => {
        setOtp({ code: data });
    }

    // Form submission handler
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post('https://snapverse-6nqx.onrender.com/api/auth/verify-email', otp, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
                setOtp();
            }
        } catch (error) {
            console.log(error);
            toast.error("Invalid OTP");
        } finally {
            setLoading(false);
        }
        console.log("Entered OTP:", otp);
    };

    return (
        <>
            {
                _521 ? <svg className='svg' viewBox="10 -10 170 80">
                    <text className="svgText" x="10" y="45">hola'</text>
                </svg> : <>
                    <div className="text-5xl text-center mt-[15vh] font-extrabold text-purple">Sign In</div>
                    <img className='p-36 mt-18' src="src/assets/auth.svg" alt="" />
                </>
            }

            <div className="">
                <div className="w-full flex justify-center fixed bottom-[20vh]">
                    <div className="authBox signin">
                        <div className="font-baloo flex justify-center text-[2.5rem] text-nowrap font-extrabold ">
                            <p className='text-purple'>hola'</p> &nbsp;mi amigos
                        </div>
                        <div className="font-light text-sm flex justify-center w-full">
                            <p className='w-[50%] text-center'>Enter the OTP sent to your email address</p>
                        </div>
                        {/* Handle form submit here */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">
                            <div className="mt-2">
                                <OTPInput handleOtp={handleOtp} />
                            </div>
                            {
                                loading ? (
                                    <div className="flex justify-center mt-6">
                                        <Button variant="purple" disabled >
                                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                            Please wait
                                        </Button>
                                    </div>
                                ) : (<div className="flex justify-center mt-6">
                                    <Button variant='purple' size='submit'>Submit</Button>
                                </div>
                                )
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VerifyEmailPage;
