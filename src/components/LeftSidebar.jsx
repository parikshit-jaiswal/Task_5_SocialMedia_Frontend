import React, { useState } from 'react';
import { Home, MessageCircle, Compass, PlusCircle, Bell } from 'lucide-react';
import CreatePost from './CreatePost';
import { useLocation, useNavigate } from 'react-router-dom';

const LeftSidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    { icon: Compass, label: 'Explore', path: '/explore' },
    { icon: PlusCircle, label: 'Create', path: '#' }, // Create doesn't have a specific route
    { icon: Bell, label: 'Notifications', path: '/notifications' },
  ];

  return (
    <div className="leftSidebar fixed left-6 top-[150px] h-[389px] w-20 bg-[#111111] phone:flex hidden flex-col items-center py-6 opacity-100">
      <div className="flex flex-col gap-[30px]">
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

export default LeftSidebar;
