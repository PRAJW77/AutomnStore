import React, { useState } from 'react';
import './CSS/LoginSignup.css'

const LoginSignup = () => {

    const [state,setState] = useState("Login");
    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async () => {
        console.log("Login Function executed",formData);
        let responseData;
        await fetch('http://localhost:3000/login',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        })
        .then((response)=> response.json()).then((data)=>responseData=data)
        if(responseData.success){
            localStorage.setItem('token',responseData.token);
            window.location.replace("/");
        }else{
            alert(responseData.errors);
        }
    }

    const signup = async () => {
        console.log("SignUp Function executed",formData);
        let responseData;
        await fetch('http://localhost:3000/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        })
        .then((response)=> response.json()).then((data)=>responseData=data)
        if(responseData.success){
            localStorage.setItem('token',responseData.token);
            window.location.replace("/");
        }else{
            alert(responseData.errors);
        }
    }


    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" id="" required/> : <></>}
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' id=''required/>
                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' id=''required/>
                </div>
                <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
                {state==="Sign Up"?<p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
                :<p className='loginsignup-login'>Don't have account? <span onClick={()=>{setState("Sign Up")}}>Create one</span></p>}
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' required/>
                    <p>By registering you agree to the SignUp Terms</p>
                </div>
            </div>            
        </div>
    );
};

export default LoginSignup;
