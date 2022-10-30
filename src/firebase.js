import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Put your firebase config here:
const firebaseConfig = {
    apiKey: 'AIzaSyC58l-UT9hZeUaTtN_DPsnsIj0RWXivqYw',
    authDomain: 'discord-clone-1f5b4.firebaseapp.com',
    projectId: 'discord-clone-1f5b4',
    storageBucket: 'discord-clone-1f5b4.appspot.com',
    messagingSenderId: '89064030307',
    appId: '1:89064030307:web:cd5fdd76b7259539b9b856',
    measurementId: 'G-E4ZKCEP5QR',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
