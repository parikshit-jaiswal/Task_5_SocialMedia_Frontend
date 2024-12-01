import { Camera, MoveLeft, Search, UserPlus } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ChatUser from './extra/ChatUser';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import useGetFollowingList from '@/hooks/useGetFollowingList';

function ChatSidebar({ fetchAllMessages }) {
    const [activeTab, setActiveTab] = useState('All');
    const { user, following } = useSelector(store => store.auth);

    const tabs = [
        { name: 'All', key: 'All' },
        { name: 'Unread', key: 'Unread' },
        { name: 'Unreplied', key: 'Unreplied' },
        { name: 'Group', key: 'Group' },
        { name: 'Close Friends', key: 'CloseFriends' },
    ];

    useGetFollowingList();


    return (
        <div className="">
            <div className="w-full phone:px-4 py-3 phone:mt-0 mt-[-3rem]">
                <div className="fixed pt-5 bg-black z-50 md:w-[33%] phone:w-[100%] w-[105%] md:px-0 px-5 phone:mx-0 mx-[-0.5rem]">
                    <div className="flex justify-between p-2">
                        <div className="flex gap-4">
                            <Link to={'/'} className="hover:opacity-60 opacity-100">
                                <MoveLeft strokeWidth={3} />
                            </Link>
                            <div className="font-semibold text-xl">{user?.userName}</div>
                        </div>
                        <div className="flex gap-4">
                            <div className="">
                                <Search size={28} color="#b59ce2" strokeWidth={2.5} />
                            </div>
                            <div className="">
                                <UserPlus size={28} color="#b59ce2" strokeWidth={2.5} />
                            </div>
                            <div className="">
                                <Camera size={28} color="#b59ce2" strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>

                    <div className="tabs">
                        <div className="flex justify-between p-2 px-3">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    className={`md:text-[1vw] phone:text-lg text-sm text-white md:px-1 py-1 ${activeTab === tab.key ? 'border-b-2 border-white' : ''}`}
                                    onClick={() => setActiveTab(tab.key)}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="users overflow-scroll md:h-[83.5vh] h-100%">
                    {Array.isArray(following) && following.length !== 0 ? (
                        <div className="phone:pt-[8.5rem] pt-[7rem]">
                            {following.map((follower) => (
                                <ChatUser key={uuidv4()} follower={follower} fetchAllMessages={fetchAllMessages} />
                            ))}
                        </div>
                    ) : (
                        <div className="pt-[7.5rem] pl-5 text-red-600">No Followers!!</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ChatSidebar;
