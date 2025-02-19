
import express from "express";
import { Signup } from "../Controller/user.controller.js"; // Named import for Signup
import { Signin } from "../Controller/user.controller.js";

const router = express.Router();

router.post("/signup", Signup);
// router.post("/signin", Signin);
router.post("/signin", Signin);


export default router;
