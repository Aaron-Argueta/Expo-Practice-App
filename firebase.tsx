// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtgmex3vUy__sOu1a6cSjZzJd6ZYlCC7Q",
  authDomain: "expoappauth-46d99.firebaseapp.com",
  projectId: "expoappauth-46d99",
  storageBucket: "expoappauth-46d99.appspot.com",
  messagingSenderId: "614763188781",
  appId: "1:614763188781:web:de95db42ed37bdf46fdea4",
  measurementId: "G-QRC6KTZPT3"
};

// Initialize Firebase
let app;
if (getApps().length == 0) {
  app = initializeApp(firebaseConfig);
}
else {
  app = getApp();
}

const auth = getAuth(app);
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };