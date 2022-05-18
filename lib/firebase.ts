import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDLKqnhT9yKNFObQpvzndwIih1KZOAvyZA",
  authDomain: "nextfire-898ce.firebaseapp.com",
  projectId: "nextfire-898ce",
  storageBucket: "nextfire-898ce.appspot.com",
  messagingSenderId: "724492164750",
  appId: "1:724492164750:web:1157c80b69fc57084033df"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();