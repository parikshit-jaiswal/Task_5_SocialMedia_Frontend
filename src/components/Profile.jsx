import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLink } from 'react-icons/fa'
import { Separator } from './ui/separator';
import RightSidebar from './RightSidebar';

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
    <>
      <div className="w-[50vw] border-2 mt-[9.3rem]  ml-[15rem] border-[#bbacf2] max-w-3xl bg-[#111111] rounded-xl overflow-hidden">
        {/* Banner Image */}
        <div className="h-48 border-b-2 border-[#bbacf2]  bg-[url('https://images.unsplash.com/photo-1731929464035-1ba6df40565f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />

        {/* Profile Content */}
        <div className="p-4">
          {/* Profile Picture and Social links */}
          <div className="flex justify-between items-start mb-4">
            <div className="relative -mt-20">
              <img
                src="https://images.unsplash.com/photo-1732107214254-350490d58bda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full border-4 border-[#15202b]"
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
          <div className="">
            <div className="flex">
              <div className="text-[#818181]">
                <h1 className="text-[#bbacf2] text-2xl font-medium">{profileData.name}</h1>
                <p className="text-400 mb-2">{profileData.bio}</p>
                <p className="mb-4">{profileData.location}</p>
              </div>

              {/* Stats */}
              <div className="flex gap-9 mb-4 justify-center w-[80%]">
                <div className="flex items-center justify-center flex-col gap-1">
                  <span className="font-bold text-2xl">{profileData.stats.posts}</span>
                  <span className="text-gray-400">Posts</span>
                </div>
                <div className="h-[3rem] mt-8"><Separator orientation="vertical" /></div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <span className="font-bold text-2xl">{profileData.stats.followers}</span>
                  <span className="text-gray-400">Followers</span>
                </div>
                <div className="h-[3rem] mt-8"><Separator orientation="vertical" /></div>
                <div className="flex items-center justify-center flex-col gap-1">
                  <span className="font-bold text-2xl">{profileData.stats.following}</span>
                  <span className="text-gray-400">Following</span>
                </div>
              </div>
            </div>

            {/* setting button */}
            <button className="bg-transparent border border-[#bbacf2] bg-[#1c1c1c] text-white px-4 py-1.5 rounded-full text-sm font-bold">
              Profile settings
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;