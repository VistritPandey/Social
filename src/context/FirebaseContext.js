import React, {useState, useContext, createContext} from 'react'
import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"
import config from '../config/firebase'

const FirebaseContext = createContext()

if (!firebase.apps.length){
    firebase.initializeApp(config);
}

const db = firebase.firestore()

const Firebase = {}

const FirebaseProvider = (props) => {
return <FirebaseContext.Provider value={Firebase}>{props.children}</FirebaseContext.Provider>
}

export {FirebaseContext, FirebaseProvider}