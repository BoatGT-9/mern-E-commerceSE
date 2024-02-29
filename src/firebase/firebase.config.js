// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID
};
// const firebaseConfig = {
//     apiKey: "AIzaSyDIgn3gm4RUHZVHpXKE_-nYsjoQwpRAWEc",
//     authDomain: "mern-e-commerce-learn.firebaseapp.com",
//     projectId: "mern-e-commerce-learn",
//     storageBucket: "mern-e-commerce-learn.appspot.com",
//     messagingSenderId: "249492332945",
//     appId: "1:249492332945:web:4e0137233ba11df4beba30"
//   };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app