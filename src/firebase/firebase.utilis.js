import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCOGdmmuWm1GU4GazEe5bWLzJgMj779B1U",
    authDomain: "crown-db-82fd1.firebaseapp.com",
    projectId: "crown-db-82fd1",
    storageBucket: "crown-db-82fd1.appspot.com",
    messagingSenderId: "830853734512",
    appId: "1:830853734512:web:505dd76c34256d36d314b5",
    measurementId: "G-N24XM8L0PH"
}

const app = firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore =firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;