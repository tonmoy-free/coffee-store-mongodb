// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSUH1d_vRYALmtdfhQO7C0vKhqTw-X1mk",
    authDomain: "coffee-store-app-7378c.firebaseapp.com",
    projectId: "coffee-store-app-7378c",
    storageBucket: "coffee-store-app-7378c.firebasestorage.app",
    messagingSenderId: "788772148938",
    appId: "1:788772148938:web:ea3eb205114d9d1368c633"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);