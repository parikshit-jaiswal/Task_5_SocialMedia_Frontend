import React from 'react';
import Profile from '@/components/Profile';
import ProfileRightSidebar from '@/components/ProfileRightSidebar';
import Feed from './home/Feed';


function ProfilePage() {
  return (
    <>
      <div className='flex'>
        <div className='flex-grow'>
          <Profile />
          <Feed />
        </div>
        <ProfileRightSidebar />
      </div>

    </>



  );
}

export default ProfilePage;



