import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLink } from 'react-icons/fa'

function Profile() {
  const profileData = {
    name: 'Richard Wright',
    bio: "I'm delighted to introduce myself as a professional musician",
    location: '@Ghaziabad (201206), U.P.',
    stats: {
      posts: 319,
      followers: '2.1M',
      following: 576
    }
  }

  return (
    <div className="w-full max-w-3xl bg-[#111111] rounded-xl overflow-hidden">
      {/* Banner Image */}
      <div className="h-48 bg-[url('https://images.unsplash.com/photo-1582560478879-891c8c2dd25d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center" />

      {/* Profile Content */}
      <div className="p-4">
        {/* Profile Picture and Social links */}
        <div className="flex justify-between items-start mb-4">
          <div className="relative -mt-20">
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="w-32 h-32 rounded-full border-4 border-[#15202b]"
            />
          </div>
          <div className="flex gap-4">
            <FaInstagram className="text-pink-500 text-xl" />
            <FaFacebook className="text-blue-500 text-xl" />
            <FaTwitter className="text-sky-500 text-xl" />
            <FaLink className="text-gray-400 text-xl" />
           
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-[#818181]">
          <h1 className="text-[#bbacf2] text-2xl font-medium">{profileData.name}</h1>
          <p className="text-400 mb-2">{profileData.bio}</p>
          <p className="mb-4">{profileData.location}</p>

          {/* Stats */}
          <div className="flex gap-6 mb-4">
            <div className="flex items-center gap-1">
              <span className="font-bold">{profileData.stats.posts}</span>
              <span className="text-gray-400">Posts</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold">{profileData.stats.followers}</span>
              <span className="text-gray-400">Followers</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold">{profileData.stats.following}</span>
              <span className="text-gray-400">Following</span>
            </div>
          </div>

          {/* setting button */}
          <button className="bg-transparent border border-[#bbacf2] bg-[#1c1c1c] text-white px-4 py-1.5 rounded-full text-sm font-bold">
            Profile settings
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile;