// plugins/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBQ4Yg0hbaN9eA6XjlfHhRGqhU9vcB-6Vw",
    authDomain: "projeto-web-indigena.firebaseapp.com",
    projectId: "projeto-web-indigena",
    storageBucket: "projeto-web-indigena.appspot.com",
    messagingSenderId: "711067820686",
    appId: "1:711067820686:web:f9f397a7deb76fed78dfdf",
    measurementId: "G-VWEJ1EMZ9C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };