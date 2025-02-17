import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    channelName:{
        type:String,
        required:true,
    },
    userNmae:{
        type:String,
        required:true,
        unique:true,
    },
    passWord:{
        type:String,
        required:true,
    },
    About:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        required:true,
    },
}, {timestamps:true})

const User = mongoose.model("User", userSchema);
export default User;