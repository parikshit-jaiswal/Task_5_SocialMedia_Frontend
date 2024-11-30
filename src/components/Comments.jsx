import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Comment = ({ comment }) => {
    return (
        <div className='my-5'>
            <div className='flex gap-4 items-center'>
                <Avatar className="h-12 w-12">
                    <AvatarImage src="https://res.cloudinary.com/dl10fq0cu/image/upload/v1731652645/00000000000000000000000000000000_wrtw74.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex gap-3">
                    <h1 className='font-semibold text-lg'>{comment?.user?.userName}</h1>
                    <span className='font-light pl-1'>{comment?.text}</span>
                </div>
            </div>
        </div>
    )
}

export default Comment