import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA_JsIP96Lm-FQkgdRAnY3kinWfeudJYLc",
    authDomain: "expensetrackerpwabymrk.firebaseapp.com",
    projectId: "expensetrackerpwabymrk",
    storageBucket: "expensetrackerpwabymrk.appspot.com",
    messagingSenderId: "509199810532",
    appId: "1:509199810532:web:7f9b5d257e156eeeb291f1",
    measurementId: "G-SH05DD125N"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging()

export const configNotification = () => {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            getToken();
        } else {
            console.log('Unable to get permission to notify.');
        }
    });
}

const getToken = () => {
    messaging.getToken().then((currentToken) => {
        if (currentToken) {
            console.log('token', currentToken)
        } else {
            console.log('No registration token available. Request permission to generate one.');
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
}