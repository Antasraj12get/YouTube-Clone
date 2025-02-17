import React from 'react'
import SideNavbar from '../components/SideNavbar';
import './home.css'
import HomePage from '../components/HomePage';

function Home({sidenav}) {
    return (
        <div className="Home">
        <SideNavbar  sidenav={sidenav} />
        <HomePage sidenav={sidenav}/>

        </div>
    )
}
export default Home;