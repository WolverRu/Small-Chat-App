import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBfBelgxd1zjeN4vFb_ttvTqpmRVdDyW-s",
  authDomain: "firechat-2f01e.firebaseapp.com",
  projectId: "firechat-2f01e",
  storageBucket: "firechat-2f01e.appspot.com",
  messagingSenderId: "1031092617652",
  appId: "1:1031092617652:web:574892b6473fdef8bc32e1",
  measurementId: "G-328ZKSFE3N",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
