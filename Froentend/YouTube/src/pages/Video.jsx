import React from 'react'
import "./video.css"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Video = () => {
    const[handleusercomment, sethandleusercomment] = useState("")
    console.log(handleusercomment)
    return (
        <div className="video">
            <div className="video-section">
                <div className="youtube_video">
                    <video width="400" controls autoPlay className='video-play-yt' >
                        <source src='https://www.w3schools.com/html/mov_bbb.mp4' type='vide/mp4' />
                        <source src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/webm' />
                        Your video doesnot support the Tags
                    </video>
                </div>
                <div className="video-about-yt">
                    javas cript
                </div>
                <div className="yt-profileblock">
                    <div className="yt-left">
                        <div className="img-profile-yt">
                            <img className='img-yt' src="https://cdn.pixabay.com/photo/2022/04/18/00/33/dp-7139175_1280.png" alt="" />
                        </div>
                        <div className="yt-subview">
                            <div className="ytprofilename">{"user1"}</div>
                            <div className="ytprofilesubs">{"2024-07-09"}</div>
                        </div>
                        <div className="yt-subsbutton">Suscribe</div>
                    </div>
                    <div className="yt-right">
                        <div className="likeblockn block">
                            <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                            <span>400</span>
                            |
                            <ThumbDownOffAltIcon></ThumbDownOffAltIcon>
                        </div>
                        <div className="shareblock block">
                            <ShareIcon></ShareIcon>
                            Share
                        </div>
                        <div className="download block">
                            <FileDownloadIcon></FileDownloadIcon>
                            Download
                        </div>
                        <div className="etcblock block">
                            <MoreHorizIcon></MoreHorizIcon>

                        </div>
                    </div>

                </div>
                <div className="yt-about ">
                    <div className="date-yt">{"2025-15-08"}</div>
                    <div className="desc-yt">this video is about pathology</div>
                </div>
                <div className="yt-comment-section">
                    <div className="yt-comment-title">10 Comments</div>
                    <div className="yt-user-comment">
                        <div className="img-logo">
                            <img src="https://cdn.pixabay.com/photo/2016/11/07/09/06/river-1805181_1280.jpg" className='img-yt-comment' alt="" />
                        </div>
                        <div className="input-box">
                            <div className="input">
                                <input type="text "
                                    placeholder='Add a comment' className='input-comment'
                                    value={handleusercomment} onChange={(e)=> sethandleusercomment(e.target.value)} />
                            </div>
                            <div className="lower-box">
                                <div className="cancle">Cancle</div>
                                <div className="comment">Comment</div>
                            </div>
                        </div>
                    </div>
                    <div className="yt-all-comment">
                        <div className="yt-all-comment-section">
                            <div className="yt-allcomment-logo">
                                <img src="https://cdn.pixabay.com/photo/2016/11/07/09/06/river-1805181_1280.jpg" className='img-yt-comment' alt="" />
                            </div>
                            <div className="othercomment-info">
                                <div className="name-date">
                                    <div className="other-n-date">user-1</div>
                                    <div className="other-c-date">27 february</div>
                                </div>
                                <div className="comment-test">this is a such a excellent video</div>
                                <div className="other-functionality">
                                    <div className="other-func-box">
                                        <ThumbUpOffAltIcon sx={{ fontSize: "15px" }}></ThumbUpOffAltIcon>
                                        <span>4</span>
                                        |
                                        <ThumbDownOffAltIcon sx={{ fontSize: "15px" }}></ThumbDownOffAltIcon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            {/* suggetionpart starts from here */}

            <div className="video-suggetion">
                <div className="suggetion-block">
                    <div className="video-thumbnail">
                        <img src="https://cdn.pixabay.com/photo/2023/02/24/23/12/storm-7812036_1280.jpg" className='video-thumbnail-img' alt="" />
                    </div>
                    <div className="video-suggetion-about">
                        <div className="about-suggestion-title">
                            India vs Pakistan !! India won by 208 runs.
                        </div>
                        <div className="suggetion-channel suggetion">India Tv <CheckCircleIcon sx={{fontSize:"13px"}}/> </div>
                        <div className="view-up_date">
                            <div className="view-suggetion suggetion">15k Views</div>
                            <div className="date-suggetion suggetion">12 month Ago</div>
                        </div>
                    </div>
                </div>
                <div className="suggetion-block">
                    <div className="video-thumbnail">
                        <img src="https://cdn.pixabay.com/photo/2023/02/24/23/12/storm-7812036_1280.jpg" className='video-thumbnail-img' alt="" />
                    </div>
                    <div className="video-suggetion-about">
                        <div className="about-suggestion-title">
                            India vs Pakistan !! India won by 208 runs.
                        </div>
                        <div className="suggetion-channel suggetion">India Tv <CheckCircleIcon sx={{fontSize:"13px"}}/> </div>
                        <div className="view-up_date">
                            <div className="view-suggetion suggetion">15k Views</div>
                            <div className="date-suggetion suggetion">12 month Ago</div>
                        </div>
                    </div>
                </div>
                <div className="suggetion-block">
                    <div className="video-thumbnail">
                        <img src="https://cdn.pixabay.com/photo/2023/02/24/23/12/storm-7812036_1280.jpg" className='video-thumbnail-img' alt="" />
                    </div>
                    <div className="video-suggetion-about">
                        <div className="about-suggestion-title">
                            India vs Pakistan !! India won by 208 runs.
                        </div>
                        <div className="suggetion-channel suggetion">India Tv <CheckCircleIcon sx={{fontSize:"13px"}}/> </div>
                        <div className="view-up_date">
                            <div className="view-suggetion suggetion">15k Views</div>
                            <div className="date-suggetion suggetion">12 month Ago</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video