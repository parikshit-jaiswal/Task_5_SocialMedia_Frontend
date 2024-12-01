import { setFollowing, setSelectedUser } from '@/redux/authSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import axios from 'axios'

function ChatUser({ follower, fetchAllMessages }) {
    const dispatch = useDispatch()
    const { selectedUser } = useSelector(store => store.auth)

    const onclickUserHandler = (follower) => {
        dispatch(setSelectedUser(follower));
        fetchAllMessages(follower?._id)
    }


    return (
        <div onClick={() => onclickUserHandler(follower)} className={`flex items-center gap-5 cursor-pointer py-3 pl-5 ${follower?.userName === selectedUser?.userName ? 'bg-[#8d8a8a46]' : ""}`}>
            <div className="">
                <Avatar className="h-[4rem] w-[4rem]">
                    <AvatarImage src={follower?.profileImage} alt="profile" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="">
                <p className=''>{follower.userName}</p>
                <p className='text-xs font-extralight opacity-70 z-10'>Active 1hr ago</p>
            </div>
        </div >
    )
}

export default ChatUser