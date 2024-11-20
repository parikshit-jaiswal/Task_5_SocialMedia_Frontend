import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa"; 

const Privacy = () => {
  const [isPrivate, setIsPrivate] = useState(false);

  const handleToggle = () => {
    setIsPrivate(!isPrivate);
  };

  return (
    <div
      className="w-[420px] h-[172px] text-white rounded-lg shadow-lg p-4 flex flex-col justify-between"
      style={{
        fontFamily: "Helvetica, sans-serif",
        backgroundColor: "#2B2A2A",
      }}
    >
      {/* Header Section */}
      <div className="flex items-center gap-2">
        <button
          className="text-white p-2 rounded-full hover:bg-gray-700"
          onClick={() => alert("Go back")} // Replace with back logic
        >
          <FaArrowLeft />
        </button>
        <h2
          className="font-semibold"
          style={{
            fontSize: "20.4px",
            fontWeight: 700,
            lineHeight: "28.56px",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Account Privacy
        </h2>
      </div>

      {/* Private Account Toggle */}
      <div className="flex justify-between items-center mt-2"> 
        <span
          className="font-medium"
          style={{
            fontSize: "20.4px",
            fontWeight: 700,
            lineHeight: "28.56px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Private Account
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isPrivate}
            onChange={handleToggle}
            className="sr-only peer"
          />
          <div className="w-10 h-6 bg-gray-500 rounded-full peer-checked:bg-purple-500 peer-focus:outline-none transition-colors duration-200"></div>
          <div
            className={`absolute w-4 h-4 bg-white rounded-full top-1 left-1 peer-checked:translate-x-4 transition-transform`}
          ></div>
        </label>
      </div>
    </div>
  );
};

export default Privacy;
