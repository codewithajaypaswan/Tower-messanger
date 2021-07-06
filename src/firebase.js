import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBonrYd_Bhz_ab8b7MHVyfOksjwHIl4LGs",
    authDomain: "tower-test-b055b.firebaseapp.com",
    projectId: "tower-test-b055b",
    storageBucket: "tower-test-b055b.appspot.com",
    messagingSenderId: "805063595139",
    appId: "1:805063595139:web:d77fc7355119cdd46577b6"
  })
  .auth();
