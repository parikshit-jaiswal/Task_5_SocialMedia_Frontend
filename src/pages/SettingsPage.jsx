import LeftSidebar from '@/components/LeftSidebar'
import Navbar from '@/components/Navbar'
import Settings from '@/components/Settings'
import SmallLeftSidebar from '@/components/SmallLeftSidebar'
import React from 'react'

function SettingsPage() {
    return (
        <>
            <Navbar />
            <LeftSidebar />
            <div className="phone:hidden block">
                <SmallLeftSidebar />
            </div>
            <Settings />
        </>
    )
}

export default SettingsPage