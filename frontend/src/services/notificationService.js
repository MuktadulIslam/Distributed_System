import axiosInstance from "../config/axiosInstance.js";


export const getAllNotificationByService = async (email, username) => {
    try {
        const response = await axiosInstance.get('/notification', {
            params: {username: username, email: email},
          });
        return response.data;
    } catch (err) {
        console.log("err=", err.response.status);
        return []
    }
}

export const deleteNitificationByService = async (username,email, postID) => {
    try {
        const response = await axiosInstance.delete('/notification', {
            params: {username: username},
            data: {postID: postID, email: email}
          });
        if (response.status == 200) {
            console.log(response.data)
            return true;
        }
        else {
            console.log("Unknow error");
            return false
        }
    } catch (err) {
        console.log("err=", err);
        return false
    }
}