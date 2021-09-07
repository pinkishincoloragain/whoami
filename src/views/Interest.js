import { React, useState } from "react";
import "styles/Interest.scss";
import ShowLetter from "views/showLetter";

function Interest() {
  const [verified, setVerified] = useState(false);
  const [userID, setUserID] = useState(false);

  const checkUser = (e) => {
    
  }
  return (
    <div className="recipient">
      {verified ? (
        <ShowLetter />
      ) : (
        <div>
          Instagram ID :
          <form className="inputForm" onSubmit={(e)=>{
            e.preventDefault();
            const data = new FormData(e.target); 
            setUserID(data.get(userID))
          }}>
            <input
              autoFocus="true"
              className="inputText"
              type="text"
              name="userID"
            />
            <input className="submitBtn" type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
}
export default Interest;
