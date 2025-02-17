import React from 'react'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './sidenavbar.css'
import SlideshowIcon from '@mui/icons-material/Slideshow';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SchoolIcon from '@mui/icons-material/School';
const SideNavbar = ({sidenav}) => {
    return (
        <div className={sidenav ? "home-sidenav":"home-sidenavhide"}>
            <div className="sidenav-top">
                <div className="home-option">
                    <HomeIcon sx={{ color: "white" }} />
                    <div className="option-text">Home</div>
                </div>
                <div className="home-option">
                    <VideoLibraryIcon sx={{ color: "white" }} />
                    <div className="option-text">Shorts</div>
                </div>
                <div className="home-option">
                    <OndemandVideoIcon sx={{ color: "white" }} />
                    <div className="option-text">Subcription</div>
                </div>

            </div>


            <div className="sidenav-middle">
                <div className="home-option">
                    <div className="option-text">You</div>
                    <ChevronRightIcon sx={{ color: "white" }} />
                </div>
                <div className="home-option">
                    <HistoryIcon sx={{ color: "white" }} />
                    <div className="option-text">History</div>
                </div>
                <div className="home-option">
                    <PlaylistPlayIcon sx={{ color: "white" }} />
                    <div className="option-text">Playlist</div>
                </div>
                <div className="home-option">
                    <SlideshowIcon sx={{ color: "white" }} />
                    <div className="option-text">Your Videos</div>
                </div>
                <div className="home-option">
                    <SchoolIcon sx={{ color: "white" }} />
                    <div className="option-text">Your Courses</div>
                </div>
                <div className="home-option">
                    <QueryBuilderIcon sx={{ color: "white" }} />
                    <div className="option-text">Watch Later</div>
                </div>
                <div className="home-option">
                    <ThumbUpOffAltIcon sx={{ color: "white" }} />
                    <div className="option-text">Liked Video</div>
                </div>
                <div className="home-option">
                    <FileDownloadIcon sx={{ color: "white" }} />
                    <div className="option-text">Download</div>
                </div>
            </div>
            <div className="sidenav-lower">
                <div className="home-option">
                    <div className="option-text">Subscriptions</div>
                </div>
                <div className="home-option">
                    <img className='home-option-lower-img' src="https://banner2.cleanpng.com/20180529/lbh/avpq8fgzf.webp" alt="" />
                    <div className="option-text">Aaj Tak</div>
                </div>
                <div className="home-option">
                    <img className='home-option-lower-img' src="https://cdn.dribbble.com/users/5216574/screenshots/14624327/media/77f51bd4912aeb4877be9da6845015e0.jpg" alt="" />
                    <div className="option-text">Sijuka</div>
                </div>
                <div className="home-option">
                <img className='home-option-lower-img' src="https://scontent.fknu1-6.fna.fbcdn.net/v/t1.6435-9/62261346_2261343147267064_6407591464712273920_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=yNBGmrUk154Q7kNvgFDjk12&_nc_oc=AdilwTodqj7-a1jdmzdWJCKHQISCaDjrxPTczI5NSw5Lg8BPj9m8yXfG9oNbe5Kg2cFTatn74SAE-Q6alpwVgAC0&_nc_zt=23&_nc_ht=scontent.fknu1-6.fna&_nc_gid=AufziXmszSPTJ79Ucu4hVvV&oh=00_AYDSkDiojguYCRKW5j-InxyheqlRYs2qu7tvojUKOn33Kg&oe=67D69469" alt="" />

                    <div className="option-text">rj raunak</div>
                </div>

            </div>
        </div>
    )
}

export default SideNavbar;