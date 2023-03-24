import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: 'AIzaSyDWQVBwRk8YswxJIWmeoJQEbr8A8_tBLq8',
    authDomain: 'my-subscriptions-fb0e0.firebaseapp.com',
    projectId: 'my-subscriptions-fb0e0',
    storageBucket: 'my-subscriptions-fb0e0.appspot.com',
    messagingSenderId: '367965594819',
    appId: '1:367965594819:web:295cb26c7b4a72a5d42e76'
}

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
