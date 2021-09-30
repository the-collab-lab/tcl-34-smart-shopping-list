// NOTE: import only the Firebase modules that you need in your app... except
// for the second line, which makes both the linter and react-firebase happy
import firebase from 'firebase/app';
import 'firebase/firestore';

// Initalize Firebase.
var firebaseConfig = {
  apiKey: "AIzaSyBOKD-RgLT5A1xaPQCwtvxD32auxgU1hNg",
  authDomain: "tcl-34-smart-shopping-list.firebaseapp.com",
  projectId: "tcl-34-smart-shopping-list",
  storageBucket: "tcl-34-smart-shopping-list.appspot.com",
  messagingSenderId: "364163197766",
  appId: "1:364163197766:web:45b462aa078b06cd5c5347"
};

const firebaseInstance = firebase.initializeApp(firebaseConfig);
const db = firebaseInstance.firestore();

export { db };
