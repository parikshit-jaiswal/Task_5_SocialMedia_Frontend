import React, { useState } from 'react';
import { Home, MessageCircle, Compass, PlusCircle, Bell, Settings } from 'lucide-react';
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
    } else if (textType === 'Settings') {
      navigate('/setting');
    } else if (textType === 'Explore') {
      // navigate('/explore');
    } else if (textType === 'Notifications') {
      // navigate('/notifications');
    };
  }

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: MessageCircle, label: 'Messages', path: '/chat' },
    { icon: Compass, label: 'Explore', path: '/explore' },
    { icon: PlusCircle, label: 'Create', path: '#' }, // Create doesn't have a specific route
    { icon: Settings, label: 'Settings', path: '/setting' },
  ];

  return (
    <div className="leftSidebar leftSidebarVertical fixed left-18 pt-16 top-[120px] h-[100vh] phone:w-[15rem] bg-black phone:flex hidden flex-col items-center py-6 opacity-100 z-50">
      <div className="flex flex-col gap-[30px]">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path || (item.label === 'Create' && open);

          return (
            <button
              key={item.label}
              onClick={() => sidebarHandler(item.label)}
              className={`w-full flex items-center justify-start transition-all duration-200 group
                ${isActive ? 'text-[#bbacf2]' : 'text-white hover:text-[#bbacf2]'}`}
            >
              <item.icon
                className={`w-7 h-7 mb-1 
                  ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
              />
              <p className="text-xl font-medium ml-2 leftSidebarLabel">{item.label}</p>
            </button>
          );
        })}
      </div>
      <CreatePost open={open} setOpen={setOpen} />
    </div>
  );
};

export default LeftSidebar;
