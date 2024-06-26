import {initializeApp} from 'firebase/app';
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAY4FwQmrghbjZmPZ7NvypCp_rOz2_cbHY',
  authDomain: 'crown-clothing-83856.firebaseapp.com',
  projectId: 'crown-clothing-83856',
  storageBucket: 'crown-clothing-83856.appspot.com',
  messagingSenderId: '1065752172677',
  appId: '1:1065752172677:web:47042dc9bc9ea7da7b31ec',
  measurementId: 'G-JR2DGY20M1',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider(firebaseApp);

googleProvider.setCustomParameters({
  promt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInwithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => {

  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef); 

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(! userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    }catch(error) {
      console.log('error creating the user', error.message);
    }

  }

  return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const  signOutUser = async(user) => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);