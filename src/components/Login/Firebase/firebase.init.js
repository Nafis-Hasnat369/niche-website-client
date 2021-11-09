import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebase = _ => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;