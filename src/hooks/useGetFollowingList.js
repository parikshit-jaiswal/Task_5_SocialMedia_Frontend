import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setFollowing } from '@/redux/authSlice';

const useGetFollowingList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchFollowingList = async () => {
            try {
                const res = await axios.get(`https://snapverse-6nqx.onrender.com/api/following/lists`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });

                if (res && res.data) {
                    dispatch(setFollowing(res.data.following));
                }
            } catch (error) {
                if (error.response) {
                    setError(error.response.data);
                    console.error("Error fetching following list:", error.response.data);
                } else {
                    setError(error.message);
                    console.error("Error:", error.message);
                }
            }
        };

        fetchFollowingList();
    }, [dispatch]);
};

export default useGetFollowingList;
