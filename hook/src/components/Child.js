import { useEffect, useState } from "react";
import { useReducer } from "react";
export const Child = ()=>{
//     const [counter,setCounter] = useState(0);
//     useEffect(()=>{
//         setCounter(counter+1);
//    },[])
const [counter,dispatch] = useReducer((state,action)=>{   // counter đai diện cho state
  if (action.type==="tang") {
      return state = state+1;  // action là hành động
  }
  if(action.type==="giam"){
      return state = state-1;
  }
},0)
    return (
       <div>
           <button onClick={()=>{dispatch({type: "tang"})}}>+</button>
           {counter}
           <button onClick={()=>{dispatch({type: "giam"})}}>-</button>
       </div>
    )
}
