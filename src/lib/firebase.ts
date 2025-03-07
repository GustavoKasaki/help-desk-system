// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { setDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCRvcfNTBjpyiGFnlqVaxb9XZJGkavZXnM',
  authDomain: 'gmk-portal-ti.firebaseapp.com',
  projectId: 'gmk-portal-ti',
  storageBucket: 'gmk-portal-ti.firebasestorage.app',
  messagingSenderId: '973187219589',
  appId: '1:973187219589:web:48f8a2fefa68be3e31a9ec',
  measurementId: 'G-E5KY1R3J85'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db, collection, setDoc, getDocs }
