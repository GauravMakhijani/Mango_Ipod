import firebase from "firebase/app";
import "firebase/firebase-firestore";
import config from "./config";

firebase.initializeApp(config);

export default firebase;
