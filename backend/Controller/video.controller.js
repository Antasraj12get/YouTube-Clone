// import video from '../Model/video.model.js'

// export const videoUpload = async (req, res)=>{
//     try {
//         const{title, description, videoLink,thumbnail,videoType} = req.body;
//         const Videoupload = new video({user:req.user._id, title , description, videoLink,thumbnail,videoType });
//         await Videoupload.save();
//         res.status(201).json({sucess: 'true', Videoupload})
//         console.log(req.user);
        
//     } catch (error) {
//          res.status(501).json({error: "internal server error"})
//     }
// }

// export const GetAllVideo = async (req, res)=>{
//     try {
//         const videos = await Video.find().populate('user','title, thumbnail, user, createdAt');
//         res.status(201).json({ sucess:"true", "videos": videos})
//     } catch (error) {
//         res.status(501).json({error: "internal server error"})
//     }
// }










// // {
// //     "sucess": "true",
// //     "videos": [
// //       {
// //         "_id": "67b9704603291daaa766e0c8",
// //         "user": "67b57c740a30f2a233a78d74",
// //         "title": "Books Biamo",
// //         "description": "ANtcient yarana",
// //         "videoLink": "demo provided",
// //         "thumbnail": "demo provided also",
// //         "like": 0,
// //         "dislike": 0,
// //         "createdAt": "2025-02-22T06:35:50.664Z",
// //         "updatedAt": "2025-02-22T06:35:50.664Z",
// //         "__v": 0
// //       },
// //       {
// //         "_id": "67b9710203291daaa766e0cb",
// //         "user": "67b57c740a30f2a233a78d74",
// //         "title": "Nurce coadiater",
// //         "description": "Patient deployer",
// //         "videoLink": "demo provided first",
// //         "thumbnail": "demo provided second",
// //         "like": 0,
// //         "dislike": 0,
// //         "createdAt": "2025-02-22T06:38:58.720Z",
// //         "updatedAt": "2025-02-22T06:38:58.720Z",
// //         "__v": 0
// //       }
// //     ]
// //   }



import Video from '../Model/video.model.js';

export const videoUpload = async (req, res) => {
    try {
        const { title, description, videoLink, thumbnail, videoType } = req.body;
        const videoUpload = new Video({
            user: req.user._id,
            title,
            description,
            videoLink,
            thumbnail,
            videoType
        });

        await videoUpload.save();
        res.status(201).json({ success: 'true', videoUpload });

        console.log(req.user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
};

export const GetAllVideo = async (req, res) => {
    try {
        const videos = await Video.find().populate('user', 'title thumbnail user createdAt');
        res.status(200).json({ success: "true", videos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
};
export const GetVideoById = async (req, res) => {
    try {
      let {id} = req.params;
      const video = await Video.findById(id)
      res.status(200).json({ success: "true", "videos": video });
      console.log(id);
    } catch (error) {
       
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
};

export const getAllVideoByUserId = async (req,res)=>{
    try {
        let{userId} = req.params;
        const video = await Video.find({user:userId}).populate('user', 'title thumbnail user createdAt');;
        res.status(200).json({ success: "true", "videos": video });
    } catch (error) {
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
}