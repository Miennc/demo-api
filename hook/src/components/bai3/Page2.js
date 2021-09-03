import React from 'react'
import {useState, useEffect} from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';
export default function Page2() {
    let location = useLocation();
    let query = new URLSearchParams(location.search);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [repeat,setRepeat] = useState('');
    const [name,setName] = useState(query.get('name'));
    const [address,setAddress] = useState(query.get('address'));
    const [number,setNumber] = useState(query.get('number'));
    let history = useHistory();
  
    const next = (e)=>{
    e.preventDefault();
   history.push(`/Page3?email=${email}&address=${address}&name=${name}&number=${number}`);
 }
    return (
        <div>
            <form onSubmit={next}>
                <h1>thông tin cơ bản</h1>
                <div> <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/></div>
                <div> <input type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/></div>
                <div> <input type="text" placeholder="repeat"onChange={(e)=>{setRepeat(e.target.value)}}/></div>
                <button>gửi</button>
            </form>
        </div>
    )
}
