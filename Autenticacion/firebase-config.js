import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAjkbOwryBAG4iX7ErfXlswZckCayOtsnU",
    authDomain: "autenticacion-14a34.firebaseapp.com",
    projectId: "autenticacion-14a34",
    storageBucket: "autenticacion-14a34.appspot.com",
    messagingSenderId: "26723791520",
    appId: "1:26723791520:web:d1680fd66ec92cd2708fc5",
    measurementId: "G-5Q7YMNFKTZ"
  };
  // Inicializar Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  