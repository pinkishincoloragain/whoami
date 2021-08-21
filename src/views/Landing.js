import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import about from "assets/about.png";
import developer from "assets/developer.png";
import interest from "assets/interest.png";
import About from "views/About";
import Interest from "views/Interest";
import Developer from "views/Developer";
import "styles/Landing.css";

function Landing() {
  return (
    <div id="full_landing">
      <Router>
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
        {/* <Route exact path="/home" component={Landing} /> */}
        <Route exact path="/about" component={About} />
        <Route exact path="/interest" component={Interest} />
        <Route exact path="/developer" component={Developer} />
      </Router>
    </div>
  );
}
export default Landing;
