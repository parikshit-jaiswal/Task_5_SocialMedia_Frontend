import React, { useState } from 'react';
import { Home, MessageCircle, Compass, PlusCircle, Bell } from 'lucide-react';
import CreatePost from './CreatePost';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { v4 as uuidv4 } from 'uuid';

const SmallLeftSidebar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useSelector((store) => store.auth);


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
        { icon: "profile", label: 'profile', path: '/profile' },
    ];

    return (
        <div className="leftSidebar fixed bottom-[-15px] h-[6rem] w-[100%] bg-black flex justify-evenly opacity-100 px-1">
            <div className="flex justify-between w-full ">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path || (item.label === 'Create' && open);
                    return (
                        <>
                            {item.label !== 'profile' ?
                                <button
                                    key={uuidv4()}
                                    onClick={() => sidebarHandler(item.label)}
                                    className={`w-full flex flex-col items-center justify-center transition-all duration-200 group
                            ${isActive ? 'text-[#bbacf2]' : 'text-white hover:text-[#bbacf2]'}`}
                                >
                                    <item.icon
                                        className={`w-7 h-7 mb-1 transition-all duration-200
                                ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                                    />
                                    <span className="text-xs font-medium">{item.label}</span>
                                </button> :
                                <div key={uuidv4()} className="mt-5 flex flex-col items-center mx-2 mr-5">
                                    <Link to='/profile'>
                                        <img
                                            src={user ? user?.profileImage.url : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                                            alt="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                            className="w-9 h-9 rounded-full"
                                        /></Link>
                                    <span className="text-xs font-medium">{item.label}</span>

                                </div>

                            }
                        </>
                    );

                })}
            </div>
            <CreatePost open={open} setOpen={setOpen} />
        </div >
    );
};

export default SmallLeftSidebar;
