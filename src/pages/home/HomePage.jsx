import React from 'react'
import { Outlet } from 'react-router-dom'
import Feed from './Feed'
import RightSidebar from '@/components/RightSidebar'
import useGetAllPost from '@/hooks/useGetAllPost'
import useGetSuggestedUsers from '@/hooks/useGetSuggestedUsers'

const HomePage = () => {
    useGetAllPost();
    useGetSuggestedUsers();
    return (
        <div className='flex'>
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