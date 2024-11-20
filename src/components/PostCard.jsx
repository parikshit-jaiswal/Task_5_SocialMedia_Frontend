import React, { useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CommentDialog from './CommentDialog';


export default function PostCard({ user, image, caption, likes, comments }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes.length);
  const [open, setOpen] = useState(false);
  console.log({ user, image, caption, likes, comments })

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };


  return (
    <div className="bg-[#282828] rounded-xl overflow-hidden border-2 border-[#bbacf2] text-gray-200 w-full">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={image}
            alt={user}
            className="w-10 h-10 rounded-full object-cover border border-gray-600"
          />
          <span className="font-medium text-lg">{user.name}</span>
        </div>
        <button className="text-gray-400 hover:text-gray-200">
          <span className="text-lg">•••</span>
        </button>
      </div>

      {/* Caption */}
      <div className="px-4 pb-4">
        <p className="text-sm leading-relaxed">
          <span className="font-medium text-base block mb-1">{user.name}</span>
          {caption}
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full px-0 pb-4">
        <img
          src={image.url}
          alt="Post content"
          className="w-full object-cover rounded-xl"
        />
      </div>

      {/* Engagement stats */}
      <div className="p-4">
        <div className="flex items-center gap-6 text-gray-400">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <Heart
              size={24}
              className={isLiked ? 'fill-white text-white' : ''}
            />
            <span className="text-sm">{likesCount}</span>
          </button>

          <div onClick={() => setOpen(true)} className="flex items-center gap-2 hover:text-gray-200">
            <MessageCircle size={24} />
            <span className="text-sm">{comments.length}</span>
          </div>
          <CommentDialog open={open} setOpen={setOpen} />


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
    </div>
  );
}