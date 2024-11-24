import React from 'react'
import { Button } from './ui/button'
import { Radio } from 'lucide-react'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

function RightSidebar() {
    return (
        <div className="flex justify-end pr-8">
            <div className='w-[28vw] pr-7 mt-[10rem]'>
                <div><p className=' flex justify-center items-center bg-[#bbacf2] gap-1 text-xl font-semibold rounded-lg p-2 active:bg-[#a192e3] cursor-pointer'>GO LIVE <Radio size={32} /></p></div>
                <div className="h-fit w-full border-[5px] rounded-3xl border-[#bbacf2] mt-5 pb-5">
                    <p className='text-xl ml-4 mt-2'>Live</p>
                    <div className="liveUsers flex mt-5 gap-2 overflow-x-scroll">
                        {[1, 2, 3, 4, 5].map((index) => {
                            return (
                                <div key={index} className="user ml-3 flex-col justify-center items-center">
                                    <div className="w-[4.8rem] h-[4.8rem] flex justify-center items-center border-4 border-[#6c60a0] rounded-[100%]">
                                        <img
                                            className="w-[4rem] h-[4rem] bg-white rounded-[100%] object-cover"
                                            src="https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt=""
                                        />
                                    </div>
                                    <p className="text-center mt-2">@ArickS</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="premium h-fit w-full border-[3px] rounded-2xl border-[#bbacf2] mt-5 pb-5">
                    <p className='ml-3 mt-4 opacity-80'>Grow professionally with Premium</p>
                    <p className='font-semibold text-xl ml-3 mt-3'><WorkspacePremiumIcon fontSize='large' style={{ color: '#FFD700' }} /> Try 1 month for 0$</p>
                </div>
                <div className="addFriend">
                    <div className="flex justify-between mt-5 px-1 text-xl"><p>Add friend</p><p>See All</p></div>
                    {[1, 2, 3, 4, 5].map((index) => {
                        return (
                            <div key={index} className="friend flex justify-between items-center px-1 mt-5">
                                <div className="flex items-center gap-4"><img className='h-[4rem] w-[4rem] rounded-[100%] object-cover' src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    <p className='text-xl'>Parikshit Jaiswal</p></div>
                                <div className=""><PersonAddAlt1Icon style={{ color: '#bbacf2', fontSize: '3rem' }} /></div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    )
}

export default RightSidebar