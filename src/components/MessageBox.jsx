import { setSelectedUser } from '@/redux/authSlice';
import { setMessages } from '@/redux/chatSlice';
import axios from 'axios';
import { Heart, Images, Info, MessageCircleCode, Mic, Phone, Search, Smile, Video } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function MessageBox({ selectedUser, fetchAllMessages }) {
    const [textMessage, setTextMessage] = useState("");
    const { socket } = useSelector(store => store.socketio);
    const { user } = useSelector(store => store.auth);
    // const [messages, setMessages] = useState()
    const { messages } = useSelector(store => store.chat)
    const dispatch = useDispatch();




    useEffect(() => {
        return () => {
            dispatch(setSelectedUser(null));
        }
    }, []);


    const sendMessageHandler = async (receiverId) => {
        fetchAllMessages(receiverId);
        try {
            console.log(receiverId)
            socket.emit('sendMessage', { senderId: user._id, receiverId: receiverId, messageContent: textMessage });
            // const res = await axios.post(`https://instaclone-g9h5.onrender.com/api/v1/message/send/${receiverId}`, { textMessage }, {
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     withCredentials: true
            // });
            // if (res.data.success) {
            //     dispatch(setMessages([...messages, res.data.newMessage]));
            //     setTextMessage("");
            // }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        return () => {
            dispatch(setMessages([]));
        }
    }, []);


    return (
        <div className=' mt-[17vh] h-[83vh] w-[69.5vw] '>
            {/* User Top */}
            {
                selectedUser ?
                    <div className="p-[-5rem]">
                        <div className="head flex items-center justify-between px-5 border-b-2 border-[#bbacf26d]">
                            <div className=" flex items-center gap-5 cursor-pointer py-3">
                                <div className="">
                                    <img className='h-[4rem] w-[4rem] rounded-[100%] object-cover' src="https://res.cloudinary.com/dl10fq0cu/image/upload/v1731652645/00000000000000000000000000000000_wrtw74.jpg" alt="" />
                                </div>
                                <div className="">
                                    <p className=''>{selectedUser.userName}</p>
                                    <p className='text-xs font-extralight opacity-70'>Active 1h ago</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-baseline">
                                <Phone size={32} />
                                <Video size={32} />
                                <Info size={32} />
                            </div>
                        </div>
                        <div className="h-[28rem] ">
                            <div className="flex-col items-end overflow-scroll h-[96%] ">
                                {messages?.map((msg) => {
                                    return (
                                        <div className={`flex w-[100%] ${msg.sender === user?._id ? 'justify-end' : ''}`}>
                                            <div key={uuidv4()} className={`bg-[#bbacf2] w-fit p-2 rounded-2xl mt-5 mx-7 ${msg.sender === user?._id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}><p className='justify-end'>{msg.messageContent}</p></div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>



                        <div className="flex-grow mx-5">
                            <div className="relative border-[#bbacf29c] h-[2.5rem] rounded-full max-w-1xl mx-auto border-2">
                                <Smile size={44} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-6 h-6 hover:text-[#bbacf2] hover:cursor-pointer" />
                                <input
                                    type="text"
                                    placeholder="Message..."
                                    value={textMessage}
                                    onChange={(e) => setTextMessage(e.target.value)}
                                    className="w-[85%] bg-transparent text-[#bbacf2] rounded-full py-[6px] pl-12 pr-4 focus:outline-none"
                                />
                                <div className=" flex  gap-4 absolute left-[88%] top-1/2 transform -translate-y-1/2 ">
                                    <p onClick={() => sendMessageHandler(selectedUser.receiverId)} className='text-blue-500 font-semibold cursor-pointer'>Send</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    :
                    <div className='pt-[8rem]'>
                        <div className='flex flex-col items-center justify-center mx-auto'>
                            <MessageCircleCode className='w-32 h-32 my-5' />
                            <h1 className='font-medium'>Your messages</h1>
                            <span>Send a message to start a chat.</span>
                        </div>
                    </div>
            }



        </div>
    )
}

export default MessageBox