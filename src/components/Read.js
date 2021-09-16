// Import Firestore database
import db from 'firebase.js';
import { useEffect, useState } from 'react';
import "styles/Interest.scss";
  
const Read = ({userID}) => {
  
    const [info , setInfo] = useState([]);
  
    // Start the fetch operation as soon as
    // the page loads
    useEffect(() => {
        Fetchdata();
      },[]);
  
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        console.log("{userID} => " + userID )
        db.collection("data").where("ID" ,"==",userID).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                var data = doc.data();
                setInfo(arr => [...arr , data]);
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }
      
    // Display the result on the page
    return (
        <div className = "full_letter">
            <div>
            </div>
            {
                info.map((data) => (
                <Frame key={data.ID}
                    id={data.ID} 
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