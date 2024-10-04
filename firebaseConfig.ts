// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX2oC5SZk3O87phivl_bWWHuHOWA9I1Zc",
  authDomain: "fitness-pro-b87dc.firebaseapp.com",
  databaseURL: "https://fitness-pro-b87dc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitness-pro-b87dc",
  storageBucket: "fitness-pro-b87dc.appspot.com",
  messagingSenderId: "482998655574",
  appId: "1:482998655574:web:ec2cd092b44f65d8bbb9f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const auth = getAuth(app)
export {app,db,auth}