import React from "react";
import { Link } from "react-router-dom";
import about from "assets/about.png";
import developer from "assets/developer.png";
import interest from "assets/interest.png";
import "styles/Landing.scss";

function Landing() {
  return (
    <div id="full_landing">
      <div className="mode">
        <button className="mode_button"></button>
      </div>
      <div className="header">
        <Link className="link" to="/home">
          <div className="welcome_text">
            <b>Welcome!</b>
          </div>
        </Link>
      </div>
      <div className="landing_photos">
        <div className="panel">
          <Link to="/about">
            <img id="photo1" src={about} alt="about"></img>
          </Link>
          <div className="photo_descript">
            <p>About</p>
          </div>
        </div>

        <div className="panel">
          <Link to="/interest">
            <img id="photo2" src={interest} alt="interest"></img>
          </Link>
          <div className="photo_descript">
            <p>Interested in pinkishincoloragain</p>
          </div>
        </div>
        <div className="panel">
          <Link to="/developer">
            <img id="photo3" src={developer} alt="developer"></img>
          </Link>
          <div className="photo_descript">Developer mode</div>
        </div>
      </div>
      <div className="blog">
        <div>Blog</div>
      </div>
      {/* <Switch>
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/interest" render={() => <Interest />} />
          <Route exact path="/developer" render={() => <Developer />} />
          <Route component={NotFound} />
        </Switch> */}
    </div>
  );
}
export default Landing;
