import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState, useEffect} from 'react';
export default function List() {
    const [list,setList] = useState([]);
    let history = useHistory();
    useEffect(()=>{
        if(localStorage.getItem('LIST')){
            const listNote = JSON.parse(localStorage.getItem('LIST'))
            setList(listNote);
        }
    },[])
 function del(index){
    let data = JSON.parse(localStorage.getItem('LIST'));
        data.splice(index,1);
        localStorage.setItem('LIST', JSON.stringify(data));
        setList(data);
 }
    return (
        <div>
            <button onClick={()=>{history.push('/add')}}>add</button>
          <ul>
              {
                  list.map((item,index)=>{
                      return(<li key={index}>{item.title}
                      <button onClick={del.bind(this,index)}>xóa</button>
                      <button onClick={()=>{
                          history.push(`/update?title=${item.title}&content=${item.content}&index=${index}`)
                      }}>sửa</button>
                      </li>
                        ) 
                  })
              }
          </ul>
        </div>
    )
}
