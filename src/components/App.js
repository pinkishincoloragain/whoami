import "styles/App.scss";
import React from "react";
import firebase from "firebase";
import Routes from "./Routes";

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
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
