import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

const SavedLogin = () => {
  const [isSaved, setIsSaved] = useState(false); 

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#111111]">
      <div className="bg-[#2B2A2A] text-white rounded-lg p-6 shadow-lg w-[90%] max-w-md">
  
        <button className="flex items-center mb-4 text-white">
          <FiArrowLeft className="mr-2 text-xl" />
        </button>


        <h1 className="text-2xl font-semibold mb-2">Saved login info</h1>

      
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium">Saved login</span>
      
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isSaved}
              onChange={() => setIsSaved(!isSaved)}
            />
            <div className="w-11 h-6 bg-[#7D7D7D] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
        </div>


        <p className="text-sm text-[#C8C8C8]">
          We’ll remember your account info for you on this device. You won’t
          need to enter it when you login in again.
        </p>
      </div>
    </div>
  );
};

export default SavedLogin;
