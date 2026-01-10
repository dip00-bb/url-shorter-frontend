import axios from "axios";

export const axiosInstence = axios.create({
    baseURL: 'https://url-shortner-backend-mocha.vercel.app/',
    withCredentials: true
});