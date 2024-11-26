import React, { useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader } from './ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { readFileAsDataURL } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '@/redux/postSlice';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const CreatePost = ({ open, setOpen }) => {
  const inputRef = useRef();
  const imageRef = useRef();
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [crop, setCrop] = useState(null);
  const [completedCrop, setCompletedCrop] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const { posts } = useSelector((store) => store.post);
  const dispatch = useDispatch();

  const MIN_DIMENSION = 500;
  const ASPECT_RATIO = 1.2;

  // On image load, calculate an initial crop based on aspect ratio
  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const crop = makeAspectCrop(
      {
        unit: 'px',
        width: MIN_DIMENSION,
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  // Handle file input changes
  const fileChangeHandler = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const dataUrl = await readFileAsDataURL(file);
      setImagePreview(dataUrl);
    }
  };

  // Get the cropped image as a Blob
  const getCroppedImg = async (image, crop) => {
    if (!crop || !image) return null;

    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    canvas.width = crop.width;
    canvas.height = crop.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Canvas is empty'));
            return;
          }
          resolve(blob);
        },
        'image/jpeg',
        1
      );
    });
  };


  const createPostHandler = async () => {
    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('userName', user?.userName);

    if (completedCrop && imageRef.current) {
      const croppedImage = await getCroppedImg(imageRef.current, completedCrop);
      if (croppedImage) {
        formData.append('image', croppedImage, 'cropped-image.jpg');
      } else {
        console.error('Cropped image could not be created');
      }
    }

    try {
      setLoading(true);
      const res = await axios.post('https://snapverse-6nqx.onrender.com/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });

      if (res) {
        dispatch(setPosts([res.data, ...posts]));
        toast.success('Post Created successfully');
        setOpen(false);
        setImagePreview(" ")
        setCaption(" ")
      }
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error('Some error occurred');
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent onInteractOutside={() => setOpen(false)}>
        <DialogHeader className="text-center font-semibold">Create New Post</DialogHeader>
        <div className="flex gap-3 items-center">
          <Avatar>
            <AvatarImage src={user?.profileImage?.url} alt="img" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-semibold text-xs">{user?.userName}</h1>
            <span className="text-gray-600 text-xs">Bio here...</span>
          </div>
        </div>
        <Textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="focus-visible:ring-transparent border-none"
          placeholder="Write a caption..."
        />

        <div className="flex justify-center">
          <ReactCrop
            crop={crop}
            onChange={(pixelCrop) => setCrop(pixelCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            keepSelection
            aspect={ASPECT_RATIO}
            maxHeight={MIN_DIMENSION}
          >
            <div className="flex justify-center h-[50vh]">
              <img className='' src={imagePreview} onLoad={onImageLoad} ref={imageRef} />
            </div>
          </ReactCrop>
        </div>
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={fileChangeHandler}
        />
        <Button
          onClick={() => inputRef.current.click()}
          className="w-fit mx-auto bg-[#bbacf2] hover:bg-white"
        >
          Select from computer
        </Button>
        {imagePreview && (
          loading ? (
            <Button>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button
              onClick={createPostHandler}
              type="submit"
              className="w-full"
            >
              Post
            </Button>
          )
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CreatePost;
