// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvRdo0SRXitFQZUHMHcpC_erQ0SpnnTkU",
  authDomain: "brightstream-e1342.firebaseapp.com",
  projectId: "brightstream-e1342",
  storageBucket: "brightstream-e1342.appspot.com",
  messagingSenderId: "790990627737",
  appId: "1:790990627737:web:9234ec21f5e07c1ea8e908",
  measurementId: "G-YNVY887HHX"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth , provider};
export default db;