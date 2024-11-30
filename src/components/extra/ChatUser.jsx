import { setSelectedUser } from '@/redux/authSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

function ChatUser({ suggestedUser, fetchAllMessages }) {
    const dispatch = useDispatch()
    const { selectedUser } = useSelector(store => store.auth)

    const onclickUserHandler = (suggestedUser) => {
        dispatch(setSelectedUser(suggestedUser));
        fetchAllMessages(suggestedUser?._id)
    }

    return (
        <div onClick={() => onclickUserHandler(suggestedUser)} className={`flex items-center gap-5 cursor-pointer py-3 pl-5 ${suggestedUser?._id === selectedUser?._id ? 'bg-[#8d8a8a46]' : ""}`}>
            <div className="">
                <Avatar className="h-[4rem] w-[4rem]">
                    <AvatarImage src={suggestedUser?.profileImage?.url} alt="profile" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="">
                <p className=''>{suggestedUser.userName}</p>
                <p className='text-xs font-extralight opacity-70 z-10'>Active 1hr ago</p>
            </div>
        </div >
    )
}

export default ChatUser