import { setSelectedUser } from '@/redux/authSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

function ChatUser({ suggestedUser, fetchAllMessages }) {
    const dispatch = useDispatch()

    const onclickUserHandler = (suggestedUser) => {
        dispatch(setSelectedUser(suggestedUser));
        fetchAllMessages(suggestedUser.receiverId)
    }

    return (
        <div onClick={() => onclickUserHandler(suggestedUser)} className=" flex items-center gap-5 cursor-pointer hover:bg-[#8d8a8a22] py-3 pl-5" >
            <div className="">
                <img className='h-[4rem] w-[4rem] rounded-[100%] object-cover' src="https://res.cloudinary.com/dl10fq0cu/image/upload/v1731652645/00000000000000000000000000000000_wrtw74.jpg" alt="" />
            </div>
            <div className="">
                <p className=''>{suggestedUser.userName}</p>
                <p className='text-xs font-extralight opacity-70'>Active 1h ago</p>
            </div>
        </div >
    )
}

export default ChatUser