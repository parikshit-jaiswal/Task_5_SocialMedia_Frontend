import LeftSidebar from '@/components/LeftSidebar'
import Navbar from '@/components/Navbar'
import SmallLeftSidebar from '@/components/SmallLeftSidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
    return (
        <div id='mainLayout'>
            <Navbar />
            <LeftSidebar />
            <div className="phone:hidden block">
                <SmallLeftSidebar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout