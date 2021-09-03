import {Axios} from './Axios';
const url = "signup.php";

export function getData(){
    return Axios.get(url);
}

export function add(payload){
    return Axios.post(url,payload);
}

export const postService = {
    getData,
    add,
}