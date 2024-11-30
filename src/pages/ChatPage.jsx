import ChatUser from '@/components/extra/ChatUser'
import MessageBox from '@/components/MessageBox'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { setSelectedUser } from '@/redux/authSlice';
import { setMessages } from '@/redux/chatSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '@/components/Navbar';
import ChatSidebar from '@/components/ChatSidebar';


function ChatPage() {
    const { user, suggestedUsers, selectedUser } = useSelector(store => store.auth);
    const dispatch = useDispatch();


    const fetchAllMessages = async (receiverId) => {
        try {
            const res = await axios.get(`https://snapverse-6nqx.onrender.com/api/messages/chatHistory/${user._id}/${receiverId}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (res && res.data) {
                dispatch(setMessages(res.data));
            }
        } catch (error) {
            if (error.response) {
                console.error("Error fetching messages:", error.response.data);
            } else {
                console.error("Error:", error.message);
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex">
                <div className="w-[35%] border-r-[1px] border-[#bbacf2]  bg-black mt-[6rem]">
                    <ChatSidebar selectedUser={selectedUser} fetchAllMessages={fetchAllMessages} />
                </div>
                <div className="w-[65%]">
                    <MessageBox selectedUser={selectedUser} fetchAllMessages={fetchAllMessages} />
                </div>
            </div>
        </>

    )
}

export default ChatPage