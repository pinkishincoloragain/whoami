import db from 'firebase.js';
import {useState} from 'react';
  
const Firestore = () => {
    const [id  , setID] = useState("");
    const [question , setQuestion] = useState("");
    const [letter , setLetter] = useState("");
    const sub = (e) => {
        e.preventDefault();
          
        // Add data to the store
        db.collection("data").add({
            ID: id,
            Q: question,
            Letter: letter
        })
        .then((docRef) => {
            alert("Data Successfully Submitted");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
  
    return (
        <div>
            <center>
                <form style={{marginTop:"200px" }}
                  onSubmit={(event) => {sub(event)}}>
                    <input type="text" placeholder="Instagram ID"
                      onChange={(e)=>{setID(e.target.value)}} />
                      <br/><br/>
                    <input type="text" placeholder="Question"
                      onChange={(e)=>{setQuestion(e.target.value)}}/>
                      <br/><br/>
                    <input type="textarea" placeholder="Letter"
                      onChange={(e)=>{setLetter(e.target.value)}}/>
                      <br/><br/>
                    <button type="submit">Submit</button>
                </form>
            </center>
        </div>
    );
}
  
export default Firestore;