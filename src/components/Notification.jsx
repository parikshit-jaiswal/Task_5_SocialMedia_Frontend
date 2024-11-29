import React from 'react'
import { Separator } from './ui/separator'
import NotificationBadge from './extra/NotificationBadge'

function Notification() {
    return (
        <>
            <div className="mx-[-1.4rem] overflow-scroll">
                <div className="text-2xl font-bold ml-5 mb-2">Notifications</div>
                <Separator />
                {[1, 2, 3, 4, 5, 6,].map((_, index) => (
                    <NotificationBadge key={index} />
                ))}
            </div>
        </>
    )
}

export default Notification