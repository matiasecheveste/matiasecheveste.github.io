import firebase from 'firebase/app';
import 'firebase/auth';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAVvregHODtHtzrWrNt5uY7jrYltOVY88U",
  authDomain: "educadonar.firebaseapp.com",
  projectId: "educadonar",
  storageBucket: "educadonar.appspot.com",
  messagingSenderId: "970244753588",
  appId: "1:970244753588:web:c7ea9fbdc045a63a89afe1",
  measurementId: "G-X1ZZKDGRFE"
};

// Inicializa Firebase con la configuración
firebase.initializeApp(firebaseConfig);