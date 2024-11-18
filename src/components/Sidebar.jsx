import React, { useState } from 'react';
import { Home, MessageCircle, Compass, PlusCircle, Bell } from 'lucide-react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Home');

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
            onClick={() => setActiveItem(item.label)}
            className={`w-full flex flex-col items-center justify-center transition-all duration-200 group
              ${activeItem === item.label ? 'text-[#bbacf2]' : 'text-white hover:text-[#bbacf2]'}`}
          >
            <item.icon 
              className={`w-6 h-6 mb-1 transition-all duration-200
                ${activeItem === item.label ? 'scale-110' : 'group-hover:scale-110'}`}
            />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};


export default Sidebar;