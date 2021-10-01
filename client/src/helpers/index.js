import axios from "axios";
import { baseurl } from "../api/baseurl";

export const signup = async (email, password) => {
    try {
        const response = await axios.post(`${baseurl}/register`, {
            email,
            password,
        });
        return response.status === 200;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export const signin = async (email, password) => {
    try {
        const response = await axios.post(`${baseurl}/login`, {
            email,
            password,
        });
        if (response.status === 200) {
            const { data } = response;
            sessionStorage.setItem("token", data);
            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const userhome = async () => {
    try {
        const response = await axios.get(`${baseurl}/home`, {
            headers: {
                'Content-type': 'application/json',
                "auth-token": sessionStorage.getItem("token"),
            },
        });
        const { status, data } = response;
        if (status === 200) {
            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const signout = () => {
    axios
        .post(`${baseurl}/logout`)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    // sessionStorage.removeItem('token');
};

export const deleteUser = () => {
    axios
        .post(`${baseurl}/deleteAccount`)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
};
