import "./styles/App.css";
import React from "react";
import firebase from "firebase";
import Window from "./components/Window";
import Landing from "./views/Landing";

// const firebaseConfig = {
//   apiKey: "AIzaSyD5RgFIHakgCeDH6an2pbNHczcdtc3Ofos",
//   authDomain: "myportfolio-44f25.firebaseapp.com",
//   projectId: "myportfolio-44f25",
//   storageBucket: "myportfolio-44f25.appspot.com",
//   messagingSenderId: "802146914555",
//   appId: "1:802146914555:web:cfcca4fff0ffd07554605e",
//   measurementId: "G-KD9RYS8091",
// };

// firebase.initializeApp(firebaseConfig); //firebase 초기화

// const db = firebase.firestore(); //store 사용

function App() {
  return (
    <div>
      <Landing />
    </div>
  );
}

export default App;
