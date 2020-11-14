import React from "react";

import "./home-page.styles.scss";
import Illustration from '../../assets/undraw_online_video_ivvq.svg'

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-page-content">
        <div>
          Search for your favorite video, <br />
          you can <span>watch</span> it or <span>download</span> it.
        </div>
        <img src={Illustration} alt='cover' />
      </div>
    </div>
  );
}

export default HomePage;
