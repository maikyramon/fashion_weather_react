import firebase from "firebase";
require('firebase/firestore');

const config = {
    apiKey: "AIzaSyD3Fewm6BOVKsw99_8iJvcANheK8Pv4XK4",
    authDomain: "fashionweather-d15e6.firebaseapp.com",
    databaseURL: "https://fashionweather-d15e6.firebaseio.com",
    projectId: "fashionweather-d15e6",
    storageBucket: "fashionweather-d15e6.appspot.com",
    messagingSenderId: "574277133683"
};

firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };

firestore.settings(settings);

export const db = firestore;