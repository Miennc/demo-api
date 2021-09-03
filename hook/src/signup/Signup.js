import React from "react";
import { useState, useEffect } from "react";
import {postService} from "./../service/Post"
import { useHistory } from "react-router-dom";
export default function Signup() {
  let history = useHistory();
  const [nickname, setNickname] = useState("");
  const [pwd, setPwd] = useState("");
  function submit(e) {
    e.preventDefault();
    postService
      .add({
        nickname,pwd
      })
      .then(() => {
        setNickname("");
        setPwd("");
      })
      .catch(() => {
        alert("Thêm thất bại");
      });
      history.push('/login')
  }
  return (
    <div>
      <form onSubmit={submit.bind(this)}>
        <div>
          <input
            value={nickname}
            type="text"
            placeholder="nickname"
            onChange={(e) => {
            setNickname(e.target.value)}}/>
        </div>
        <div>
          <input
            value={pwd}
            type="text"
            placeholder="password"
            onChange={(e) => {
            setPwd(e.target.value) }}/>
        </div>
        <button>signup</button>
      </form>
    </div>
  );
}
