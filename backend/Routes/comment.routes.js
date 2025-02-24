import express from "express"
const router = express.Router();
import {addComment} from '../Controller/comment.controller.js'
import {auth} from '../Middleware/authentication.js'
import { getCommentByVideoI } from "../Controller/comment.controller.js";

router.post('/comment', auth, addComment)
router.get('/comment/:videoId', getCommentByVideoI)

export default router;
