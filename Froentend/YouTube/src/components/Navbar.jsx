// // Import necessary dependencies
// import React from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AddIcon from '@mui/icons-material/Add';
// import MicIcon from '@mui/icons-material/Mic';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import { useState } from 'react';
// import './navbar.css';
// // import setsidenavbarFunc

// const Navbar = ({setsidenavbarFunc, sidenav}) => {
//   const[userimg,setuserimg] = useState("https://cdn.pixabay.com/photo/2024/03/25/14/00/cute-8654842_1280.jpg")
//   const[navmodel,setnavmodel] = useState(false)
//   function handlenavmodel(){
//     setnavmodel(!navmodel)
//   }
//   function sidenavFunc(){
//     setsidenavbarFunc(!sidenav)
//   }
  
//   return (
//     <nav className="navbar">
//       {/* Left Navigation */}
//       <div className="left_nav">
//         <div className="menu" onClick={sidenavFunc}>
          
//           <MenuIcon sx={{ color: 'white' }} />
//         </div>
//         <div className="yt-logo">
//           <YouTubeIcon sx={{ fontSize: 34, color: 'red' }} />
//           <span className="logo-text">
//             YouTube <sup className="sup">IN</sup>
//           </span>
//         </div>
//       </div>

//       {/* Middle Navigation */}
//       <div className="middle_nav">
//         <div className="search-bar">
//           <input type="text" placeholder="Search" className="input-box" />
//           <div className="search">
//             <SearchIcon sx={{ color: 'white', fontSize: 25 }} />
//           </div>
//         </div>
//         <div className="mic">
//           <MicIcon sx={{ color: 'white', fontSize: 25 }} />
//         </div>
//       </div>

//       {/* Right Navigation */}
//       <div className="right_nav">
//         <div className="create-box">
//           <AddIcon sx={{ color: 'white' }} />
//           <h4>Create</h4>
//         </div>
//         <div className="notification">
//           <NotificationsIcon sx={{ color: 'white' }} />
//         </div>
//         <div className="profile">
//           <img
//             src={userimg}
//             onClick={handlenavmodel}
//             alt="profile"
//           />
//           { navmodel &&
//             <div className="nav-model">
//             <div className="model-profile model-all">Profile</div>
//             <div className="model-login model-all">Log In</div>
//             <div className="model-Signup model-all">Sign Up</div>
//           </div>}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// Import necessary dependencies
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Login from './Login';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link , useNavigate } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useState } from 'react';
import './navbar.css';
// import setsidenavbarFunc

const Navbar = ({setsidenavbarFunc, sidenav}) => {
  const[userimg,setuserimg] = useState("https://cdn.pixabay.com/photo/2024/03/25/14/00/cute-8654842_1280.jpg")
  const[navmodel,setnavmodel] = useState(false)
  const[login, setlogin] = useState(false)
  const navigate = useNavigate();
  function onclickpagepoput(button){
    setnavmodel(false)
    if(button === "login"){
      setlogin(true)
    }else{

    }
  }
  function handlenavmodel(){
    setnavmodel(!navmodel)
  }
  function sidenavFunc(){
    setsidenavbarFunc(!sidenav)
  }
  function handlenavigate(){
    navigate('/user/25');
    setnavmodel(false)
  }
  function setloginmodel(){
    setlogin(false)
  }
  
  return (
    <nav className="navbar">
      {/* Left Navigation */}
      <div className="left_nav">
        <div className="menu" onClick={sidenavFunc}>
          
          <MenuIcon sx={{ color: 'white' }} />
        </div>
        <div className="yt-logo">
          <YouTubeIcon sx={{ fontSize: 34, color: 'red' }} />
          <Link to={'/'} className="logo-text">
            YouTube <sup className="sup">IN</sup>
          </Link>
        </div>
      </div>

      {/* Middle Navigation */}
      <div className="middle_nav">
        <div className="search-bar">
          <input type="text" placeholder="Search" className="input-box" />
          <div className="search">
            <SearchIcon sx={{ color: 'white', fontSize: 25 }} />
          </div>
        </div>
        <div className="mic">
          <MicIcon sx={{ color: 'white', fontSize: 25 }} />
        </div>
      </div>

      {/* Right Navigation */}
      <div className="right_nav">
        <Link to={'/55/upload'} className="create-box">
          <AddIcon sx={{ color: 'white' }} />
          <h4>Create</h4>
        </Link>
        <div className="notification">
          <NotificationsIcon sx={{ color: 'white' }} />
        </div>
        <div className="profile">
          <img
            src={userimg}
            onClick={handlenavmodel}
            alt="profile"
          />
          { navmodel &&
            <div className="nav-model">
            <div onClick={handlenavigate} className="model-profile model-all ">Profile</div>
            <div className="model-login model-all" onClick={()=> onclickpagepoput("login")}>Log In</div>
            <div className="model-Signup model-all" onClick={()=> onclickpagepoput("logout")} >Log Out</div>
            <div className="model-Signup model-all">Sign Up</div>

          </div>}
        </div>
      
      </div>
      {
          login && <Login setloginmodel={setloginmodel}/>
        }
    </nav>
  );
};

export default Navbar;

