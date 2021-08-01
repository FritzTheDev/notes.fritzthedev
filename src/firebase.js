import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const initFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyCKh_ndkxh00dN2N3Ir79cQ07KHci1YGsY",
    authDomain: "marknotes-20178.firebaseapp.com",
    databaseURL: "https://marknotes-20178.firebaseio.com",
    projectId: "marknotes-20178",
    storageBucket: "marknotes-20178.appspot.com",
    messagingSenderId: "263763550177",
    appId: "1:263763550177:web:75cb78592e435e21ed3ca0",
  });
};
