import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAnRYz3Ji1o_h56NfoEDo74RM2eLZTkQNA",
    authDomain: "chat-b24d0.firebaseapp.com",
    databaseURL: "https://chat-b24d0.firebaseio.com",
    projectId: "chat-b24d0",
    storageBucket: "chat-b24d0.appspot.com",
    messagingSenderId: "643850044319",
    appId: "1:643850044319:web:2c1f49497a566ee76073aa"
    };
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    export const firebaseAuth = firebaseApp.auth();