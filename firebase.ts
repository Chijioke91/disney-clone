import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDerQtNqP412EhMwOuS9WNA9X133WZY8Jg',
  authDomain: 'disney-clone-d16ad.firebaseapp.com',
  projectId: 'disney-clone-d16ad',
  storageBucket: 'disney-clone-d16ad.appspot.com',
  messagingSenderId: '96409300536',
  appId: '1:96409300536:web:7279f5eb85c0877bd9c0cd',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app(); // because we are server rendering

const db = app.firestore();

export { db };
