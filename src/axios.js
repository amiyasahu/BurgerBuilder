import axios from 'axios';

const defaultAxios = axios.create({
    baseURL: 'http://localhost:3005',
});

// Add a request interceptor
defaultAxios.interceptors.request.use((config) => {
    console.log(config);
    return config;
}, (error) => {
    console.log(error);
    return Promise.reject(error);
});

// Add a response interceptor
defaultAxios.interceptors.response.use((response) => {
    console.log(response);
    return response;
}, (error) => {
    console.log(error);
    return Promise.reject(error);
});

export { defaultAxios };