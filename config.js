import firebase from 'firebase';
require('@firebase/firestore')


  // Your web app's Firebase configuration
   const firebaseConfig = {
  apiKey: "AIzaSyCkVdmGJH3j7rrYU5lYDCfiieZgUGOKu4o",
  authDomain: "book-santa-dc8dd.firebaseapp.com",
  projectId: "book-santa-dc8dd",
  storageBucket: "book-santa-dc8dd.appspot.com",
  messagingSenderId: "625077967650",
  appId: "1:625077967650:web:e1fa8a460789152f29a37b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
