import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBTM52pdHF8FXVI07aUWJsgXxhXDwuTS3k",
  authDomain: "crwn-db-3d24b.firebaseapp.com",
  projectId: "crwn-db-3d24b",
  storageBucket: "crwn-db-3d24b.appspot.com",
  messagingSenderId: "506011488422",
  appId: "1:506011488422:web:88555ba3e7e8c60b4ce467",
  measurementId: "G-PYYH01XNG0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
