// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-PixRBrO5ElQ0KHLnYH3cJoQqiFMiTio",
    authDomain: "square-electric.firebaseapp.com",
    projectId: "square-electric",
    storageBucket: "square-electric.appspot.com",
    messagingSenderId: "121946096267",
    appId: "1:121946096267:web:ba0b1c64d9b3f90cf38a8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;