import firebase from "firebase";

const firebaseConfig = {
  apiKey: `${process.env.APP_API_KEY}`,
  authDomain: "clone-2ff04.firebaseapp.com",
  projectId: "clone-2ff04",
  storageBucket: "clone-2ff04.appspot.com",
  messagingSenderId: "207897011015",
  appId: "1:207897011015:web:979dcd8ea2af37fb1be262",
  measurementId: "G-1LGHY7TQ0D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
