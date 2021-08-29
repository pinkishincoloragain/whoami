import { React, useState } from "react";
import { Link } from "react-router-dom";
import about from "assets/about.png";
import developer from "assets/developer.png";
import interest from "assets/interest.png";
import "styles/Landing.scss";
import fish from "assets/fish.svg";

function Landing() {
  const [bkgColor, setBkgColor] = useState("black");
  const [btnColor, setBtnColor] = useState(true);

  function handleClick(e) {
    e.preventDefault();
    setBtnColor(!btnColor);
    if (bkgColor == "black") {
      setBkgColor("white");
    } else {
      setBkgColor("black");
    }
  }

  return (
    <div id="full_landing" style={{ backgroundColor: bkgColor }}>
      <div className="mode">
        {btnColor ? (
          <button
            className="mode_button"
            onClick={handleClick}
            style={{ backgroundColor: "white" }}></button>
        ) : (
          <button
            className="mode_button"
            onClick={handleClick}
            style={{ backgroundColor: "black" }}></button>
        )}
      </div>
      <div className="header">
        <Link className="link" to="/home">
          <div className="welcome_text">
            <b>Welcome!</b>
            <img src={fish} className="fish"></img>
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
