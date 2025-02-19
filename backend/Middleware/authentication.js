import jwt from "jsonwebtoken"
import User from "../Model/user.model"

const auth  =  async (req , res , next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({error:"No token, authorization denied"});
    }else{
        try {
            const deCode = jwt.verify(token, "secretKey")
            req.user = await User.findById(deCode.userId).select('-password')
            next();
            
        } catch (error) {
            res.status(401).json({error:"token is not valid"});
        }
    }
}