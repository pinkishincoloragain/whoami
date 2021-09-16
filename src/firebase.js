import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAhp2pnGDTH3hDUmOtTag13VURo7x8pn6c",
  authDomain: "crack-photon-310316.firebaseapp.com",
  databaseURL: "https://crack-photon-310316-default-rtdb.firebaseio.com",
  projectId: "crack-photon-310316",
  storageBucket: "crack-photon-310316.appspot.com",
  messagingSenderId: "391113743446",
  appId: "1:391113743446:web:71b3dbfb17dd7b8b506ff7",
  measurementId: "G-B51BXVLV9B"
};


firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default db;
