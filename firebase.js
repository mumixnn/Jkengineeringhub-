
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXwYOVZeYpxs7jRmWuD2wAKydkID0pv_w",
  authDomain: "jk-engineering-hub.firebaseapp.com",
  projectId: "jk-engineering-hub",
  storageBucket: "jk-engineering-hub.firebasestorage.app",
  messagingSenderId: "346259893582",
  appId: "1:346259893582:web:65a88620fba20d8c11821f",
  measurementId: "G-5NZDHGBSZF"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
