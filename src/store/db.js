import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
    .initializeApp({
        databaseURL: 'https://napolle-3719b.firebaseio.com'
    })
    .database()