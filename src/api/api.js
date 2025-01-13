import axios from "axios";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
const api = axios.create({
    baseURL : "http://localhost:8080"
})

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('jtoken');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },(error) =>{
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    response => response,
    error => {
        if(error.response?.status === 401){
            localStorage.clear();
            
        }
        navigate('/login');
        return Promise.reject(error);
    }
)

export default api;