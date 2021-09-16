import db from 'firebase.js';
import {useState} from 'react';
  
const Write = () => {
    const [id  , setID] = useState("");
    const [question , setQuestion] = useState("");
    const [answer , setAnswer] = useState("");
    const [letter , setLetter] = useState("");
    const sub = (e) => {
        e.preventDefault();
          
        // Add data to the store
        db.collection("data").add({
            ID: id,
            Q: question,
            Ans: answer,
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
                <form style={{marginTop:"50px" }}
                  onSubmit={(event) => {sub(event)}}
                  className="input_form">
                    <input type="text" placeholder="Instagram ID"
                    className="id"
                    onChange={(e)=>{setID(e.target.value)}} />
                    <br/><br/>

                    <input type="text" placeholder="Question"
                    className="question"
                    onChange={(e)=>{setQuestion(e.target.value)}}/>
                    <br/><br/>
                    
                    <input type="text" placeholder="Answer"
                    className="answer"
                    onChange={(e)=>{setAnswer(e.target.value)}}/>
                    <br/><br/>

                    <input type="textarea" placeholder="Letter"
                    className = "textarea"
                    cols={50} rows={8}
                    onKeyPress={e => {
                        if(e.key === 'Enter')
                           e.preventDefault()
                           
                        }}
                    onChange={(e)=>{setLetter(e.target.value)}}/>
                    <br/><br/>

                    <button type="submit">Submit</button>
                </form>
            </center>
        </div>
    );
}
  
export default Write;