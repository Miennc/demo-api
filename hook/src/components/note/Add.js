
import React from 'react'
import { useState} from 'react'
import { useHistory } from 'react-router-dom';
export default function Add() {
        const [title,setTitle] = useState(null);
        const [content,setContent] = useState(null);
        const add = (e)=>{
         e.preventDefault();
         let list = [];
         if(localStorage.getItem('LIST')){
            list = JSON.parse(localStorage.getItem('LIST'));
        }
        list.push({
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
            <form onSubmit={add}>
                <input type="text" value={title} placeholder="title" onChange={(e)=>{setTitle(e.target.value)}}/>
                <input type="text"  value={content} placeholder="content" onChange={(e)=>{setContent(e.target.value)}}/>
                <button>add</button>
            </form>
        </div>
    )
}
