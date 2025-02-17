import mongoose from "mongoose";
mongoose
.connect("mongodb://localhost:27017/YouTubeBakend")
.then(()=>{console.log("database connect succesfull")})
.catch((err)=> console.log("error happend"))