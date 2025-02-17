import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./login.css"
const Login = ({setloginmodel}) => {
    const[loginfieldhandle, setloginfieldhandle] = useState({"username":"", "password":""})
    console.log(loginfieldhandle);
    function handleonchangeinput(event , name){
        setloginfieldhandle({
            ...loginfieldhandle,[name]:event.target.value
        })
    }
    return (
        <div className='Login'>
            <div className="login-card">
                <div className="title-cardlogin">
                    <YouTubeIcon sx={{ fontSize: "50px", color: "red" }} />
                    Login
                </div>
                <div className="user-fillbox">
                    <div className="usernamelogin">
                        <input type="text" placeholder='username' value={loginfieldhandle.username} onChange={(e)=>handleonchangeinput(e , "username")} className='inputuser' />
                    </div>
                    <div className="usernamelogin">
                        <input type="password" placeholder='password' value={loginfieldhandle.password}  onChange={(e)=>handleonchangeinput(e , "password")}  className='inputuser' />
                    </div>
                </div>
                <div className="buttons-sets-user">
                    <button className="login">Log In</button> 
                    <Link to={"/signup"} className="login" onClick={()=>setloginmodel()}>Sign Up</Link>
                    <button className="login" onClick={()=>setloginmodel()}>Cancle</button>
                </div>
            </div>
        </div>
    )
}

export default Login