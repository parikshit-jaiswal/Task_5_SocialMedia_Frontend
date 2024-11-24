import React, { useState } from 'react';
import { Home, MessageCircle, Compass, PlusCircle, Bell } from 'lucide-react';
import CreatePost from './CreatePost';
import { useNavigate } from 'react-router-dom';

const LeftSidebar = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const sidebarHandler = (textType) => {
    if (textType === 'Create') {
      setOpen(true);
    }
    if (textType === 'Messages') {
      navigate('/chat')
    }
    if (textType === 'Home') {
      navigate('/')
    }

  }

  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: MessageCircle, label: 'Messages' },
    { icon: Compass, label: 'Explore' },
    { icon: PlusCircle, label: 'Create' },
    { icon: Bell, label: 'Notifications' },
  ];

  return (
    <div className="fixed left-6 top-[150px] h-[389px] w-20 bg-[#111111] flex flex-col items-center py-6 opacity-100">
      <div className="flex flex-col gap-[30px]">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setActiveItem(item.label);
              sidebarHandler(item.label);
            }}
            className={`w-full flex flex-col items-center justify-center transition-all duration-200 group
              ${activeItem === item.label ? 'text-[#bbacf2]' : 'text-white hover:text-[#bbacf2]'}`}
          >
            <item.icon
              className={`w-7 h-7 mb-1 transition-all duration-200
                ${activeItem === item.label ? 'scale-110' : 'group-hover:scale-110'}`}
            />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
      <CreatePost open={open} setOpen={setOpen} />
    </div>

  );
};


export default LeftSidebar;