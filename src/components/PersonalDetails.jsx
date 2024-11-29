import React from "react";
import { IoArrowBack } from 'react-icons/io5';

function PersonalDetails() {
  return (
    <div className=" bg-transparent text-white">
      {/* Header Section */}
      <div className="mb-6">
        <button className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
          <IoArrowBack size={24} />
        </button>
        <h1 className="text-3xl font-semibold mt-4">Personal details</h1>
        <p className="text-zinc-400 mt-2 text-lg">
          Hola uses this information to verify your identity and to keep our community safe. You decide what personal details you make visible to others.
        </p>
      </div>

      {/* Details Section */}
      <div
        style={{ backgroundColor: '#4b4a4a', borderColor: '#111111', borderWidth: '1px' }}
        className="rounded-xl p-6 space-y-6 border"
      >
        {/* Contact Info */}
        <div>
          <h2 className="text-xl mb-2">Contact info</h2>
          <p className="text-zinc-400">+919288382784</p>
        </div>

        {/* Date of Birth */}
        <div>
          <h2 className="text-xl mb-2">Date of birth</h2>
          <p className="text-zinc-400">19 October 2004</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;



















