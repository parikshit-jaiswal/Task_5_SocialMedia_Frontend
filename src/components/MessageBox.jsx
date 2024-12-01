import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setSelectedUser } from '@/redux/authSlice';
import { setMessages } from '@/redux/chatSlice';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { MoveLeft, Smile } from 'lucide-react';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

function MessageBox() {
    const [textMessage, setTextMessage] = useState("");
    const chatBoxRef = useRef(null);
    const { socket } = useSelector((store) => store.socketio);
    const { user, selectedUser } = useSelector((store) => store.auth);
    const { messages } = useSelector((store) => store.chat);
    const dispatch = useDispatch();
    const _768 = useMediaQuery("(min-width:768px)");


    useEffect(() => {
        return () => {
            dispatch(setSelectedUser(null));
        };
    }, [dispatch]);

    useEffect(() => {
        if (selectedUser) {
            socket.emit('join', { userId: user._id });

            socket.on('receiveMessage', (newMessage) => {
                dispatch(setMessages([...messages, newMessage]));
            });

            return () => {
                socket.off('receiveMessage');
            };
        }
    }, [selectedUser, socket, user, dispatch, messages]);

    useEffect(() => {
        const scrollToBottom = () => {
            if (chatBoxRef.current) {
                const inputSectionHeight = document.querySelector('.msgInput')?.offsetHeight || 0;
                const scrollHeight = chatBoxRef.current.scrollHeight;
                const clientHeight = chatBoxRef.current.clientHeight;
                chatBoxRef.current.scrollTop = scrollHeight - clientHeight + inputSectionHeight; // Adjust scroll position
            }
        };

        // Delay the scroll action if necessary to ensure the DOM is fully updated
        setTimeout(scrollToBottom, 100);  // Adjust timeout duration if needed
    }, [messages]); // This will run whenever messages change

    const sendMessageHandler = async (receiverId) => {
        if (textMessage.trim()) {
            try {
                socket.emit('sendMessage', {
                    senderId: user._id,
                    receiverId: receiverId,
                    messageContent: textMessage,
                });
                dispatch(setMessages([...messages, { sender: user._id, receiver: receiverId, messageContent: textMessage }]));
                setTextMessage("");
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    if (_768) {
        return (
            <div className="mt-[7rem] w-full">
                {
                    selectedUser ? (
                        <>
                            <div className="top bg-black px-5 pt-4 w-full fixed">
                                <div className="flex p-3">
                                    <Avatar className="h-[4rem] w-[4rem]">
                                        <AvatarImage src={selectedUser?.profileImage} alt={selectedUser?.userName} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-col ml-5">
                                        <div className="text-xl text-[#bbacf2]">{selectedUser?.userName}</div>
                                        <div className="opacity-50">1hr ago</div>
                                    </div>
                                </div>
                            </div>

                            <div className="chatBox pt-[6rem] h-[75vh] overflow-y-scroll" ref={chatBoxRef}>
                                {messages?.map((msg) => (
                                    <div key={uuidv4()} className={`flex w-full ${msg.sender === user?._id ? 'justify-end' : ''}`}>
                                        <div className={`max-w-[45%] font-semibold p-2 rounded-2xl mt-5 mx-7 ${msg.sender === user?._id ? 'bg-[#bbacf2] text-black' : 'bg-[#463d79] text-white'}`}>
                                            <p>{msg.messageContent} </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex-col justify-center">
                                <div className="flex-grow mx-5 mt-4">
                                    <div className="relative border-[#bbacf29c] h-[2.5rem] rounded-full mx-auto border-2">
                                        <Smile size={24} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white hover:text-[#bbacf2] cursor-pointer" />
                                        <input
                                            type="text"
                                            placeholder="Message..."
                                            value={textMessage}
                                            onChange={(e) => setTextMessage(e.target.value)}
                                            className="w-[85%] bg-transparent text-[#bbacf2] rounded-full py-[6px] pl-12 pr-4 focus:outline-none"
                                        />
                                        <p
                                            onClick={() => sendMessageHandler(selectedUser?._id)}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500 font-semibold cursor-pointer"
                                        >
                                            Send
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null
                }
            </div>
        );
    } else {
        return (
            <div className="phone:mt-[7rem] mt-[5rem] w-full">
                {
                    selectedUser ? (
                        <>
                            <div className="top bg-black px-5 pt-5 w-full fixed phone:top-24 top-12">
                                <div className="flex p-3">
                                    <div className="flex items-center">
                                        <Link onClick={() => dispatch(setSelectedUser(null))} className="hover:opacity-60 opacity-100 mr-5"><MoveLeft strokeWidth={3} /></Link>
                                        <Avatar className="h-[3.5rem] w-[3.5rem]">
                                            <AvatarImage src={selectedUser?.profileImage?.url} alt={selectedUser?.userName} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="flex-col ml-5">
                                        <div className="text-xl text-[#bbacf2]">{selectedUser?.userName}</div>
                                        <div className="opacity-50">1hr ago</div>
                                    </div>
                                </div>
                            </div>

                            <div className="chatBox phone:mt-[14rem] mt-[9rem] pb-[3.5rem] w-[100vw] overflow-y-scroll " ref={chatBoxRef}>
                                {messages?.map((msg) => (
                                    <div key={uuidv4()} className={`flex w-full ${msg.sender === user?._id ? 'justify-end' : ''}`}>
                                        <div className="max-w-[50%]">
                                            <div className={`w-fit p-2 rounded-2xl font-semibold mt-5 mx-7 ${msg.sender === user?._id ? 'bg-[#bbacf2] text-black' : 'bg-[#463d79] text-white'}`}>
                                                <p className=''>{msg.messageContent} </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="h-14 border"></div>

                            <div className="msgInput fixed bottom-1 w-full flex gap-2 z-50 ">
                                <input
                                    type="text"
                                    placeholder="Message..."
                                    value={textMessage}
                                    onChange={(e) => setTextMessage(e.target.value)}
                                    className="w-[75%] border-[#bbacf2] border-[1px] bg-black text-[#bbacf2] rounded-full py-[6px] pl-5 ml-2 pr-4 focus:outline-none"
                                />
                                <Button variant="outline" size="pill" onClick={() => sendMessageHandler(selectedUser?._id)} className="w-[25%] mr-3 bg-black" >Send</Button>
                            </div>
                        </>
                    ) : null
                }
            </div>
        );
    }
}

export default MessageBox;
