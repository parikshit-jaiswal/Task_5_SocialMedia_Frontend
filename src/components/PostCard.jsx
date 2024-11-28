import React, { useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CommentDialog from './CommentDialog';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import axios from 'axios';
import { setPosts } from '@/redux/postSlice';
import '@/responsiveUI/HomePage.css'

export default function PostCard({ post }) {
  const { user } = useSelector(store => store.auth)
  const { posts } = useSelector(store => store.post);
  const [liked, setLiked] = useState(false);
  const [postLike, setPostLike] = useState(post.likesCount);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();


  const handleLike = () => {
    setLiked(!liked);
    setPostLike(prev => liked ? prev - 1 : prev + 1);
  };

  const likeOrDislikeHandler = async () => {
    try {
      handleLike();
      const res = await axios.post(`https://snapverse-6nqx.onrender.com/posts/${post?._id}/like`, { like: 'like' }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      console.log(res.data);
      if (res) {

        setLiked(!liked);
        // apne post ko update krunga
        const updatedPostData = posts.map(p =>
          p._id === post._id
            ? {
              ...p,
              likesCount: liked ? p.likesCount + 1 : p.likesCount - 1
            }
            : p
        );

        dispatch(setPosts(updatedPostData));
        toast.success('post Liked');
      }
    } catch (error) {
      console.log(error);
    }
  }


  const deletePostHandler = async () => {
    try {
      const res = await axios.delete(`https://snapverse-6nqx.onrender.com/posts/${post._id}`, { withCredentials: true })
      if (res) {
        const updatedPostData = posts.filter((postItem) => postItem?._id !== post._id);
        dispatch(setPosts(updatedPostData));
        toast.success("Post deleted");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  }


  return (
    <div className=" postCard bg-[#282828] rounded-xl border-2 border-[#bbacf2] text-gray-200  md:min-w-[30rem] sm:w-full h-fit z-0">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={post?.user?.profileImage?.url}
            alt={post?.user?.name}
            className="w-10 h-10 rounded-full object-cover border border-gray-600"
          />
          <span className="font-medium text-lg">{post?.user?.name}</span>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="text-gray-400 cursor-pointer hover:text-gray-200">
              <span className="text-lg">•••</span>
            </button>
          </DialogTrigger>
          <DialogContent className="flex flex-col items-center text-sm text-center">
            {
              < Button variant='ghost' className="cursor-pointer w-fit text-[#ED4956] font-bold">Unfollow</Button>

            }
            <Button variant='ghost' className="cursor-pointer w-fit">Add to favorites</Button>
            {user?._id == post?.user?._id ?
              <Button onClick={deletePostHandler} variant='ghost' className="cursor-pointer w-fit">Delete</Button> :
              <></>
            }
          </DialogContent>
        </Dialog>
      </div>

      {/* Caption */}
      <div className="px-4 pb-4">
        <p className="text-sm leading-relaxed">
          <span className="font-medium text-base block mb-1 text-wrap">{post?.caption}</span>
        </p>
      </div>

      {/* Image */}
      <div className="w-full px-0 pb-4 z-10">
        <img
          src={post?.image?.url}
          alt="Post content"
          className="w-full h-[55%] object-cover rounded-xl z-10"
        />
      </div>

      {/* Engagement stats */}
      <div className="p-4 z-50">
        <div className="flex items-center gap-6 text-gray-400">
          <button
            onClick={likeOrDislikeHandler}
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <Heart
              size={24}
              className={liked ? 'fill-white text-white' : ''}
            />
            <span className="text-sm">{postLike}</span>
          </button>

          <div onClick={() => setOpen(true)} className="flex items-center gap-2 hover:text-gray-200">
            <MessageCircle size={24} />
            <span className="text-sm">{post?.commentsCount}</span>
          </div>

          <CommentDialog open={open} post={post} setOpen={setOpen} />


          {/* Share popup */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex items-center gap-2 hover:text-gray-200">
                <Share2 size={24} />
                {/* share */}
                <span className="text-sm">{8}</span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>
                  Anyone who has this link will be able to view this.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input
                    id="link"
                    defaultValue="https://ui.shadcn.com/docs/installation"
                    readOnly
                  />
                </div>
                <Button type="submit" size="sm" className="px-3">
                  <span className="sr-only">Copy</span>
                  <Copy />
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div >
  );
}