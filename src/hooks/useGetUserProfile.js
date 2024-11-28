import { setUserProfile } from "@/redux/authSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


const useGetUserProfile = (id) => {
    const dispatch = useDispatch();
    // const [userProfile, setUserProfile] = useState(null);
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const res = await axios.get(`https://snapverse-6nqx.onrender.com/api/show/${id}`, { withCredentials: true });
                if (res.data) {
                    dispatch(setUserProfile(res.data));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserProfile();
    }, []);
};
export default useGetUserProfile;