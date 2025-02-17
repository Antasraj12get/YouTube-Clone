
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import React from 'react';
// import "./videoupload.css";
// import { useState } from 'react';
// import axios from 'axios';

// const Videoupload = () => {
//   const [uploadfield, setuploadfield] = useState({ "titlevideo": "", "description": "", "category": "", "thumbnailupload": "", "videoupload": "" })
//   const uploadimg = async (e, type) => {
//     let files = e.target.files;
//     let data = new FormData();
//     data.append("file", files[0])
//     data.append("upload_preset", "YouTube Clone")
//     try {
//       const response = await axios.post(`http://api.cloudinary.com/v1_1/dtpohcwel/${type}/upload`, data)
//       const url = response.data.url
//       console.log(url)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   function handleuploadfunc(event, name) {
//     setuploadfield({
//       ...uploadfield, [name]: event.target.value
//     })
//   }
//   return (
//     <div className="page-container">
//       <div className="upload-container">
//         <div className="upload-box">
//           <h2 className="upload-title">
//             <YouTubeIcon sx={{ fontSize: "50px", color: "red" }} />
//             Upload Video
//           </h2>
//           <input type="text" onChange={(e) => handleuploadfunc(e, "titlevideo")} value={uploadfield.titlevideo} className="input-field" placeholder="Title of Video" />
//           <textarea className="input-field" onChange={(e) => handleuploadfunc(e, "description")} value={uploadfield.description} placeholder="Description"></textarea>
//           <input type="text" onChange={(e) => handleuploadfunc(e, "category")} value={uploadfield.category} className="input-field" placeholder="Category" />
//           <div className="file-upload">
//             <label>Thumbnail</label>
//             <input accept='image/*'  onChange={(e) => handleuploadfunc(e, "thumbnailupload")} type="file" />
//           </div>
//           <div className="file-upload">
//             <label>Video</label>
//             <input accept='video/mp4 , video/webm, video/*' onChange={(e) => handleuploadfunc(e, " videoupload")} type="file" />
//           </div>
//           <div className="buttons">
//             <button className="upload-btn">Upload</button>
//             <button className="home-btn">Home</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Videoupload;


import YouTubeIcon from '@mui/icons-material/YouTube';
import React, { useState } from 'react';
import "./videoupload.css";
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Videoupload = () => {
    const [uploadfield, setuploadfield] = useState({
        titlevideo: "",
        description: "",
        category: "",
        thumbnailupload: "",
        videoupload: ""
    });
    const[loader, setloader] = useState(false)
    const uploadimg = async (e, type) => {
      setloader(true)

        let files = e.target.files;
        let data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "YouTube Clone");

        try {
            const response = await axios.post(
                `http://api.cloudinary.com/v1_1/dtpohcwel/${type === "video" ? "video/upload" : "image/upload"}`,
                data
            );
            setloader(false)
            const url = response.data.url;

            setuploadfield((prev) => ({
                ...prev,
                [type === "video" ? "videoupload" : "thumbnailupload"]: url
            }));
        } catch (error) {
          setloader(false)
            console.log(error);
        }
    };
    console.log(uploadfield);


    function handleuploadfunc(event, name) {
        setuploadfield({
            ...uploadfield,
            [name]: event.target.value
        });
    }

    return (
        <div className="page-container">
            <div className="upload-container">
                <div className="upload-box">
                    <h2 className="upload-title">
                        <YouTubeIcon sx={{ fontSize: "50px", color: "red" }} />
                        Upload Video
                    </h2>
                    <input
                        type="text"
                        onChange={(e) => handleuploadfunc(e, "titlevideo")}
                        value={uploadfield.titlevideo}
                        className="input-field"
                        placeholder="Title of Video"
                    />
                    <textarea
                        className="input-field"
                        onChange={(e) => handleuploadfunc(e, "description")}
                        value={uploadfield.description}
                        placeholder="Description"
                    ></textarea>
                    <input
                        type="text"
                        onChange={(e) => handleuploadfunc(e, "category")}
                        value={uploadfield.category}
                        className="input-field"
                        placeholder="Category"
                    />
                    <div className="file-upload">
                        <label>Thumbnail</label>
                        <input accept="image/*" onChange={(e) => uploadimg(e, "image")} type="file" />
                    </div>
                    <div className="file-upload">
                        <label>Video</label>
                        <input accept="video/mp4, video/webm, video/*" onChange={(e) => uploadimg(e, "video")} type="file" />
                    </div>
                    {
                      loader &&
                      <Box sx={{ display: 'flex' , fontSize:'15px' }}>
                      <CircularProgress />
                    </Box>
                    }
                    <div className="buttons">
                        <button className="upload-btn">Upload </button>
                        <button className="home-btn">Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Videoupload;
