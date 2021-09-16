// Import Firestore database
import db from 'firebase.js';
import { useEffect, useState } from 'react';
import "styles/Interest.scss";
  
const Read = () => {
  
    const [info , setInfo] = useState([]);
  
    // Start the fetch operation as soon as
    // the page loads
    useEffect(() => {
        Fetchdata();
      },[]);
  
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("data").get().then((querySnapshot) => {
             
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);
                  
            });
        
        })
    }
      
    // Display the result on the page
    return (
        <div className = "full_letter">
            <div>
            </div>
            {
                info.map((data) => (
                <Frame id={data.ID} 
                    q={data.Q} 
                    letter={data.Letter}/>
                ))
            }
        </div>
    );
}
  
// Define how each display entry will be structured
const Frame = ({id , letter , q}) => {
    console.log(id + " " + letter + " " + q);
    return (
        <div className="letter_area">
            <div>
                <div className="id_box">{id}</div>
                <div className="question_box">{q}</div>
                <div className="letter_box">{letter}</div>
            </div>
        </div>
    );
}
  
export default Read;