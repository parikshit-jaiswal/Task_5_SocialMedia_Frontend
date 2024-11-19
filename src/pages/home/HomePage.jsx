import React from 'react'
import { Outlet } from 'react-router-dom'
import Feed from './Feed'
import RightSidebar from '@/components/RightSidebar'

const HomePage = () => {
    return (
        <div className='flex'>
            <div className='flex-grow'>
                <Feed />
                <Outlet />
            </div>
            <RightSidebar />
        </div>
    )
}

export default HomePage