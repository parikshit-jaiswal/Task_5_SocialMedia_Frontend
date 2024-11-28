import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLink } from 'react-icons/fa'
import { Separator } from './ui/separator';
import RightSidebar from './RightSidebar';
import useGetUserProfile from '@/hooks/useGetUserProfile';
import { useSelector } from 'react-redux';

function Profile({ user, posts }) {
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
    <div className='profileContainer'>
      <div className="profile w-100% border-2 mt-[9.3rem] ml-[18rem] mr-[5rem] border-[#bbacf2]  bg-[#111111] rounded-xl overflow-hidden">
        {/* Banner Image */}
        <div className={`h-48 border-b-2 border-[#bbacf2]  bg-[url(${user?.coverImage?.url})] bg-cover bg-center`} />

        {/* Profile Content */}
        <div className="p-4">
          {/* Profile Picture and Social links */}
          <div className="flex justify-between items-start mb-4">
            <div className="relative -mt-20">
              <img
                src={user?.profileImage?.url}
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
            <div className="flex md:flex-row flex-col ">
              <div className="text-[#818181] ">
                <h1 className="text-[#bbacf2] text-2xl font-medium">{user?.userName}</h1>
                <p className="text-400 mb-2">{profileData.bio}</p>
                <p className="mb-4">{profileData.location}</p>
              </div>

              {/* Stats */}
              <div className="flex phone:gap-9 gap-4 mb-4 justify-center w-[80%]">
                <div className="flex items-center justify-center flex-col gap-1 phone:mt-0 mt-5">
                  <span className="font-bold text-2xl">{posts?.length}</span>
                  <span className="text-gray-400">Posts</span>
                </div>
                <div className=" h-[3rem] phone:mt-8 mt-7"><Separator orientation="vertical" /></div>
                <div className="flex items-center justify-center flex-col gap-1 phone:mt-0 mt-5">
                  <span className="font-bold text-2xl">{user?.followersCount}</span>
                  <span className="text-gray-400">Followers</span>
                </div>
                <div className="h-[3rem] phone:mt-8 mt-7"><Separator orientation="vertical" /></div>
                <div className="flex items-center justify-center flex-col gap-1 phone:mt-0 mt-5">
                  <span className="font-bold text-2xl">{user?.followingCount}</span>
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
    </div >
  )
}

export default Profile;