import axiosInstance from "../config/axiosInstance.js";

export const profileService = async (username, navigate) => {
    try {
        axiosInstance.get(`/user/profile/${username}`).then((response) => {
            console.log(response.data)
            if (response.status == 200) {
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('userData', JSON.stringify(response.data));
                navigate(`/${response.data.username.replace(/\s/g, '').toLowerCase()}`)
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