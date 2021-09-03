import React from 'react'
import { useLocation } from 'react-router'
import {useState} from 'react'
import { useHistory } from 'react-router-dom';
export default function Update() {
    const location = useLocation();
    const url = new URLSearchParams(location.search);
   const [title,setTitle] = useState(url.get('title'))
   const [content,setContent] = useState(url.get('content'))
   const [index,setIndex] = useState(url.get('index'))
    const update = (e)=>{
        e.preventDefault();
         let list = [];
         if(localStorage.getItem('LIST')){
            list = JSON.parse(localStorage.getItem('LIST'));
        }
        list.splice(index,1,{
          title,content
        })
        localStorage.setItem('LIST',JSON.stringify(list));
        setTitle('');
        setContent('');
        history.push('/')
    }
    let history = useHistory();
    return (
        <div>
            <form onSubmit={update}>
                <input type="text" value={title} placeholder="title" onChange={(e)=>{setTitle(e.target.value)}}/>
                <input type="text"  value={content} placeholder="content" onChange={(e)=>{setContent(e.target.value)}}/>
                <button>update</button>
            </form>
        </div>
    )
}
