
import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#111111]">
    <Navbar />
     <div className="pt-28">
     <Sidebar />
     <main className="ml-32 p-6">
      </main>
      </div>
    </div>
  );
}

export default HomePage;