import axiosInstance from "../config/axiosInstance.js";

// export const makePostByService = async (username, email, articleText, base64Image) => {
export const makePostByService = async (postData) => {
    try {
        // await makePostByService(user.username, user.email, articleText, base64Image);
        // console.log(postData)
        // const postData = {authorName: username, authorEmail: email, article: articleText, image: base64Image}
        // const postData = new FormData();
		// postData.append('article', articleText);
		// postData.append('authorEmail', email);
		// postData.append('authorName', username);
        // postData.append('image', null);
        const response = await axiosInstance.post('/post/post',postData,{
            params: {username: postData.get('authorName')}
        }).then((response) => {
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
    }
}



export const getAllPostByService = async (username) => {
    try {
        const response = await axiosInstance.get('/post/post', {
            params: { username: username }
        });
        if (response.status == 200) {
            return response.data;
        }
        else {
            console.log("Unknow error");
            return [];
        }
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