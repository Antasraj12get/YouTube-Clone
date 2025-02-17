
import React from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import SideNavbar from '../components/SideNavbar';

const Profile = ({ sidenav }) => {
    return (
        <div className="profile">
            <SideNavbar sidenav={sidenav} />
            <div className="profilepage">
                {/* Banner Image */}
                <div className="banner-container">
                    <img
                        className="banner-img"
                        src="https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275_1280.jpg"
                        alt="Banner"
                    />
                </div>


                {/* Profile Section */}
                <div className="profile-top-section">


                    {/* Profile Details */}
                    <div className="profile-content">

                        <div className="container-box">
                            <div className="about-name-profile">Two Side Avengers</div>
                            <div className="about-info">@Two Side • 1k subscribers • 18 videos</div>
                            <div className="about-info">Hii guys, I am Antas raj pathak currently working as a froentend developer in Amazon</div>
                            <div className="about-info">
                                <a href="#" className="profile-link">port-b7439.web.app</a> and <span className="profile-link">2 more links</span>
                            </div>

                            {/* Buttons */}
                            <div className="profile-buttons">
                                <button className="profile-button subscribe-button">Subscribe</button>
                                <button className="profile-button join-button">Join</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Bar (Home, Videos, etc.) */}
                <div className="profile-nav">
                    <span className="nav-item active">Home</span>
                    <span className="nav-item">Videos</span>
                    <span className="nav-item">Shorts</span>
                    <span className="nav-item">Playlists</span>
                    <span className="nav-item">Posts</span>
                </div>
                <div className="profile-nav-element">
                    <div className="category1"> <div className="heading">Popular Videos</div>
                        <div className="all-elements">
                            <Link to={'/watch/25'} className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://cdn.pixabay.com/photo/2023/11/23/18/38/flower-8408535_1280.png" alt="" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to derriev ui ux fromula from a ingine</div>
                                    <div className="info-popular">
                                        2k views  .  8 month ago
                                    </div>
                                </div>
                            </Link>
                            <div className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://cdn.pixabay.com/photo/2023/11/23/18/38/flower-8408535_1280.png" alt="" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to derriev ui ux fromula from a ingine</div>
                                    <div className="info-popular">
                                        2k views  .  8 month ago
                                    </div>
                                </div>
                            </div>
                            <div className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://cdn.pixabay.com/photo/2023/11/23/18/38/flower-8408535_1280.png" alt="" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to derriev ui ux fromula from a ingine</div>
                                    <div className="info-popular">
                                        2k views  .  8 month ago
                                    </div>
                                </div>
                            </div>
                            <div className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://cdn.pixabay.com/photo/2023/11/23/18/38/flower-8408535_1280.png" alt="" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to derriev ui ux fromula from a ingine</div>
                                    <div className="info-popular">
                                        2k views  .  8 month ago
                                    </div>
                                </div>
                            </div>
                            <div className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://cdn.pixabay.com/photo/2023/11/23/18/38/flower-8408535_1280.png" alt="" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to derriev ui ux fromula from a ingine</div>
                                    <div className="info-popular">
                                        2k views  .  8 month ago
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="category2"> <div className="heading">Playlist Videos</div>
                        <div className="all-elements">
                            <div className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://cdn.pixabay.com/photo/2023/11/23/18/38/flower-8408535_1280.png" alt="" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to derriev ui ux fromula from a ingine</div>
                                    <div className="info-popular">
                                        2k views  .  8 month ago
                                    </div>
                                </div>
                            </div>
                            <div className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://cdn.pixabay.com/photo/2023/11/23/18/38/flower-8408535_1280.png" alt="" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to derriev ui ux fromula from a ingine</div>
                                    <div className="info-popular">
                                        2k views  .  8 month ago
                                    </div>
                                </div>
                            </div>
                            <div className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://cdn.pixabay.com/photo/2023/11/23/18/38/flower-8408535_1280.png" alt="" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to derriev ui ux fromula from a ingine</div>
                                    <div className="info-popular">
                                        2k views  .  8 month ago
                                    </div>
                                </div>
                            </div>
                            <div className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://cdn.pixabay.com/photo/2023/11/23/18/38/flower-8408535_1280.png" alt="" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to derriev ui ux fromula from a ingine</div>
                                    <div className="info-popular">
                                        2k views  .  8 month ago
                                    </div>
                                </div>
                            </div>
                            <div className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://cdn.pixabay.com/photo/2023/11/23/18/38/flower-8408535_1280.png" alt="" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to derriev ui ux fromula from a ingine</div>
                                    <div className="info-popular">
                                        2k views  .  8 month ago
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="category3"> <div className="heading"> Videos</div>
                        <div className="all-elements">
                            <div className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://cdn.pixabay.com/photo/2023/11/23/18/38/flower-8408535_1280.png" alt="" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to derriev ui ux fromula from a ingine</div>
                                    <div className="info-popular">
                                        2k views  .  8 month ago
                                    </div>
                                </div>
                            </div>
                            <div className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://cdn.pixabay.com/photo/2023/11/23/18/38/flower-8408535_1280.png" alt="" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to derriev ui ux fromula from a ingine</div>
                                    <div className="info-popular">
                                        2k views  .  8 month ago
                                    </div>
                                </div>
                            </div>
                            <div className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://cdn.pixabay.com/photo/2023/11/23/18/38/flower-8408535_1280.png" alt="" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to derriev ui ux fromula from a ingine</div>
                                    <div className="info-popular">
                                        2k views  .  8 month ago
                                    </div>
                                </div>
                            </div>
                            <div className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://cdn.pixabay.com/photo/2023/11/23/18/38/flower-8408535_1280.png" alt="" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to derriev ui ux fromula from a ingine</div>
                                    <div className="info-popular">
                                        2k views  .  8 month ago
                                    </div>
                                </div>
                            </div>
                            <div className="yt-single-videos">
                                <div className="pics-yt">
                                    <img className='img-yt-popular' src="https://cdn.pixabay.com/photo/2023/11/23/18/38/flower-8408535_1280.png" alt="" />
                                </div>
                                <div className="about-yt">
                                    <div className="title-popular">How to derriev ui ux fromula from a ingine</div>
                                    <div className="info-popular">
                                        2k views  .  8 month ago
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
