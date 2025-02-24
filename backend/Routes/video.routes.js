import express from 'express'
const router = express.Router();
import {videoUpload} from '../Controller/video.controller.js'
import { auth } from '../Middleware/authentication.js';
import { GetAllVideo } from '../Controller/video.controller.js';
import { GetVideoById } from '../Controller/video.controller.js';
import { getAllVideoByUserId } from '../Controller/video.controller.js';


router.post('/video',auth, videoUpload)
router.get('/getvideo', GetAllVideo )
router.get('/getbyid/:id', GetVideoById)
router.get('/:userId/channel', getAllVideoByUserId)


export default router;