import React, { useState } from 'react';
import { Search, Bell, MapPin, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-black px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
            hola'
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative border border-[#bbacf2] rounded-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#bbacf2] w-5 h-5" />
            <input
              type="text"
              placeholder="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 text-[#bbacf2] rounded-full py-2 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-300 hover:text-white">
            <Bell className="w-6 h-6" />
          </button>
          <button className="text-gray-300 hover:text-white">
            <MapPin className="w-6 h-6" />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-purple-400"
            />
            <div className="flex items-center text-gray-300 hover:text-white cursor-pointer">
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


