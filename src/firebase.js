import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDGk-jmjHe18arOS9pCO7WuqzAnOkTDgSI",
  authDomain: "netflix-clone-12b2a.firebaseapp.com",
  projectId: "netflix-clone-12b2a",
  storageBucket: "netflix-clone-12b2a.appspot.com",
  messagingSenderId: "29757885208",
  appId: "1:29757885208:web:d07ba4f0fda4824edeec6d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db;