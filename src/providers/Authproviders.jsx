import{ createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const Authproviders = ({ children }) => {

    const [user, setUser] =useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email, password) =>{
       setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser =(email ,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle =() =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut (auth)
    }
    

    useEffect(()=>{
      const unShscribe =  onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log("observing current user insider useEffect of authprovider",currentUser);

        })
        return () =>{
            unShscribe();
        }
    })

    const authInfo ={
        user, 
        loading,
        createUser,
        signInUser,
        logOut,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authproviders;

Authproviders.propTypes = {
    children: PropTypes.node
}
