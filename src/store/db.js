import firebase from 'firebase/app'
import 'firebase/database'

export default firebase
    .initializeApp({
        databaseURL: 'https://napolle-3719b.firebaseio.com'
    })
    .database().ref("items/items")