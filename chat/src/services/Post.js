import {Axios} from './Axios';
const url = "signup.php";

export function getData(id=null) {
   if (id!=null) {
    return Axios.get(`${url}?id=${id}`);
   }else {
    return Axios.get(url);
   }
}

export function add(payload){
    return Axios.post(url,payload);
}

export const postService = {
    getData,
    add,
}