import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Comment = ({ comment }) => {

    function timeAgo(timestamp) {
        const now = new Date();
        const time = new Date(timestamp);

        if (isNaN(time)) {
            return "just now"; // Handle invalid timestamp
        }

        const diff = Math.floor((now.getTime() - time.getTime()) / 1000); // Ensure proper calculation in seconds

        if (diff < 1) {
            return "just now"; // Handle very recent timestamps
        } else if (diff < 60) {
            return `${diff} second${diff > 1 ? 's' : ''} ago`;
        } else if (diff < 3600) {
            const minutes = Math.floor(diff / 60);
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else if (diff < 86400) {
            const hours = Math.floor(diff / 3600);
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (diff < 2592000) {
            const days = Math.floor(diff / 86400);
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (diff < 31536000) {
            const months = Math.floor(diff / 2592000);
            return `${months} month${months > 1 ? 's' : ''} ago`;
        } else {
            const years = Math.floor(diff / 31536000);
            return `${years} year${years > 1 ? 's' : ''} ago`;
        }
    }

    return (
        <div className='my-5'>
            <div className='flex gap-4'>
                <Avatar className="h-12 w-12 mt-2">
                    <AvatarImage src="https://res.cloudinary.com/dl10fq0cu/image/upload/v1731652645/00000000000000000000000000000000_wrtw74.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex-col">
                    <h1 className='text-sm font-extralight flex gap-2 items-center'>{comment?.user?.userName}<p className='text-xs opacity-50'>{timeAgo(comment?.timestamp)}</p> </h1>
                    <span className=' text-lg'>{comment?.text} </span>
                    <p className='text-xs text-[#bbacf2]'>reply</p>
                </div>
            </div>
        </div>
    )
}

export default Comment