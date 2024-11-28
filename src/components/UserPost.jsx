import React from 'react'
import PostCard from '@/components/PostCard';

function UserPost({ posts, user }) {
    return (
        <div className="min-h-screen bg-[#111111] phone:mr-[5rem]  mr-3 phone:ml-[1rem] ml-3 z-0">
            <div className="phone:pt-[0.5rem] phone:pl-[7rem]  pt-4 pb-24 phone:pb-1">
                <main className="postsContainer  mid:w-fit sm:ml-40 ">
                    <div className="space-y-7 flex flex-col-reverse mid:ml-0 ml-[2%] phone:w-[84vw] min-w-[20rem] mid:w-full z-0">
                        {posts?.map((post, index) => (
                            <PostCard key={index} post={{ ...post, user: user }} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}


export default UserPost