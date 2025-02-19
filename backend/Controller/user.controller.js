// import bcrypt from "bcryptjs";
import User from "../Model/user.model.js";
import bcryptjs from "bcryptjs";

export const Signup = async (req, res) => {
    try {
        const { channelName, userName, email, passWord, About, profilePic } = req.body;

        const isExist = await User.findOne({ userName });
        if (isExist) {
            return res.status(400).json({ error: "Username already exists, please try another." });
        }

        const hashedPassword = await bcryptjs.hash(passWord, 10);

        const user = new User({
            channelName,
            userName,
            email,
            passWord: hashedPassword,
            About,
            profilePic
        });

        await user.save();

        return res.status(201).json({
            message: "User registered successfully",
            success: true,
            data: user
        });

    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


export const Signin = async (req , res)=> {
    try {
        const{userName,passWord} = req.body;
        const user = await User.findOne({userName});
        if(user && await bcryptjs.compare(passWord, user.passWord)){
            res.json({message: 'Logged in successfullay', success:"true"})
        }else{
            res.status(400).json({error:'Invalid Credentials'});
        }
    } catch (error) {
        res.status(500).json({error:"server error"})
    }
}

