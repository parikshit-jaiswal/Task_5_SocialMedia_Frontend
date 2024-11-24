import React from 'react';
import Navbar from '@/components/Navbar';
import Profile from '@/components/Profile';


function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <main className="ml-32 p-16">
        <div className="w-5/5 mx-auto space-y-4">
          <Profile />
        </div>
      </main>
    </div>



  );
}

export default ProfilePage;



