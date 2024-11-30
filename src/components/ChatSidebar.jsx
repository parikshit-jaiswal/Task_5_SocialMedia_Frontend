import { Camera, MoveLeft, Search, UserPlus } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ChatUser from './extra/ChatUser';
import { v4 as uuidv4 } from 'uuid';

function ChatSidebar({ fetchAllMessages }) {
    const [activeTab, setActiveTab] = useState('All');
    const { user, suggestedUsers, selectedUser } = useSelector(store => store.auth);

    const tabs = [
        { name: 'All', key: 'All' },
        { name: 'Unread', key: 'Unread' },
        { name: 'Unreplied', key: 'Unreplied' },
        { name: 'Group', key: 'Group' },
        { name: 'Close Friends', key: 'CloseFriends' },
    ];

    return (
        <div className="">
            <div className="w-full px-4 py-3">
                <div className="fixed pt-5 bg-black z-50 w-[33%]">
                    <div className="flex  justify-between p-2">
                        <div className="flex gap-4">
                            <div className="hover:opacity-60 opacity-100"><MoveLeft strokeWidth={3} /></div>
                            <div className="font-semibold text-xl">{user?.userName}</div>
                        </div>
                        <div className="flex gap-4">
                            <div className=""><Search size={28} color="#b59ce2" strokeWidth={2.5} /></div>
                            <div className=""><UserPlus size={28} color="#b59ce2" strokeWidth={2.5} /></div>
                            <div className=""><Camera size={28} color="#b59ce2" strokeWidth={2.5} /></div>
                        </div>
                    </div>

                    <div className="tabs">
                        <div className="flex justify-between p-2 px-3">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    className={`text-lg text-white  px-1 py-1 ${activeTab === tab.key ? 'border-b-2 border-white' : ''}`}
                                    onClick={() => setActiveTab(tab.key)}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="users overflow-scroll h-[83.5vh]">
                    {suggestedUsers.length !== 0 ?
                        <div className="pt-[8.5rem]">
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
    )
}

export default ChatSidebar