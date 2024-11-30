import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Feed from './Feed'
import RightSidebar from '@/components/RightSidebar'
import useGetAllPost from '@/hooks/useGetAllPost'
import useGetSuggestedUsers from '@/hooks/useGetSuggestedUsers'
import Navbar from '@/components/Navbar'
import LeftSidebar from '@/components/LeftSidebar'
import SmallLeftSidebar from '@/components/SmallLeftSidebar'

const HomePage = () => {
    useGetAllPost();
    useGetSuggestedUsers();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='flex'>
            <Navbar />
            <LeftSidebar />
            <div className="phone:hidden block">
                <SmallLeftSidebar />
            </div>
            <div className='sm:flex-grow'>
                <div className="sm:ml-[10%]">
                    <Feed />
                </div>
                <Outlet />
            </div>
            <RightSidebar />
        </div>
    )
}

export default HomePage