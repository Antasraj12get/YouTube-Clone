
import express from "express";
import { Signup } from "../Controller/user.js"; // Use named import

const router = express.Router();

router.post("/signup", Signup);

export default router;

