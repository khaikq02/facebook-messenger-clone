import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDEVZoHoteXlDvzJwHBztM8d5XhkUzc0G8",
  authDomain: "facebook-messenger-clone-444f9.firebaseapp.com",
  projectId: "facebook-messenger-clone-444f9",
  storageBucket: "facebook-messenger-clone-444f9.appspot.com",
  messagingSenderId: "98051959802",
  appId: "1:98051959802:web:cb8a70ea148ff5d8ae1243",
  measurementId: "G-HYRJ529D0D",
});

const db = firebaseApp.firestore();

export default db;
