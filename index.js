// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC-1gcRReGoPW3YiF-OKXPdQhtajfqRQA",
  authDomain: "proyecto-final-9b3a6.firebaseapp.com",
  projectId: "proyecto-final-9b3a6",
  storageBucket: "proyecto-final-9b3a6.appspot.com",
  messagingSenderId: "998578263814",
  appId: "1:998578263814:web:4a8d73861fe5a617afb087",
  measurementId: "G-VZD572BLJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

type="text/javascript"
    function applyStyle(style) {
      var buttons = document.getElementsByClassName('menu')[0].getElementsByTagName('button');
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].className = style;
      }
      document.body.className = style;
    }