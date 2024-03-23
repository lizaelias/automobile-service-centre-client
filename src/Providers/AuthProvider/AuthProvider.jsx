import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


 export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] =useState(false);

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,password)=>{
         return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn =()=>{
        return signInWithPopup(auth,provider);
    }


    useEffect(()=>{
        const unsbscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return ()=>{
            unsbscribe();
        }

    },[])





    const authInfo ={
        createUser,
        signIn,
        googleSignIn,
        user

    }


    return (
        <AuthContext.Provider value={authInfo}>
        
        {
            children
        }
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;