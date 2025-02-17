import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile";
import Video from "./pages/Video";
import Videoupload from "./pages/Videoupload";
import Signup from "./pages/Signup";
function App() {
    const [sidenav, setsidenav] = useState(true);
    function setsidenavbarFunc(value) {
        setsidenav(value)
    }
    return (
        <>
            <Navbar setsidenavbarFunc={setsidenavbarFunc} sidenav={sidenav} />
            <Routes>
                <Route path="/" element={<Home sidenav={sidenav} />} />
                <Route path="/watch/25" element={<Video/>} />
                <Route path="/user/:id" element={<Profile sidenav={sidenav}/>}/>
                <Route path="/:id/upload" element={<Videoupload/>}/>
                <Route path="/signup" element={<Signup/>}/>

            </Routes>
        </>
    )
}
export default App;