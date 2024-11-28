import React, { useState } from 'react'
import { Button } from './ui/button'
import { purple } from '@mui/material/colors'
import CreatePost from './CreatePost';

function ProfileActivity() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="profileActivity mt-[2rem] phone:ml-[9.1rem] ">
                <div className="pt-4  mid:mr-[5rem] phone:mr-[2rem] mr-[4%]  rounded-xl border-2 mid:ml-[9rem] phone:ml-[12%] ml-[4%] border-[#bbacf2]">
                    <div className="flex justify-between px-5">
                        <div className=" flex flex-col">
                            <div className="text-2xl font-semibold">Activity</div>
                            <div className="text-[#bbacf2]">2.1M Followers</div>
                        </div>
                        <div className="" onClick={() => setOpen(true)}>
                            <Button variant='purple' size='pill'>Create Post</Button>
                        </div>
                    </div>
                    <div className="flex justify-between px-5 mt-2">
                        <div className="border-b-[5px] border-b-none hover:border-b-[#bbacf2] md:px-10 pb-5 text-xl">Post</div>
                        <div className="border-b-[5px] border-b-none hover:border-b-[#bbacf2] md:px-10 text-xl">Comments</div>
                        <div className="border-b-[5px] border-b-none hover:border-b-[#bbacf2] md:px-10 text-xl">Media</div>
                        <div className="border-b-[5px] border-b-none hover:border-b-[#bbacf2] md:px-10 text-xl">Likes</div>
                    </div>
                </div>
            </div >
            <CreatePost open={open} setOpen={setOpen} />
        </>
    )
}

export default ProfileActivity