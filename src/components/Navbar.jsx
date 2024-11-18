import React, { useState } from 'react';
import { Search, Bell, MapPin, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black px-6 py-4 z-50">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <h1 className="text-[#bbacf2] font-baloo font-extrabold text-7xl pt-5">
            hola'
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-8">
          <div className="relative border-[#bbacf2] rounded-full max-w-1xl mx-auto" style={{ borderWidth: '3px' }}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#bbacf2] w-5 h-5" />
            <input
              type="text"
              placeholder="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#343434] text-[#bbacf2] rounded-full py-2 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#bbacf2]"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6 flex-shrink-0">
          <button className="text-white hover:text-[#bbacf2] transition-colors">
            <Bell className="w-6 h-6" />
          </button>
          <button className="text-white hover:text-[#bbacf2] transition-colors">
            <MapPin className="w-6 h-6" />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-[#bbacf2]"
            />
            <div className="flex items-center text-white hover:text-[#bbacf2] cursor-pointer transition-colors">
              <span className="text-sm font-medium">@Naisyaa</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;








