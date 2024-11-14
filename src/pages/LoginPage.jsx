import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GoogleIcon from '@mui/icons-material/Google';
import './signup.css'

import React from 'react'
import { useMediaQuery } from '@mui/material';

function LoginPage() {

    const _521 = useMediaQuery("(min-width:521px)")

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

                        <form className="flex flex-col gap-3 mt-2">
                            <Input type="text" placeholder="Enter your username" />
                            <Input type="password" placeholder="Enter your password" />
                            <Button variant='purple'>Sign in</Button>
                            <div className="flex justify-center items-center">
                                <div className="w-[48%]"><Separator /></div> &nbsp;<p className='text-purple text-sm'>OR</p>&nbsp; <div className="w-[48%]"><Separator /></div>
                            </div>
                            <div className="flex gap-2 w-full">
                                <Button size='full' variant='outline'>Continue with <GoogleIcon /></Button>
                                <Button size='full' variant='outline'>Continue with <MailOutlineIcon /></Button>
                            </div>
                            <div className=" flex justify-center">Don't have an account? <p className='text-purple ml-1 hover:underline hover:cursor-pointer text-nowrap
                            '> Sign up</p></div>
                        </form>
                    </div>
                </div >
            </div>
        </>
    )
}

export default LoginPage