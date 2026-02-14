// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyASk0tl-04yVJP7zpNSBlkdzXXtaFqywf4",
    authDomain: "test-one-9b37e.firebaseapp.com",
    projectId: "test-one-9b37e",
    storageBucket: "test-one-9b37e.firebasestorage.app",
    messagingSenderId: "89907631238",
    appId: "1:89907631238:web:02c53f35802668b3d16d07",
    measurementId: "G-JCZ8QPYY4Z"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };