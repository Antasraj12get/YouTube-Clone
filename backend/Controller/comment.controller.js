import Comment from '../Model/comment.model.js'
export const addComment = async (req, res)=>{
    try {
        console.log("it going on")
        let {video, message} = req.body;
        const comment = new Comment({user:req.user._id, video, message})
        await comment.save();
        res.status(201).json({
            message:"success",
            comment
        })
    } catch (error) {
        req.status(500).json({error:"server error"})
    }
}
export const getCommentByVideoI = async (req, res)=>{
    try {
        console.log(req.params)
        let {videoId} = req.params;
        const comments = await Comment.find({video:videoId}).populate('user', 'title thumbnail user createdAt');
       
        res.status(201).json({
            message:"success",
            comments
        })
    } catch (error) {
        res.status(500).json({error:"server error"})
    }
}