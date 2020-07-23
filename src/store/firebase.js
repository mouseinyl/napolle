import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// dependencias


// /configuracion
const firebaseConfig = {
    apiKey: "AIzaSyCIV6osXOxS2vHhOib98y5xDbIl7Lle0bs",
    authDomain: "napolle-3719b.firebaseapp.com",
    databaseURL: "https://napolle-3719b.firebaseio.com",
    projectId: "napolle-3719b",
    storageBucket: "napolle-3719b.appspot.com",
    messagingSenderId: "158369612288",
    appId: "1:158369612288:web:2ec41744659eb4552f0ee5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// utilidades
const auth = firebase.auth();
const db = firebase.database();

// referencias database
const items = db.ref("items/items")


// export
export {
    db,
    auth,
    items
}