import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA6tEGB5TILBR80hFlS8F0jvA97cGDal1k",
  authDomain: "gb-chat8.firebaseapp.com",
  databaseURL:
    "https://gb-chat8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-chat8",
  storageBucket: "gb-chat8.appspot.com",
  messagingSenderId: "761986474352",
  appId: "1:761986474352:web:da1b127da2cfec1ba52fb5",
  measurementId: "G-GC2N6MR9MX",
};

export const firebase = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);
