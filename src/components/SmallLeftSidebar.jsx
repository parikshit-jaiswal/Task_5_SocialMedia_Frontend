import React, { useState } from 'react';
import { Home, MessageCircle, Compass, PlusCircle, Bell } from 'lucide-react';
import CreatePost from './CreatePost';
import { useNavigate, useLocation } from 'react-router-dom';

const SmallLeftSidebar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Sidebar route handler logic
    const sidebarHandler = (textType) => {
        if (textType === 'Create') {
            setOpen(true);
        } else if (textType === 'Messages') {
            navigate('/chat');
        } else if (textType === 'Home') {
            navigate('/');
        } else if (textType === 'Explore') {
            // navigate('/explore');
        } else if (textType === 'Notifications') {
            // navigate('/notifications');
        }
    };

    const menuItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: MessageCircle, label: 'Messages', path: '/chat' },
        { icon: PlusCircle, label: 'Create', path: '#' },
        { icon: Compass, label: 'Explore', path: '/explore' },
        { icon: Bell, label: 'Notifications', path: '/notifications' },
    ];

    return (
        <div className="leftSidebar fixed bottom-[-15px] h-[6rem] w-full bg-black flex justify-evenly opacity-100">
            <div className="flex justify-between w-full ">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path || (item.label === 'Create' && open);

                    return (
                        <button
                            key={item.label}
                            onClick={() => sidebarHandler(item.label)}
                            className={`w-full flex flex-col items-center justify-center transition-all duration-200 group
                            ${isActive ? 'text-[#bbacf2]' : 'text-white hover:text-[#bbacf2]'}`}
                        >
                            <item.icon
                                className={`w-7 h-7 mb-1 transition-all duration-200
                                ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                            />
                            <span className="text-xs font-medium">{item.label}</span>
                        </button>
                    );
                })}
            </div>
            <CreatePost open={open} setOpen={setOpen} />
        </div>
    );
};

export default SmallLeftSidebar;
