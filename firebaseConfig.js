// npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';


// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3IzTMmopnRFHxaj5F_oosQFcK4Poa_is",
  authDomain: "fir-auth-vue3-56fcc.firebaseapp.com",
  projectId: "fir-auth-vue3-56fcc",
  storageBucket: "fir-auth-vue3-56fcc.appspot.com",
  messagingSenderId: "820318822229",
  appId: "1:820318822229:web:fce5d0d4715443634c59dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const fbDatabase = getDatabase(app);
// export const fStore = getFirestore(app);
// export const fStorage = getStorage(app);

//initialize firebase auth
const auth = getAuth()


export { app, auth }