import React from 'react'
import "./homepage.css"
import { Link } from "react-router-dom"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const HomePage = ({ sidenav }) => {
  const Options = ["All", "twentyCricket", "Music", "Live", "Mixes", "Gaming", "Debate", "Democrasy", "Pakistan", "Hungana", "Marshal Arts", "Indian Foods", "Live", "Mixes", "Gaming", "Debate", "Democrasy", "Pakistan", "Hungana", "Marshal Arts", "Indian Foods"]
  return (

    <div className={sidenav ? "homepage" : "full-homepage"}>
      <div className="homepage-options">
        {
          Options.map((item, idx) => {
            return <div key={idx} className="homepage-option">
              {item}
            </div>
          })
        }
      </div>

      <div className="home-mainpage">


        <Link to={'/watch/25'} className="yt-video">
          <div className="thumbnail-box">
            <img src="https://cdn.pixabay.com/photo/2015/02/15/03/04/japanese-umbrellas-636870_1280.jpg" className='thumbnail-pic' alt="" />
            <div className="thumbnail-timing">
              16:23
            </div>
          </div>
          <div className="yttitalbox">
            <div className="yttitleboxprofile">
              <img src="https://cdn.pixabay.com/photo/2024/05/25/15/36/ai-generated-8787304_1280.jpg" alt="profileimg" className='yttitleboxprofileimg' />
            </div>
            <div className="text-yttitlebox">
              <div className="title-yt">How to Complete kyc of Pi App</div>
              <div className="channel-yt channel-yt-all">noWoories</div>
              <div className="info-yt channel-yt-all">
                <div className="views-yt">56k views</div>
                <div className="date-yt">12february</div>
              </div>
            </div>
          </div>

        </Link>
        <div className="yt-video">
          <div className="thumbnail-box">
            <img src="https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832_1280.jpg" className='thumbnail-pic' alt="" />
            <div className="thumbnail-timing">
              16:23
            </div>
          </div>
          <div className="yttitalbox">
            <div className="yttitleboxprofile">
              <img src="https://cdn.pixabay.com/photo/2024/04/18/03/17/ai-generated-8703394_1280.png" alt="profileimg" className='yttitleboxprofileimg' />
            </div>
            <div className="text-yttitlebox">
              <div className="title-yt">How to Complete kyc of Pi App</div>
              <div className="channel-yt channel-yt-all">noWoories</div>
              <div className="info-yt channel-yt-all">
                <div className="views-yt">56k views</div>
                <div className="date-yt">12february</div>
              </div>
            </div>
          </div>

        </div>
        <div className="yt-video">
          <div className="thumbnail-box">
            <img src="https://cdn.pixabay.com/photo/2024/03/04/14/17/ai-generated-8612487_1280.jpg" className='thumbnail-pic' alt="" />
            <div className="thumbnail-timing">
              16:23
            </div>
          </div>
          <div className="yttitalbox">
            <div className="yttitleboxprofile">
              <img src="https://cdn.pixabay.com/photo/2024/03/04/14/17/ai-generated-8612487_1280.jpg" alt="profileimg" className='yttitleboxprofileimg' />
            </div>
            <div className="text-yttitlebox">
              <div className="title-yt">How to Complete kyc of Pi App</div>
              <div className="channel-yt channel-yt-all">noWoories</div>
              <div className="info-yt channel-yt-all">
                <div className="views-yt">56k views</div>
                <div className="date-yt">12february</div>
              </div>
            </div>
          </div>

        </div>
        <div className="yt-video">
          <div className="thumbnail-box">
            <img src="https://cdn.pixabay.com/photo/2024/05/25/15/36/ai-generated-8787304_1280.jpg" className='thumbnail-pic' alt="" />
            <div className="thumbnail-timing">
              16:23
            </div>
          </div>
          <div className="yttitalbox">
            <div className="yttitleboxprofile">
              <img src="https://cdn.pixabay.com/photo/2024/05/25/15/36/ai-generated-8787304_1280.jpg" alt="profileimg" className='yttitleboxprofileimg' />
            </div>
            <div className="text-yttitlebox">
              <div className="title-yt">How to Complete kyc of Pi App</div>
              <div className="channel-yt channel-yt-all">noWoories</div>
              <div className="info-yt channel-yt-all">
                <div className="views-yt">56k views</div>
                <div className="date-yt">12february</div>
              </div>
            </div>
          </div>

        </div>
        <div className="yt-video">
          <div className="thumbnail-box">
            <img src="https://cdn.pixabay.com/photo/2024/05/25/15/09/ai-generated-8787247_1280.jpg" className='thumbnail-pic' alt="" />
            <div className="thumbnail-timing">
              16:23
            </div>
          </div>
          <div className="yttitalbox">
            <div className="yttitleboxprofile">
              <img src="https://cdn.pixabay.com/photo/2024/05/25/15/09/ai-generated-8787247_1280.jpg" alt="profileimg" className='yttitleboxprofileimg' />
            </div>
            <div className="text-yttitlebox">
              <div className="title-yt">How to Complete kyc of Pi App</div>
              <div className="channel-yt channel-yt-all">noWoories</div>
              <div className="info-yt channel-yt-all">
                <div className="views-yt">56k views</div>
                <div className="date-yt">12february</div>
              </div>
            </div>
          </div>

        </div>
        <div className="yt-video">
          <div className="thumbnail-box">
            <img src="https://cdn.pixabay.com/photo/2023/02/03/05/12/youtube-background-7764173_1280.jpg" className='thumbnail-pic' alt="" />
            <div className="thumbnail-timing">
              16:23
            </div>
          </div>
          <div className="yttitalbox">
            <div className="yttitleboxprofile">
              <img src="https://cdn.pixabay.com/photo/2023/02/03/05/12/youtube-background-7764173_1280.jpg" alt="profileimg" className='yttitleboxprofileimg' />
            </div>
            <div className="text-yttitlebox">
              <div className="title-yt">How to Complete kyc of Pi App</div>
              <div className="channel-yt channel-yt-all">noWoories</div>
              <div className="info-yt channel-yt-all">
                <div className="views-yt">56k views</div>
                <div className="date-yt">12february</div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default HomePage