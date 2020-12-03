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

const Firebase = {

    getCurrentUser: () => {
        return firebase.auth().currentUser
    },

    createUser: async (user) => {
        try{
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
            const uid = Firebase.getCurrentUser().uid;

            let profilePhotoUrl = "default"

            await db.collection("users").doc(uid).set({
                username: user.username,
                email: user.email,
                profilePhotoUrl
            })

            if (user.profilePhoto) {
                profilePhotoUrl = await Firebase.uploadProfilePhoto(user.profilePhoto);
            }

            delete user.password

            return  {...user, profilePhotoUrl, uid};

        } catch(error) {
            console.log("error @createuser: ", error.message)
        }
    },

    uploadProfilePhoto: async (uri) => {
        const uid =  Firebase.getCurrentUser().uid;

        try{
            const photo = await Firebase.getBlob(uri)

            const imageRef = firebase.storage().ref("profilePhotos").child(uid)
            await imageRef.put(photo)

            const url = await imageRef.getDownloadURL()

            await db.collection("users").doc(uid).update({
                profilePhotoUrl: url
            })

            return url;

        } catch (error) {
            console.log("Error @uploadProfilePhoto", error)
        }
    },

    getBlob: async (uri) => {
        return await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.onload = () => {
                resolve(xhr.response)
            }

            xhr.onerror = () => {
                reject(new TypeError("Network Request failed"))
            }

            xhr.responseType = "blob"
            xhr.open("GET",uri, true)
            xhr.send(null);
        })
    }
}

const FirebaseProvider = (props) => {
return <FirebaseContext.Provider value={Firebase}>{props.children}</FirebaseContext.Provider>
}

export {FirebaseContext, FirebaseProvider}