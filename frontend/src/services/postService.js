import rootPath from "../config/axiosConfi.js";
import axiosInstance from "../config/axiosInstance.js";
import axios from "axios";


export const makePostByService = async (postData) => {
    try {
        const response = await axiosInstance.post('/post', postData,{
            params: {username: postData.get('authorName')}
        }).then((response) => {
            console.log(response.data)
            if (response.status == 200) {
                alert("Post Successfully uploded...");
            }
            else {
                console.log("Unknow error");
            }
        }).catch((error) => {
            console.log(error.response.data)
            if (error.response.status == 501) {
                alert('Error occur while creating a  post.....');
            }
            else {
                alert("Enternal server error...");
            }
        });
    } catch (err) {
        console.log("err=", err);
        return []
    }
}


export const getAllPostByService = async (email, username) => {
    try {
        const response = await axiosInstance.get('/post', {
            params: { username: username }
        });
        const allPost = [];
        if (response.status == 200) {
            response.data.forEach(post => {
                if (post.authorEmail !== email) {
                    allPost.push(post);
                }
            });
        }
        else {
            console.log("Unknow error");
        }
        return allPost;
    } catch (err) {
        console.log("err=", err);
        return []
    }
}

export const getPostByService = async (postID, username) => {
    try {
        const response = await axiosInstance.get(`/post/${postID}`, {
            params: { username: username }
        });
        if (response.status == 200) {
            return response.data
        }
        else {
            console.log("Unknow error");
            return null
        }
    } catch (err) {
        console.log("err=", err);
        return null
    }
}