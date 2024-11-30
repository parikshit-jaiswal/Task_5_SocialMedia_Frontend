import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { Loader2, MoreHorizontal } from 'lucide-react'
import { Button } from './ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Link } from 'react-router-dom'
import Comment from './Comments'
import axios from 'axios'
import { setPosts, setSelectedPost } from '@/redux/postSlice'
import { toast } from 'sonner'
import { setComments } from '@/redux/commentSlice'


const CommentDialog = ({ open, setOpen, loading }) => {
    const [text, setText] = useState("");
    const { selectedPost, posts } = useSelector(store => store.post);
    const { user } = useSelector(store => store.auth);
    const { comments } = useSelector(store => store.comment)
    const [sending, setSending] = useState(false)
    const dispatch = useDispatch();


    const changeEventHandler = (e) => {
        const inputText = e.target.value;
        if (inputText.trim()) {
            setText(inputText);
        } else {
            setText("");
        }
    }



    const sendMessageHandler = async () => {
        try {
            setSending(true)
            const res = await axios.post(`https://snapverse-6nqx.onrender.com/posts/${selectedPost?._id}/comments`, { text }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (res.data) {
                const updatedCommentData = [{ text, user }, ...comments];
                dispatch(setComments(updatedCommentData));
                toast.success("Comment Added");
                setText("");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSending(false)
        }
    }

    const deleteComment = async () => {
        try {
            const res = await axios.get(`https://snapverse-6nqx.onrender.com/posts/${id}/comments`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });

            if (res.data) {
                dispatch(setComments(res.data.comments))
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Dialog open={open} >
            <DialogContent onInteractOutside={() => setOpen(false)} className="max-w-5xl p-0 flex flex-col">
                <div className='flex flex-1'>
                    <div className='w-1/2'>
                        <img
                            src={selectedPost?.image?.url}
                            alt="post_img"
                            className='w-full h-[80vh] object-cover rounded-l-lg'
                        />
                    </div>
                    <div className='w-1/2 flex flex-col justify-between'>
                        <div className='flex items-center justify-between px-4 mt-3 mb-[-0.8rem]'>
                            <div className='flex gap-3 items-center ml-5'>
                                <Link>
                                    <Avatar>
                                        <AvatarImage src={selectedPost?.user?.profileImage.url} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </Link>
                                <div>
                                    <Link className=' text-lg'>{selectedPost?.user?.name}</Link>
                                </div>
                            </div>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <MoreHorizontal className='cursor-pointer' />
                                </DialogTrigger>
                                <DialogContent className="flex flex-col items-center text-sm text-center">
                                    <div className='cursor-pointer w-full text-[#ED4956] font-bold'>
                                        Unfollow
                                    </div>
                                    <div className='cursor-pointer w-full'>
                                        Add to favorites
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div className=" ml-10 mb-[-1rem] text-xl mt-5">"{selectedPost?.caption}"</div>

                        <div className='flex-col-reverse flex-1 overflow-y-scroll max-h-[27.5rem] ml-5 mt-5 p-4'>
                            {loading ? <div className="">Loading..</div> :
                                (
                                    comments.map((comment) => <Comment key={comment?._id} comment={comment} />)
                                )}
                        </div>
                        <div className='p-4'>
                            <div className='flex items-center gap-2'>
                                <input type="text" value={text} onChange={changeEventHandler} placeholder='Add a comment...' className='w-full h-9 outline-none border bg-transparent border-[#bbacf2] p-2 text-[#bbacf2] rounded' />
                                {!sending ?
                                    <Button disabled={!text.trim()} variant="purple" onClick={sendMessageHandler} >Add</Button>
                                    :
                                    <Button disabled variant="outline">Adding <Loader2 className='animate-spin' /></Button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CommentDialog