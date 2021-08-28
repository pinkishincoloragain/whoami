import * as firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "crack-photon-310316.firebaseapp.com",
  databaseURL: "https://crack-photon-310316-default-rtdb.firebaseio.com",
  projectId: "crack-photon-310316",
  storageBucket: "c rack-photon-310316.appspot.com",
  messagingSenderId: "391113743446",
  appId: "1:391113743446:web:71b3dbfb17dd7b8b506ff7",
  measurementId: "G-B51BXVLV9B",
};

export default firebase.initializeApp(firebaseConfig);
