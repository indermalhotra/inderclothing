import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";

// STEP 1 import these
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// STEP 2 This is we get from firebase by creating project
const firebaseConfig = {
  apiKey: "AIzaSyAde4GqqOvXLCnS11Fd2TPIDTeECToYMhI",
  authDomain: "inder-clothing-db.firebaseapp.com",
  projectId: "inder-clothing-db",
  storageBucket: "inder-clothing-db.appspot.com",
  messagingSenderId: "603741140852",
  appId: "1:603741140852:web:6cf7b3e3438cee6a755e21",
};

// STEP 3 
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

// STEP 4
export const auth = getAuth();

export const signinWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// STEP 5 Create a function to create document

// USING THIS IN SIGNIN FORM
export const createUserDocumentFromAuth = async (userAuth, dName) => {
  if(!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid); // doc take 3 argument database, collection and uniqe identifier
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists()); //Returns whether or not the data exists. True if the document exists.

  if (!userSnapshot.exists()) {
    const displayName = userAuth.displayName || dName; // dispplayName and email we are getting when we are login from google.
    const email = userAuth.email;
    const createDate = new Date();

    // setting doc by setDoc it take two argument docrefrence and data
    try {
      setDoc(userDocRef,{
        displayName, email, createDate
      });
    } catch (error) {}
  }

  return userDocRef
};


// USING IN SIGNUP FORM THIS FUNCTION TO AUTHENTICATE USER
export const createAuthUserWithEmailAndPassword = async (email, password) => {

  if(!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);

}
