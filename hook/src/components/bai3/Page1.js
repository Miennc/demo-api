import React from 'react'
import {useState} from 'react';
import { useHistory } from "react-router-dom";
export default function Page1() {
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [number,setNumber] = useState('');
    let history = useHistory();
 const next = ()=>{
    history.push(`/Page2?name=${name}&address=${address}&number=${number}`);
    // history.push(`/Page2/${name}&${address}&number=${number}`);
 }
    return (
        <div>
            <form onSubmit={next}>
                <h1>thông tin cơ bản</h1>
                <div> <input type="text" placeholder="họ tên" onChange={(e)=>{setName(e.target.value)}}/></div>
                <div> <input type="text" placeholder="địa chỉ" onChange={(e)=>{setAddress(e.target.value)}}/></div>
                <div> <input type="text" placeholder="số điện thoại"onChange={(e)=>{setNumber(e.target.value)}}/></div>
                <button>gửi</button>
            </form>
        </div>
    )
}
