
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

API.interceptors.request.use((config) => ({
...config,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,

    },  
}))
 
API.interceptors.response.use((response) => response, (error) => {
    if (error.response.status === 401) {
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
    }
    return Promise.reject(error);
});

export default API;
