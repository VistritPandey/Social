import React, {useState, useContext, createContext} from 'react'
import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"

const FirebaseContext = createContext()

if (!firebase.apps.length){
    firebase.initializeApp()
}

const db = firebase.firestore()