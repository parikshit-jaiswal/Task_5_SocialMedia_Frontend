import React from 'react';
import { IoChevronForwardOutline, IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function PasswordSecurity() {
  return (
    <div className=" text-white p-4" style={{ backgroundColor: '#111111' }}>
      {/* Header */}

      <div className="flex flex-col items-start mb-6">
        <h1 className="text-xl font-bold mt-2">Password and security</h1>
      </div>

      {/* Description */}
      <h2 className="text-lg mb-2">Login and recovery</h2>
      <p className="text-sm mb-6" style={{ color: '#bdbdbd' }}>
        Manage your passwords, login preferences, and recovery methods.
      </p>

      {/* Main Options */}
      <div className="mb-8">
        <button
          className="w-full p-5  rounded-t-lg flex items-center justify-between"
          style={{ backgroundColor: '#4B4A4A' }}
        >
          <span
            className="text-white text-sm font-medium"
            style={{ fontSize: '1.2rem', color: 'white' }}
          >
            Change password
          </span>
          <IoChevronForwardOutline size={30} className="text-white" />
        </button>

        <button
          className="w-full p-5 rounded-b-lg flex items-center justify-between"
          style={{ backgroundColor: '#4B4A4A' }}
        >
          <span
            className="text-white text-lg font-medium"
            style={{ fontSize: '1.2rem', color: 'white' }}
          >
            Saved login
          </span>
          <IoChevronForwardOutline size={30} className="text-white" />
        </button>
      </div>

      {/* Security Checks Section */}
      <div className="mb-4">
        <h2 className="text-lg mb-2">Security checks</h2>
        <p className="text-sm mb-4" style={{ color: '#bdbdbd' }}>
          Review security issues by running checks across apps, devices, and emails sent.
        </p>


        <button
          className="w-full p-4 rounded-lg flex items-center justify-between"
          style={{ backgroundColor: '#4B4A4A' }}
        >
          <div className="flex flex-col items-start w-full">
            <span
              className="mb-2 text-white text-lg font-medium"
              style={{ fontSize: '1.2rem' }}
            >
              Where you're logged in
            </span>
          </div>
          <IoChevronForwardOutline size={30} className="text-gray-400" />
        </button>

      </div>
    </div>





  );
}

export default PasswordSecurity;
