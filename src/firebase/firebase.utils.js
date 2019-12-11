import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBfbntKhSV3DZeho_rSraZ0fFW0ENSJaDg",
    authDomain: "e-commerce-fd417.firebaseapp.com",
    databaseURL: "https://e-commerce-fd417.firebaseio.com",
    projectId: "e-commerce-fd417",
    storageBucket: "e-commerce-fd417.appspot.com",
    messagingSenderId: "490957389623",
    appId: "1:490957389623:web:89d29fac1efb5228d7e4b2",
    measurementId: "G-QF4H40NVGL"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore  = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt:'select_account'
  });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;