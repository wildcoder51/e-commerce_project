import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC5VgI9KR0OTx-C5yoT60mXZ1LagVh8XVY",
  authDomain: "eshop-db-a49a7.firebaseapp.com",
  databaseURL: "https://eshop-db-a49a7.firebaseio.com",
  projectId: "eshop-db-a49a7",
  storageBucket: "eshop-db-a49a7.appspot.com",
  messagingSenderId: "874535062035",
  appId: "1:874535062035:web:ad5cc1b079a0201d88cde6",
  measurementId: "G-GZNZ3J3KYC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;