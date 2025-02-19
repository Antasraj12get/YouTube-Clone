
import express from "express";
import { LogOut, Signup } from "../Controller/user.controller.js";  
import { Signin } from "../Controller/user.controller.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/signin", Signin);
router.post("/logout", LogOut);


export default router;
