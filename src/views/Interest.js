import { React, useState } from "react";
import "styles/Interest.scss";
import ShowLetter from "views/showLetter";
import firebase from 'firebase/compat/app';
import getQuestion from "firebase";
import { verify } from "cacache";


function Interest() {
  const [verified, setVerified] = useState(false);
  const [userID, setUserID] = useState(null);
  const [question, setQuestion] = useState("Where do I go?")

  function handleSubmit(userID){
    setUserID(userID);
    console.log(userID);
  }

  function Verifier(userID){
    const Q = getQuestion(userID);
    return <div>
      {Q}
    </div>
  }
  return (
    <div className="recipient">
      {verified ? (
        <ShowLetter />
      ) : (
        <div>
          {userID ? <div><Verifier/></div> : <div>
            Instagram ID :
          <form className="inputForm" onSubmit={(e)=>{
            e.preventDefault();
            const data = new FormData(e.target); 
            handleSubmit(data.get("id"));
          }}>
            <input
              autoFocus="true"
              className="inputText"
              type="text"
              name="id"
            />
            <input className="submitBtn" type="submit" value="Submit" />
          </form></div>}
          
        </div>
      )}
    </div>
  );
}
export default Interest;