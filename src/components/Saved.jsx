import React from "react";
import { FiArrowLeft } from "react-icons/fi"; 

const Saved = () => {
  const images = [
    "https://via.placeholder.com/300", 
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  return (
    <div className="min-h-screen bg-[#2B2A2A] text-white p-4">
     
      <div className="flex flex-col items-start mb-6">
        <button className="flex items-center text-3xl">
          <FiArrowLeft className="mr-2" />
        </button>
    <h1 className="text-4xl font-bold mt-2">Saved</h1>
      </div>
 <p className="mb-6 text-2xl text-white font-medium">All Post</p>

  
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="border-4 border-[#2B2A2A] rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={src}
              alt={`Saved Post ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;
