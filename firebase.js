// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7fFBk_0wNdWM33rEl4O4Wmq7ouIqkDtg",
  authDomain: "dilemma-1e84b.firebaseapp.com",
  projectId: "dilemma-1e84b",
  storageBucket: "dilemma-1e84b.appspot.com",
  messagingSenderId: "841302321335",
  appId: "1:841302321335:web:eb5caef7b6194a7c2a8532"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };
