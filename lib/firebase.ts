import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAqko4D5LByx_KWSDVV6p3nZEl6YE-PXa0",
  authDomain: "nextfire-blog-e5373.firebaseapp.com",
  projectId: "nextfire-blog-e5373",
  storageBucket: "nextfire-blog-e5373.appspot.com",
  messagingSenderId: "15423076602",
  appId: "1:15423076602:web:462f6dcdfcda1add263143",
  measurementId: "G-J6H17SGHEF"
};

// Initialize Firebase
if (!firebase.getApps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();