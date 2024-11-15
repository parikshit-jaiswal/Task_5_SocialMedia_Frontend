import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

import React from 'react'

function HomePage() {
    return (
        <>
       <div className='container'>
        <Navbar />
       </div>
            <Sidebar />

        </>
    )
}

export default HomePage