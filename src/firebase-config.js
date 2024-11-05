// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAOGr5iybZ4sPuIz1cXez7hGWFo65PbP7s",
    authDomain: "launchr-cf246.firebaseapp.com",
    projectId: "launchr-cf246",
    storageBucket: "launchr-cf246.appspot.com",
    messagingSenderId: "554704505721",
    appId: "1:554704505721:web:0a033e158ec83743297da8",
    measurementId: "G-YBHV582RE9"
};

// Initialize Firebase and export services
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);