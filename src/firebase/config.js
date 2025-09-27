import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDoL4rASYHsoO3tTx2pqek2TKi71wodYfc",
  authDomain: "kiosco-quiroga.firebaseapp.com",
  projectId: "kiosco-quiroga",
  storageBucket: "kiosco-quiroga.appspot.com", // <-- corregí ".app" por ".appspot.com"
  messagingSenderId: "700032849827",
  appId: "1:700032849827:web:c6e0cda55f0b1fb2c9ac16"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la instancia de Firestore
export const db = getFirestore(app);