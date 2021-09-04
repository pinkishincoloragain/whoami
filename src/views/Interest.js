import { React, useState } from "react";
import "styles/Interest.scss";
import ShowLetter from "views/showLetter";

function Interest() {
  const [verified, setVerified] = useState(false);
  return (
    <div className="recipient">
      {verified ? (
        <ShowLetter />
      ) : (
        <div>
          Instagram ID :
          <form className="inputForm">
            <input
              autoFocus="true"
              className="inputText"
              type="text"
              name="name"
            />
            <input className="submitBtn" type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
}
export default Interest;
