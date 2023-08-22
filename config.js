import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4I-NnwV3s-ksbHmmui71FAK_7LH5AP4k",
    authDomain: "pro-72-d36d3.firebaseapp.com",
    projectId: "pro-72-d36d3",
    storageBucket: "pro-72-d36d3.appspot.com",
    messagingSenderId: "1036325754830",
    appId: "1:1036325754830:web:29a816b8e80f99c3113d9f",
    measurementId: "G-42Q5SP0V39"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
