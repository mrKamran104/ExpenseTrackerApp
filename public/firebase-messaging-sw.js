importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js')

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyA_JsIP96Lm-FQkgdRAnY3kinWfeudJYLc",
    authDomain: "expensetrackerpwabymrk.firebaseapp.com",
    projectId: "expensetrackerpwabymrk",
    storageBucket: "expensetrackerpwabymrk.appspot.com",
    messagingSenderId: "509199810532",
    appId: "1:509199810532:web:7f9b5d257e156eeeb291f1",
    measurementId: "G-SH05DD125N"
});

// Retrieve Firebase Messaging object.
firebase.messaging();