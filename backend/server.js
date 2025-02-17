import express from "express"
var port = 2222;
var app = express();

app.use(express.json())

import "./Connection/connection.js"
import AuthRoutes from "./Routes/user.js"; 

app.use('/auth', AuthRoutes);


















app.listen(port, ()=>{
    console.log("port is running on 2222 number")
})