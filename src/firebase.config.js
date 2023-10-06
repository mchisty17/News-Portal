// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe5QDqyKM5LrU1hVU3kt8BS150UZBnmyU",
  authDomain: "dragon-news-project-4e9bc.firebaseapp.com",
  projectId: "dragon-news-project-4e9bc",
  storageBucket: "dragon-news-project-4e9bc.appspot.com",
  messagingSenderId: "401058146932",
  appId: "1:401058146932:web:57f6dbb27121889815ff21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth