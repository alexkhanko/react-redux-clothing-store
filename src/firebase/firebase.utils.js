import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAefGV5_uJ_n-lw8KbUgPGzkujsJNpWomg",
  authDomain: "store-db-1418a.firebaseapp.com",
  databaseURL: "https://store-db-1418a.firebaseio.com",
  projectId: "store-db-1418a",
  storageBucket: "store-db-1418a.appspot.com",
  messagingSenderId: "67445650718",
  appId: "1:67445650718:web:6797c0f301a7f26e51c50f",
  measurementId: "G-L4MXRR5MLB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
