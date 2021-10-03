import axios from "axios";
import { baseurl } from "../api/baseurl";

export const signup = async (email, password) => {
    const response = await axios.post(`${baseurl}/register`, {
        email,
        password,
    });
    return response.data;
};

export const signin = async (email, password) => {
    const response = await axios.post(`${baseurl}/login`, {
        email,
        password,
    });
    return response.data;
};

export const userhome = async () => {
    const authToken = localStorage.getItem("token");
    const response = await axios.get(`${baseurl}/home`, {
        headers: {
            "Content-type": "application/json",
            "auth-token": authToken,
        },
    });
    return response.data;
};

export const deleteUser = async () => {
    const authToken = localStorage.getItem("token");
    // console.log(authToken);
    const response = await axios.post(`${baseurl}/deleteAccount`, {
        headers: {
            "Content-type": "application/json",
            "auth-token": authToken,
        },
    });
    console.log(response);
    return response.data;
};
