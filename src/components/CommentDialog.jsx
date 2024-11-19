import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { MoreHorizontal } from 'lucide-react'
import { Button } from './ui/button'


const CommentDialog = ({ open, setOpen }) => {
    const [text, setText] = useState("");
    // const { selectedPost, posts } = useSelector(store => store.post);
    const [comment, setComment] = useState([]);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if (selectedPost) {
    //         setComment(selectedPost.comments);
    //     }
    // }, [selectedPost]);

    const changeEventHandler = (e) => {
        const inputText = e.target.value;
        if (inputText.trim()) {
            setText(inputText);
        } else {
            setText("");
        }
    }

    // const sendMessageHandler = async () => {

    //     try {
    //         const res = await axios.post(`https://instaclone-g9h5.onrender.com/api/v1/post/${selectedPost?._id}/comment`, { text }, {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             withCredentials: true
    //         });

    //         if (res.data.success) {
    //             const updatedCommentData = [...comment, res.data.comment];
    //             setComment(updatedCommentData);

    //             const updatedPostData = posts.map(p =>
    //                 p._id === selectedPost._id ? { ...p, comments: updatedCommentData } : p
    //             );
    //             dispatch(setPosts(updatedPostData));
    //             toast.success(res.data.message);
    //             setText("");
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <Dialog open={open}>
            <DialogContent onInteractOutside={() => setOpen(false)} className="max-w-5xl p-0 flex flex-col">
                <div className='flex flex-1'>
                    <div className='w-1/2'>
                        <img
                            src='data:image/png;base64,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'
                            alt="post_img"
                            className='w-full h-full object-cover rounded-l-lg'
                        />
                    </div>
                    <div className='w-1/2 flex flex-col justify-between'>
                        <div className='flex items-center justify-between p-4'>
                            <div className='flex gap-3 items-center'>
                                {/* <Link>
                                    <Avatar>
                                        <AvatarImage src={selectedPost?.author?.profilePicture} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </Link> */}
                                <div>
                                    {/* <Link className='font-semibold text-xs'>{selectedPost?.author?.username}</Link> */}
                                    {/* <span className='text-gray-600 text-sm'>Bio here...</span> */}
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
                        <hr />
                        <div className='flex-1 overflow-y-auto max-h-96 p-4'>
                            {
                                comment.map((comment) => <Comment key={comment._id} comment={comment} />)
                            }
                        </div>
                        <div className='p-4'>
                            <div className='flex items-center gap-2'>
                                <input type="text" value={text} onChange={changeEventHandler} placeholder='Add a comment...' className='w-full outline-none border text-sm border-gray-300 p-2 rounded' />
                                <Button disabled={!text.trim()} variant="outline">Send</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CommentDialog