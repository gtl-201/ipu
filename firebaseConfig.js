// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// import * as firebase2 from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBxe3OQUJVs97R48T-EynEphcGry8a3b0g',
  authDomain: 'ipufirebase.firebaseapp.com',
  projectId: 'ipufirebase',
  storageBucket: 'ipufirebase.appspot.com',
  messagingSenderId: '677075996736',
  appId: '1:677075996736:web:764d1fe2c5286d84980fa5',
  measurementId: 'G-9XKBK508CX',
};

// Initialize Firebase
// let app;
// if (firebase.app.length === 0) {

// } else {
//   app = firebase.app;
// }
const app = firebase.initializeApp(firebaseConfig);
// const analytics = firebase.getAnalytics(app);

// const auth = firebase.auth();
export {app};
