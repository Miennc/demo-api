import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://localhost/reactjs_chat_api/api/users/',
    headers:{'Content-Type': 'application/json'}
})

export function get(url){
    return axiosInstance.get(url);
}
export const Axios ={
    get,
    axiosInstance
}

