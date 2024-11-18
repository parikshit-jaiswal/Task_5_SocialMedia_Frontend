import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';


function ProfilePage() {
    return (
      <div className="min-h-screen bg-[#111111]">
        <Navbar />
        <div className="pt-28">
          <Sidebar />
        </div>
      </div>
  
  
  
    );
  }
  
  export default ProfilePage;
  
  
  
  