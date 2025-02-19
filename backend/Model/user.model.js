import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    channelName: {
        type: String,
        required: true,
    },
    userName: {  
        type: String,
        required: true,
        unique: true,
    },
    email: {  
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    passWord: {
        type: String,
        required: true,
    },
    About: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
