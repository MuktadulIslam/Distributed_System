import axiosInstance from "../config/axiosInstance.js";

export const loginService = async (email, password, navigate, setUser) => {
    try {
        const formData = { email: email, password: password }
        axiosInstance.post(`/user/login`, formData).then((response) => {
            if (response.status == 200) {
                setUser(response.data)
                navigate(`/${response.data.username.replace(/\s/g, '').toLowerCase()}`)
            }
            else {
                console.log("Unknow error");
            }
        }).catch((error) => {
            if (error.response.status == 401) {
                alert("Password or Email don't match...");
            }
            else if (error.response.status == 400) {
                alert("The request cannot be fulfilled due to bad syntax...");
            }
            else {
                alert("Enternal server error...");
            }
        });
    } catch (err) {
        console.log("err=", err)
    }
};

export const registrationService = async (email, password, username, navigator, setUser) => {
    try {
        const formData = { email: email, password: password, username: username }
        axiosInstance.post(`/user/register`, formData).then((response) => {
            if (response.status == 200) {
                setUser(response.data)
                navigator(`/${response.data.username.replace(/\s/g, '').toLowerCase()}`)
            }
            else {
                console.log("Unknow error");
            }
        }).catch((error) => {
            console.log(error.response.data)
            if (error.response.status == 409) {
                alert("Duplicate Email or Password...");
            }
            else if (error.response.status == 400) {
                alert("The request cannot be fulfilled due to bad syntax...");
            }
            else {
                alert("Enternal server error...");
            }
        });
    } catch (err) {
        console.log("err=", err)
    }
}