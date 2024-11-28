import React, { useEffect } from 'react';
import Profile from '@/components/Profile';
import ProfileRightSidebar from '@/components/ProfileRightSidebar';
import Feed from './home/Feed';
import '@/responsiveUI/ProfilePage.css'
import Navbar from '@/components/Navbar';
import LeftSidebar from '@/components/LeftSidebar';
import UserPost from '@/components/UserPost';
import { useSelector } from 'react-redux';
import useGetUserProfile from '@/hooks/useGetUserProfile';
import ProfileActivity from '@/components/ProfileActivity';


function ProfilePage() {
  const { user, userProfile } = useSelector(store => store.auth);
  useGetUserProfile(user?._id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <div className='flex'>
        <Navbar />
        <LeftSidebar />
        <div className='flex-grow w-[50vw]'>
          <Profile user={userProfile?.user} posts={userProfile?.posts} />
          <ProfileActivity />
          <div className="flex justify-center">
            <UserPost posts={userProfile?.posts} user={userProfile?.user} />
          </div>
        </div>
        <div className="profileRightSidebar">
          <ProfileRightSidebar />
        </div>
      </div>

    </>



  );
}

export default ProfilePage;



