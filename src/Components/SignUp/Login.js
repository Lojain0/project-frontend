import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./s.css"

export default function SignUp({setToken}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    const changeEmail = (e) => {
      setEmail(e.target.value);
    };
    const changePassword = (e) => {
      setPassword(e.target.value);
    };
  
    const checkLogin = async () => {
      try {
        const response = await axios.post("https://tuwaiq-catsproject.herokuapp.com/login", {
          email: email,
          password: password,
        });
        console.log(response.data)
        setToken(response.data.token)
        history.push("/Cats");
      } catch (error) {
        console.log(error.response.data);
      }
    };
  return (
    <div>  



<div class="container">
        <form id="form" class="form">
            <h2>تسجيل الدخول  </h2>
        
            <div class="form-control">
                <label for="eamil">بريد إلكتروني</label>
                <input onChange={(e) => { changeEmail(e); }}    type="email" id="email" placeholder="Enter eamil" />
            </div>
            <div class="form-control">
                <label for="passowrd">كلمة المرور</label>
                <input onChange={(e) => {    changePassword(e);  }}type="password" id="password" placeholder="Enter passowrd" />
            </div>
          
            <button onClick={(e) => {  checkLogin();  }}type="submit">دخول</button>
        </form>
    </div>



    </div>
    
  );
}


