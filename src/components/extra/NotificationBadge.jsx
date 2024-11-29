import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from '../ui/button'


function NotificationBadge() {
    return (
        <>
            <div className='flex justify-between px-5 mt-5'>
                <div className="flex items-center">
                    <img className='h-6 w-6 mr-3' src="src\assets\like.png" alt="" />
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className=" ml-2">
                        <p className=''>Parikshit followed you</p>
                        <p className='text-xs font-light opacity-50'>30min ago</p>
                    </div>
                </div>
                <Button variant='outline'>Follow</Button>
            </div>
        </>
    )
}

export default NotificationBadge