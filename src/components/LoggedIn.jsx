import React from 'react';

const LoggedIn = () => {
  return (
    <div className="bg-[#1E1E1E] text-white min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#292929] rounded-2xl p-6 shadow-lg">
   
        <div className="flex flex-col items-center mb-6">
          <button className="text-white text-2xl mb-1">{'←'}</button>
          <h1 className="text-lg font-semibold">Where you’re logged in</h1>
        </div>
        <p className="text-gray-400 mb-4 text-center">See what devices are used to log in to your accounts.</p>
        
     
        <h2 className="font-bold mb-4">Accounts</h2>
        <div className="flex items-center p-4 mb-6 rounded-lg border border-[#8A82C9]">
          <img 
            src="https://via.placeholder.com/50" 
            alt="User" 
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <p className="font-semibold">_Allana01</p>
            <p className="text-gray-400">Xiaomi Redmi Note 11</p>
            <p className="text-gray-400 text-sm">+2 more</p>
          </div>
        </div>

       
        <h2 className="font-bold mb-4">Account login activity</h2>
        <p className="text-gray-400 mb-4">You’re currently logged in on these devices:</p>

       
        <div className="flex items-center justify-between p-4 mb-4 rounded-lg border border-[#8A82C9]">
          <div className="flex items-center">
            <div className="bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center mr-3">
              <i className="text-xl">📱</i>
            </div>
            <div>
              <p className="font-semibold">Xiaomi Redmi Note 11</p>
              <p className="text-gray-400 text-sm">Gurugram, India <span className="text-green-400">This device</span></p>
            </div>
          </div>
          <button className="text-white">{'>'}</button>
        </div>

       
        <p className="text-gray-400 mb-4">Logins on other devices</p>
        <div className="flex flex-col p-4 rounded-lg border border-[#8A82C9]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <i className="text-xl">📱</i>
              </div>
              <div>
                <p className="font-semibold">Samsung Galaxy A52s 5G</p>
                <p className="text-gray-400 text-sm">Haldwani, India at 17:55 on 1 November</p>
              </div>
            </div>
            <button className="text-white">{'>'}</button>
          </div>
          <button className="text-red-500 font-semibold mt-4">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;






















