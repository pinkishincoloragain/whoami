import firebase from 'firebase/compat/app';
import "firebase/analytics";
import "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "crack-photon-310316.firebaseapp.com",
  databaseURL: "https://crack-photon-310316-default-rtdb.firebaseio.com",
  projectId: "crack-photon-310316",
  storageBucket: "crack-photon-310316.appspot.com",
  messagingSenderId: "391113743446",
  appId: "1:391113743446:web:71b3dbfb17dd7b8b506ff7",
  measurementId: "G-B51BXVLV9B",
};

firebase.initializeApp(firebaseConfig);

export default function getQuestion(user){
  firebase.firestore().collection("users")
  .doc("question").get().then(doc=>{
    return <div>
      doc.data().question
    </div>;
  })
} 
