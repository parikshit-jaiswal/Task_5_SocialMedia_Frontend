import React, { useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

export default function PostCard({ username, imageUrl, caption, likes, comments, shares }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  //profile picture URL from username using UI Avatars
  const profilePicUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=random&color=fff&size=128`;

  return (
    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden text-gray-200 max-w-2xl w-full">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={profilePicUrl}
            alt={username}
            className="w-10 h-10 rounded-full object-cover border border-gray-600"
          />
          <span className="font-medium text-lg">{username}</span>
        </div>
        <button className="text-gray-400 hover:text-gray-200">
          <span className="text-lg">•••</span>
        </button>
      </div>

      {/* Caption */}
      <div className="px-4 pb-4">
        <p className="text-sm leading-relaxed">
          <span className="font-medium text-base block mb-1">{username}</span>
          {caption}
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full px-0 pb-4">
        <img 
          src={imageUrl} 
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
          
          <button className="flex items-center gap-2 hover:text-gray-200">
            <MessageCircle size={24} />
            <span className="text-sm">{comments}</span>
          </button>
          
          <button className="flex items-center gap-2 hover:text-gray-200">
            <Share2 size={24} />
            <span className="text-sm">{shares}</span>
          </button>
        </div>
      </div>
    </div>
  );
}