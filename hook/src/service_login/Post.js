import {Axios} from './Axios';
const url = "login.php";

export function getData(){
    return Axios.get(url);
}

export const postService = {
    getData
}