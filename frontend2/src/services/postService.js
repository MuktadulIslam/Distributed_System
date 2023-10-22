import rootPath from "../config/axiosConfi.js";
import axiosInstance from "../config/axiosInstance.js";
import axios from "axios";


// export const makePostByService = async (postDate) => {
//     try {
//         const response = await axiosInstance.get('/post');
//         const allPost = [];
//         if (response.status == 200) {
//             response.data.forEach(post => {
//                 if (post.authorEmail !== email) {
//                     allPost.push(post);
//                 }
//             });
//         }
//         else {
//             console.log("Unknow error");
//         }
//         return allPost;
//     } catch (err) {
//         console.log("err=", err);
//         return []
//     }
// }


export const getAllPostByService = async (email) => {
    try {
        const response = await axiosInstance.get('/post');
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

export const getPostByService = async (postID) => {
    try {
        const response = await axiosInstance.get(`/post/${postID}`);
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