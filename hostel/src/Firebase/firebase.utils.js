import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyCCa9-x6kzdgbmAaEueRd3h2LBfQmmNmFw",
    authDomain: "hosteler-react.firebaseapp.com",
    databaseURL: "https://hosteler-react.firebaseio.com",
    projectId: "hosteler-react",
    storageBucket: "hosteler-react.appspot.com",
    messagingSenderId: "118695749999",
    appId: "1:118695749999:web:8089c9d7a46e7c06e4e09a",
    measurementId: "G-139C92MSLL"
  }

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user' , error.message)
        }
    }
    return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;