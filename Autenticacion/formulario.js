import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBNBlZ_rsu_TpA_mAGAOGO8ctFA00K1IdM",
  authDomain: "hosting-dominio.firebaseapp.com",
  projectId: "hosting-dominio",
  storageBucket: "hosting-dominio.appspot.com",
  messagingSenderId: "199834102944",
  appId: "1:199834102944:web:b0b47fc78ff3dda7192dc5",
  measurementId: "G-XR5LJML9B7"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Obtén la instancia de Firestore



const formulario = document.getElementById("formulario");
const inputfirma = document.getElementById("firma");

formulario.addEventListener("submit", async function (event) {
  event.preventDefault();

  const firma = inputfirma.value;

  try {
    await addDoc(collection(firestore, "Firma"), {
      Usuarios: firma
    });
  } catch (error) {
    console.error("Error al agregar datos", error);
  }
});

