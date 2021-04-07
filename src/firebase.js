import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAS8UvwjqaxL6VE4xJ4D-tq4yAn3_Zryf8",
    authDomain: "chat-udemy-cadfc.firebaseapp.com",
    databaseURL: "https://chat-udemy-cadfc.firebaseio.com",
    projectId: "chat-udemy-cadfc",
    storageBucket: "chat-udemy-cadfc.appspot.com",
    messagingSenderId: "343081582461",
    appId: "1:343081582461:web:29cd35f2f0d5b443a25614"
  };

  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db , auth, provider}