import React from 'react'
import PostCard from '@/components/PostCard';
import { useSelector } from 'react-redux';

const Posts = () => {
    // const posts = [
    //     {
    //         username: "Alanna Myassa",
    //         imageUrl: "https://plus.unsplash.com/premium_photo-1700124162812-1d5d29087b81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN1bmZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D",
    //         caption: "The Earth has music for those who listen. 🌼✨ #NaturePhotography #GoldenHour #WildflowerMeadow",
    //         likes: 1200,
    //         comments: 173,
    //         shares: 229
    //     },
    //     {
    //         username: "Alanna Myassa",
    //         imageUrl: "https://images.unsplash.com/photo-1664804918128-6e667981b1d3?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         caption: "The Earth has music for those who listen. 🌼✨ #NaturePhotography #GoldenHour #WildflowerMeadow",
    //         likes: 1200,
    //         comments: 173,
    //         shares: 229
    //     },
    //     {
    //         username: "Alanna Myassa",
    //         imageUrl: "https://images.unsplash.com/photo-1461696114087-397271a7aedc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         caption: "The Earth has music for those who listen. 🌼✨ #NaturePhotography #GoldenHour #WildflowerMeadow",
    //         likes: 1200,
    //         comments: 173,
    //         shares: 229
    //     },
    //     {
    //         username: "Alanna Myassa",
    //         imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdW50YWlufGVufDB8fDB8fHww",
    //         caption: "The Earth has music for those who listen. 🌼✨ #NaturePhotography #GoldenHour #WildflowerMeadow",
    //         likes: 1200,
    //         comments: 173,
    //         shares: 229
    //     },
    //     {
    //         username: "Alanna Myassa",
    //         imageUrl: "https://media.istockphoto.com/id/2154717594/photo/group-of-kazakh-eagle-hunters-riding-horses-in-bayan-olgii-west-mongolia.webp?a=1&b=1&s=612x612&w=0&k=20&c=RghJyER6YpFXL3EWbYgFXIozS6HxSLDUSRfZKyYgLD8=",
    //         caption: "The Earth has music for those who listen. 🌼✨ #NaturePhotography #GoldenHour #WildflowerMeadow",
    //         likes: 1200,
    //         comments: 173,
    //         shares: 229
    //     }
    // ];
    const { posts } = useSelector(store => store.post);
    return (
        <div className="min-h-screen bg-[#111111]">
            <div className="pt-28">
                <main className="ml-40 p-5">
                    <div className="w-4/5 mx-auto space-y-4">
                        {posts.map((post, index) => (
                            <PostCard key={index} post={post} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Posts