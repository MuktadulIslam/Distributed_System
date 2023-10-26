import axiosInstance from "../config/axiosInstance.js";

export const profileService = async (username, setUser, navigate) => {
    try {
        axiosInstance.get(`/user/profile/${username}`).then(async (response) => {
            if (response.status == 200) {
                await setUser(response.data)
                navigate(`/${response.data.username.replace(/\s/g, '').toLowerCase()}`)
                return;
            }
            else {
                console.log("Unknow error");
                navigate(`/login`);
            }
        }).catch((error) => {
            navigate(`/login`);
        });
    } catch (err) {
        console.log("err=", err)
    }
};