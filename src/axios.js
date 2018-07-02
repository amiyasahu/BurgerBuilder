import axios from 'axios';

const defaultAxios = axios.create({
    baseURL: 'http://localhost:3004',
});

// Add a request interceptor
defaultAxios.interceptors.request.use(function (config) {
    console.log(config);
    return config;
}, function (error) {
    console.log(error);
    return Promise.reject(error);
});

// Add a response interceptor
defaultAxios.interceptors.response.use(function (response) {
    console.log(response);
    return response;
}, function (error) {
    console.log(error);
    return Promise.reject(error);
});

export { defaultAxios };