import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFaE7QCdG470xkoRRxPAl96ETGQWxDvxY",
  authDomain: "rick-and-morty-77c00.firebaseapp.com",
  projectId: "rick-and-morty-77c00",
  storageBucket: "rick-and-morty-77c00.appspot.com",
  messagingSenderId: "126882705940",
  appId: "1:126882705940:web:b16f2a156fff55ab4e6d01",
  measurementId: "G-X780427PGE",
};

export const app = initializeApp(firebaseConfig);
