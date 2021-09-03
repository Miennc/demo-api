import React from 'react'
import { useParams , useLocation} from 'react-router';
import {useState} from 'react'
export default function Page3() {
    let location = useLocation();
    let query = new URLSearchParams(location.search);
    const [email,setEmail] = useState(query.get('email'));
    const [address,setAddress] = useState(query.get('address'));
    const [name,setName] = useState(query.get('name'));
    const [number,setNumber] = useState(query.get('number'));
    return (
        <div>
            <h1>xác nhân thông tin</h1>
            <div>email:{email}</div>
            <div>address:{address}</div>
            <div>name: {name}</div>
            <div>number:{number}</div>
        </div>
    )
}
