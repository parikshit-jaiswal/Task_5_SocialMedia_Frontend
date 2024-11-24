import ChatUser from '@/components/extra/ChatUser'
import MessageBox from '@/components/MessageBox'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { setSelectedUser } from '@/redux/authSlice';
import { setMessages } from '@/redux/chatSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


function ChatPage() {
    const { user, suggestedUsers, selectedUser } = useSelector(store => store.auth);
    const [textMessage, setTextMessage] = useState("");
    const { messages } = useSelector(store => store.chat)
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
                console.log(res.data);
                dispatch(setMessages(res.data));
                setTextMessage("");
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
            <div className=" flex">
                <div className="pl-[8rem] overflow-scroll">
                    <div className="reciever mt-[14vh] w-[22vw] h-[86%]  border-x-[0.2px] border-[#bbacf26d]">
                        <div className="h-[34.5rem]">
                            <div className="text-lg font-semibold pt-[2.5rem] fixed bg-[#111] pb-5 w-[20.8vw] z-40 px-5">Messages</div>
                            {suggestedUsers.length !== 0 ?
                                <div className="pt-[5.5rem]">
                                    {suggestedUsers.map((suggestedUser) => {
                                        return (
                                            <ChatUser key={uuidv4()} suggestedUser={suggestedUser} fetchAllMessages={fetchAllMessages} />
                                        )
                                    })}
                                </div>
                                :
                                <div className="pt-[7.5rem] pl-5 text-red-600">No Followers!!</div>
                            }
                        </div>
                    </div>
                </div>
                <div className="">
                    <MessageBox selectedUser={selectedUser} fetchAllMessages={fetchAllMessages} />
                </div>
            </div>

        </>

    )
}

export default ChatPage