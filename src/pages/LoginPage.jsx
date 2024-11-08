import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GoogleIcon from '@mui/icons-material/Google';
import './signup.css'

import React from 'react'

function LoginPage() {

    return (
        <>
            <svg viewBox="10 -10 170 80">
                <text class="svgText" x="10" y="45">hola'</text>
            </svg>
            <div className="w-full flex justify-center mt-[-38rem]">
                <div className="authBox">
                    <div className="font-baloo flex justify-center text-[2.5rem] font-extrabold"><p className='text-purple'>hola'</p> &nbsp;mi amigos</div>
                    <form className="flex flex-col gap-3 mt-2">
                        <Input type="text" placeholder="Enter your username" />
                        <Input type="password" placeholder="Enter your password" />
                        <div className="text-[0.75rem] opacity-85 hover:underline flex justify-end mb-3"><p className='cursor-pointer w-fit'>Forget password?</p></div>
                        <Button variant='purple'>Sign in</Button>
                        <div className="flex justify-center items-center">
                            <div className="w-[48%]"><Separator /></div> &nbsp;<p className='text-purple text-sm'>OR</p>&nbsp; <div className="w-[48%]"><Separator /></div>
                        </div>
                        <div className="flex gap-2 w-full">
                            <Button size='full' variant='outline'>Continue with <GoogleIcon /></Button>
                            <Button size='full' variant='outline'>Continue with <MailOutlineIcon /></Button>
                        </div>
                        <div className=" flex justify-center">Don't have an account? <p className='text-purple ml-1 hover:underline hover:cursor-pointer'> Sign up</p></div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default LoginPage