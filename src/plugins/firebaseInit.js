import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebase'
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const $auth = firebaseApp.auth()
export default firebaseApp.firestore()
