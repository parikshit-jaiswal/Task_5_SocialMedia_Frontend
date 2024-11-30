import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser } from "@/redux/authSlice";
import useGetUserProfile from "@/hooks/useGetUserProfile";

export function ProfileSettings({ open, setOpen }) {
    const { user } = useSelector(store => store.auth);
    const profileImgRef = useRef();
    const coverImgRef = useRef();
    const dispatch = useDispatch()
    const [imagePreview, setImagePreview] = useState({
        profile: '',
        cover: ''
    });
    const [file, setFile] = useState({ profile: null, cover: null });
    const [loading, setLoading] = useState(false);

    const readFileAsDataURL = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    const fileChangeHandler = async (e, type) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            if (!selectedFile.type.startsWith("image/")) {
                alert("Please select a valid image file.");
                return;
            }
            if (selectedFile.size > 5 * 1024 * 1024) {
                alert("File size exceeds 5MB.");
                return;
            }

            setFile((prev) => ({ ...prev, [type]: selectedFile }));
            const dataUrl = await readFileAsDataURL(selectedFile);
            setImagePreview((prev) => ({ ...prev, [type]: dataUrl }));
        }
    };

    const updateProfileHandler = () => {
        if (file.profile) {
            updateProfileImg()
            dispatch(setAuthUser({
                ...user,
                profileImage: {
                    ...user.profileImage,
                    url: imagePreview.profile
                }
            }));
        }
        if (file.cover) {
            updateCoverImg()
        }
        if (!(file.cover) && !(file.profile)) {
            toast.error("Nothing to Change");
            setOpen(false);
            setImagePreview({ profile: '', cover: '' });
        }
        else {
            setOpen(false);
            setImagePreview({ profile: '', cover: '' });
        }
    }

    // const updateProfileHandler = async () => {
    //     const formData = new FormData();
    //     formData.append('userName', user?.userName || '');
    //     if (file.profile) {
    //         formData.append('profileImage', file.profile);
    //     }
    //     if (file.cover) {
    //         formData.append('coverImage', file.cover);
    //     }

    //     try {
    //         setLoading(true);
    //         toast.info('Uploading, please wait...');

    //         const res = await axios.post('https://snapverse-6nqx.onrender.com/posts', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //             withCredentials: true,
    //         });

    //         if (res.status === 200 || res.status === 201) {
    //             dispatch(setPosts([res.data, ...posts]));
    //             toast.success('Post created successfully');
    //             setOpen(false);
    //             setCaption('');
    //             setImagePreview({ profile: '', cover: '' });
    //         } else {
    //             throw new Error(`Unexpected status code: ${res.status}`);
    //         }
    //     } catch (error) {
    //         console.error('Error creating post:', error);

    //         // Handle specific error messages if available
    //         if (error.response?.data?.message) {
    //             toast.error(error.response.data.message);
    //         } else {
    //             toast.error('An unexpected error occurred.');
    //         }
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const updateProfileImg = async () => {
        const formData = new FormData();
        if (file.profile) {
            formData.append('image', file.profile);
        }
        try {
            setLoading(true);
            const res = await axios.post('https://snapverse-6nqx.onrender.com/upload-profile-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });

            if (res.data) {
                toast.success('Profile photo updated successfully');
                setOpen(false);
                setImagePreview({ profile: '', cover: '' });
            } else {
                throw new Error(`Unexpected status code: ${res.status}`);
            }
        } catch (error) {
            console.error('Error creating post:', error);
            if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('An unexpected error occurred.');
            }
        } finally {
            setLoading(false);
        }
    };

    const updateCoverImg = async () => {
        const formData = new FormData();
        if (file.cover) {
            formData.append('cover_image', file.cover);
        }
        try {
            setLoading(true);
            const res = await axios.post('https://snapverse-6nqx.onrender.com/upload-cover-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });

            if (res.data) {
                toast.success('Cover photo updated successfully');
                setOpen(false);
                setImagePreview({ profile: '', cover: '' });
            } else {
                throw new Error(`Unexpected status code: ${res.status}`);
            }
        } catch (error) {
            console.error('Error creating post:', error);
            if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('An unexpected error occurred.');
            }
        } finally {
            setLoading(false);
        }
    };

    const cancelHandler = () => {
        setOpen(false);
        setImagePreview({ profile: '', cover: '' });
    }



    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>

                    <div className="mb-4">
                        <p className="mb-3 font-semibold">Profile Image</p>
                        <input
                            ref={profileImgRef}
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => fileChangeHandler(e, "profile")}
                        />
                        {imagePreview.profile && (
                            <img
                                src={imagePreview.profile}
                                alt="Profile Preview"
                                className="mb-3 h-24 w-24 object-cover rounded-full"
                            />
                        )}
                        <Button variant="purple" onClick={() => profileImgRef.current.click()}>
                            Select Image
                        </Button>
                    </div>

                    <div className="mb-4">
                        <p className="mb-3 font-semibold">Cover Image</p>
                        <input
                            ref={coverImgRef}
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => fileChangeHandler(e, "cover")}
                        />
                        {imagePreview.cover && (
                            <img
                                src={imagePreview.cover}
                                alt="Cover Preview"
                                className="mb-3 h-32 w-full object-cover rounded"
                            />
                        )}
                        <Button variant="purple" onClick={() => coverImgRef.current.click()}>
                            Select Image
                        </Button>

                        <div className="mt-5">
                            {imagePreview && (
                                loading ? (
                                    <div className="flex gap-1">
                                        <Button className="w-full">
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Please wait
                                        </Button>
                                        <Button
                                            onClick={cancelHandler}
                                            type="submit"
                                            className="w-full"
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="flex gap-1">
                                        <Button
                                            onClick={updateProfileHandler}
                                            type="submit"
                                            className="w-full bg-[#c3b5f5]"
                                        >
                                            Save Changes
                                        </Button>
                                        <Button
                                            onClick={cancelHandler}
                                            type="submit"
                                            className="w-full"
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
