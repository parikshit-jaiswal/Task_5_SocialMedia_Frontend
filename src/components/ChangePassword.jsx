import React from "react";
import { FiArrowLeft } from "react-icons/fi"; 

const ChangePassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#111111]">
      <div className="bg-[#2B2A2A] text-white rounded-lg p-6 shadow-lg w-[90%] max-w-md">

        <button className="flex items-center mb-4 text-white">
          <FiArrowLeft className="mr-2 text-xl" />
        </button>

  
        <h1 className="text-2xl font-semibold mb-2">Change password</h1>

    
        <p className="text-sm text-white-400 mb-6">
          Your password must be at least 6 characters and should include a
          combination of numbers, letters, and special characters (!$@%).
        </p>

     
        <div className="space-y-4">
       
          <input
            type="password"
            placeholder="Current password (Updated 10-09-24)"
            className="w-full bg-[#2B2A2A] text-gray-300 placeholder-gray-500 border border-[#BBACF2] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
         
          <input
            type="password"
            placeholder="New password"
            className="w-full bg-[#2B2A2A] text-gray-300 placeholder-gray-500 border border-[#BBACF2] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
      
          <input
            type="password"
            placeholder="Retype new password"
            className="w-full bg-[#2B2A2A] text-gray-300 placeholder-gray-500 border border-[#BBACF2] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div className="mt-4">
          <a
            href="#"
            className="text-sm text-[#bbacf2] hover:underline"
          >
            Forgotten your password?
          </a>
        </div>

       
        <button
  type="button"
  className="w-full mt-6 bg-[#6C60A0] hover:bg-[#8F84C0] text-white font-medium py-3 rounded-full border border-[#bbacf2] transition duration-300"
>
  Change password
</button>

         
      </div>
    </div>
  );
};

export default ChangePassword;
