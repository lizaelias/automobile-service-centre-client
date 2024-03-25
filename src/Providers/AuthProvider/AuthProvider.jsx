import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


 export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] =useState(false);
    const [loading, setLoading] = useState(true);

    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const signIn =(email,password)=>{
        setLoading(true);
         return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn =()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }


    useEffect(()=>{
        const unsbscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false);
            setUser(currentUser);
        })
        return ()=>{
            unsbscribe();
        }

    },[])


    const logOut =()=>{

        return signOut(auth);
    }





    const authInfo ={
        createUser,
        signIn,
        googleSignIn,
        user,
        loading,
        logOut

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