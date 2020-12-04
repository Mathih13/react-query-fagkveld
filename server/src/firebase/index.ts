import firebase from "firebase"; // Required for side-effects

firebase.initializeApp({
  apiKey: "AIzaSyAYFt9LxfPJAKdZV0M0L_dGuD-EP8pPVWY",
  authDomain: "dfind-fagkveld-react-query.firebaseapp.com",
  projectId: "dfind-fagkveld-react-query",
});

const db = firebase.firestore();

export default db;
