// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiTpO2ykBzj_j10_e9yWvMHexHAPHlQCY",
    authDomain: "fir-user-email-login.firebaseapp.com",
    projectId: "fir-user-email-login",
    storageBucket: "fir-user-email-login.appspot.com",
    messagingSenderId: "168091236145",
    appId: "1:168091236145:web:6516e1da3fabb91b3fa210"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;