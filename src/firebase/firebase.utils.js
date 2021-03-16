import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA4jq1_e0X7dE-YvWfnItadlUWFDhagURg",
  authDomain: "l337-crwn-clothing.firebaseapp.com",
  projectId: "l337-crwn-clothing",
  storageBucket: "l337-crwn-clothing.appspot.com",
  messagingSenderId: "787137901038",
  appId: "1:787137901038:web:a5a227e05b4f154dc3deff",
  measurementId: "G-QD1HZXC58J",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;