import { React, useState } from "react";
import "styles/Interest.scss";
import ShowLetter from "views/showLetter";
import Read from "components/Read";

function Interest() {
  const [verified, setVerified] = useState(false);
  const [userID, setUserID] = useState(null);
  const [question, setQuestion] = useState("Where do I go?");

  function handleSubmit(userid) {
    setUserID(userid);
    console.log(userid);
  }
  // const firestore = firebase.firestore();

  function GetData() {
    return (
      <div>
        <div className="input_label">Instagram ID :</div>
        <form
          className="inputForm"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.target);
            handleSubmit(data.get("id"));
          }}
        >
          <input autoFocus={true} className="inputText" type="text" name="id" />
          <input className="submitBtn" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
  return (
    <div className="recipient">
      {verified ? (
        <ShowLetter />
      ) : (
        <div>
          {userID ? <Read key={userID} userID={userID} /> : <GetData />}
        </div>
      )}
    </div>
  );
}
export default Interest;
