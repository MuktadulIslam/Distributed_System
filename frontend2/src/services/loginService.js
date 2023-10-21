import axiosInstance from "../config/axiosInstance.js";


export const loginService = async (email, password, navigate) => {
    try {
        const formData = { email: email, password: password }
        axiosInstance.post(`/user/login`, formData).then((response) => {
            console.log(response.data)
            if (response.status == 200) {
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('userData', JSON.stringify(response.data));
                navigate(`/${response.data.username.replace(/\s/g, '').toLowerCase()}`)
            }
            else {
                console.log("Unknow error");
            }
        }).catch((error) => {
            console.log(error.response.data)
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