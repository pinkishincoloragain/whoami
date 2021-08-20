import React from "react";
import about from "assets/about.png";
import developer from "assets/developer.png";
import interest from "assets/interest.png";
import "styles/Landing.css";

function Landing() {
  return (
    <div id="full_landing">
      <div className="mode">
        <button className="mode_button"></button>
      </div>
      <div className="header">
        <div className="landing_text">
          <b>Welcome!</b>
        </div>
      </div>

      <div className="landing_photos">
        <div className="panel">
          <img id="photo1" src={about} alt="about"></img>
          <div className="photo_descript">
            <p>About</p>
          </div>
        </div>
        <div className="panel">
          <img id="photo2" src={interest} alt="interest"></img>
          <div className="photo_descript">
            <p>Interested in pinkishincoloragain</p>
          </div>
        </div>
        <div className="panel">
          <img id="photo3" src={developer} alt="developer"></img>
          <div className="photo_descript">Developer mode</div>
        </div>
      </div>
      <div className="blog">
        <div>Blog</div>
      </div>
    </div>
  );
}
export default Landing;
