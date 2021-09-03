import React from 'react'
import {useState} from 'react'
import {postService} from "./../service_login/Post"
import { useEffect } from 'react'
export default function Login() {
    const [name,setName] = useState('')
    const [pass,setPass] = useState('')
    const [data,setData] = useState([])
      useEffect(()=>{
        postService.getData().then((resp)=>{
            const data = resp.data;
           setData([data]);
           alert(data);
        }).catch(()=>{
            alert("Lấy về thông tin lỗi");
        });
      },[])
    return (
        <div>
          <form >
              <input type="text" placeholder="nickname" value={name} onChange={(e) =>{setName(e.target.value)}}/>
              <div>
              <input type="text" placeholder="password" value={pass} onChange={(e) =>{setPass(e.target.value)}}/>
              </div>
              <button>login</button>
          </form>
          {data.map((item,index) =>{
              return(<div key={index}>{item}</div>)
          })}
        </div>
    )
}
