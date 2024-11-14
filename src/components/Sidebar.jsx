import React from 'react'
import { Smiley, Heart, Horse, House } from "@phosphor-icons/react";
import { Home } from 'lucide-react';
function Sidebar() {
  return (
    <div className="px-5 border-r-[1.5px] border-[#bbacf2] w-fit h-[100vh]">
      <div className="text-purple font-baloo font-extrabold text-8xl pt-5">hola'</div>
      <div className="sidebar-options mt-[3rem]">
        <div className="hover:bg-[#36343974] flex gap-1 p-1  text-7xl"><i><House /></i><p>Home</p></div>

      </div>
    </div>
  )
}

export default Sidebar