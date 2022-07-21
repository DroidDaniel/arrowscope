import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBUnvFUbGOPnld055DG2ZNHkyrnkZa6KeA",
  authDomain: "my-articles-a2325.firebaseapp.com",
  projectId: "my-articles-a2325",
  storageBucket: "my-articles-a2325.appspot.com",
  messagingSenderId: "646020152871",
  appId: "1:646020152871:web:cf92b913d02c9a88585802"
};


const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const dp = getFirestore(app);

 