import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCo6qFfh41jRHEJNsachB0IhuZV7wrruyE",
  authDomain: "fanproject-45c24.firebaseapp.com",
  databaseURL: "https://fanproject-45c24-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fanproject-45c24",
  storageBucket: "fanproject-45c24.appspot.com",
  messagingSenderId: "444208716977",
  appId: "1:444208716977:web:4780d1215b5e5579d6d690",
  measurementId: "G-H2Y0H0DFXG"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}


/* 

const firebaseConfig = {
  apiKey : process.env.REACT_APP_API_KEY,
  databaseURL : process.env.REACT_APP_DATABASE_URL,
  authDomain : process.env.REACT_APP_AUTH_DOMAIN,
  projectId : process.env.REACT_APP_PROJECT_ID,
  storageBucket : process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId : process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId : process.env.REACT_APP_APP_ID,
  measurementId : process.env.REACT_APP_MEASUREMENT_ID,
}; */
/* apiKey: "AIzaSyCo6qFfh41jRHEJNsachB0IhuZV7wrruyE",
  authDomain: "fanproject-45c24.firebaseapp.com",
  databaseURL: "https://fanproject-45c24-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fanproject-45c24",
  storageBucket: "fanproject-45c24.appspot.com",
  messagingSenderId: "444208716977",
  appId: "1:444208716977:web:4780d1215b5e5579d6d690",
  measurementId: "G-H2Y0H0DFXG" */