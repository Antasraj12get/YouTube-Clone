import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';

import "./signup.css"
import { Link } from 'react-router-dom';
import axios from "axios"
import { useState } from 'react';

const Signup = () => {
    const[signupfield, setsignupfield] = useState({"channelname":"","username":"","password":"","aboutchannel":"","filetype":""})
    console.log(signupfield)
    function handlesignupfunc(event, name){
        setsignupfield({
            ...signupfield,[name]:event.target.value
        })
    }
    const uploadimg = async(e)=>{
        let files = e.target.files;
        let data = new FormData();
        data.append("file", files[0])
        data.append("upload_preset", "YouTube Clone")
        try {
            const response = await axios.post("http://api.cloudinary.com/v1_1/dtpohcwel/image/upload", data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='signup'>
    <div className="signup-card">
        <div className="title-cardsignup">
            <YouTubeIcon sx={{ fontSize: "50px", color: "red" }} />
            Sign Up
        </div>
        <div className="user-fillbox-signup">
            <div className="usernamesignup">
                <input type="text" placeholder='Channel Name' value={signupfield.channelname} onChange={(e)=> handlesignupfunc(e,"channelname")}  className='inputuser' />
            </div>
            <div className="usernamesignup">
                <input type="text" placeholder='User name' value={signupfield.username} onChange={(e)=> handlesignupfunc(e,"username")}  className='inputuser' />
            </div>
            <div className="usernamesignup">
                <input type="password" placeholder='password' value={signupfield.password} onChange={(e)=> handlesignupfunc(e,"password")}  className='inputuser' />
            </div>
            <div className="usernamesignup">
                <input type="textarea" placeholder='About Channel' value={signupfield.aboutchannel} onChange={(e)=> handlesignupfunc(e,"aboutchannel")}  className='inputuser' />
            </div>
            <div className="filetype">
                <input type="file" onChange = {(e)=>uploadimg(e)} placeholder='About Channel' className='file-type-file' />
            </div>
        </div>
        <div className="buttons-sets-user">
            <button className="signup-btn">Sign Up</button>
            <Link to={"/"} className="signup-btn">Home Page</Link> 
        </div>
    </div>
</div>  )
}

export default Signup;