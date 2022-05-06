import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// here i want to import the seed filter:
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAbu6m-xdvdlxf_VEy8WDt6F4tpOyXi9lk",
  authDomain: "instagram-1a2f8.firebaseapp.com",
  projectId: "instagram-1a2f8",
  storageBucket: "instagram-1a2f8.appspot.com",
  messagingSenderId: "1033285280393",
  appId: "1:1033285280393:web:0100aade217cc570285c58",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE)
// seedDatabase(firebase);

// console.log("firebase", firebase);
export { firebase, FieldValue };
