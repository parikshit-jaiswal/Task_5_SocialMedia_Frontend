import MessageBox from '@/components/MessageBox'
import React, { useState } from 'react'
import { setMessages } from '@/redux/chatSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '@/components/Navbar';
import ChatSidebar from '@/components/ChatSidebar';


function ChatPage() {
    const { user, selectedUser } = useSelector(store => store.auth);
    const dispatch = useDispatch();

    const fetchAllMessages = async (id) => {
        try {
            const res = await axios.get(`https://snapverse-6nqx.onrender.com/api/messages/chatHistory/${user._id}/${id}`, {
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
                <div className={`lg:w-[35%] md:w-[40%] w-[100%] md:border-r-[1px] border-[#bbacf2]  bg-black mt-[6rem] ${selectedUser ? "md:block hidden" : ""}`}>
                    <ChatSidebar selectedUser={selectedUser} fetchAllMessages={fetchAllMessages} />
                </div>
                <div className={`lg:w-[65%]  md:w-[60%] w-[0%]  ${selectedUser ? "" : "md:block hidden"}`}>
                    <MessageBox selectedUser={selectedUser} fetchAllMessages={fetchAllMessages} />
                </div>
            </div >
        </>
    )
}

export default ChatPage