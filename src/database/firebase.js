// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Gz3HX-XHagiGSLkDpfvvvhNS0E4goZ8",
  authDomain: "jobi-job-board.firebaseapp.com",
  databaseURL: "https://jobi-job-board-default-rtdb.firebaseio.com",
  projectId: "jobi-job-board",
  storageBucket: "jobi-job-board.appspot.com",
  messagingSenderId: "746704455412",
  appId: "1:746704455412:web:a88888cb5e933a939080a1"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;