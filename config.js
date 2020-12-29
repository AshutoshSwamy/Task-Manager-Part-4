 import firebase from 'firebase';
 require('@firebase/firestore')

 var firebaseConfig = {
  apiKey: "AIzaSyBhRt5CoDI0CsEpIlaQWL23fXAP12kebvQ",
  authDomain: "task-manager-app-89a09.firebaseapp.com",
  projectId: "task-manager-app-89a09",
  storageBucket: "task-manager-app-89a09.appspot.com",
  messagingSenderId: "370418071047",
  appId: "1:370418071047:web:516b8e370f09d0961c9ca2"
 };

 firebase.initializeApp(firebaseConfig);

 export default firebase.firestore()