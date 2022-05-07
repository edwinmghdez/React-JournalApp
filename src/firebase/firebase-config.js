import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDaB5C0lPotFpT4v3cI1khFzFOziT1hk1A",
    authDomain: "react-app-cursos-ac27d.firebaseapp.com",
    projectId: "react-app-cursos-ac27d",
    storageBucket: "react-app-cursos-ac27d.appspot.com",
    messagingSenderId: "571309605547",
    appId: "1:571309605547:web:40cfb44cc482afdda56dee"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}