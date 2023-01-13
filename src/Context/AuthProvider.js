import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../Firebase/firebase.config'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    //Set a Loading State
    const [loading, setLoading] = useState(true)
    //Get LoggedIn user from authstate
    const [user, setUser] = useState()
    //User Registration using Email and Password
    const userRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //User Login
    const userLogin= (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Get User from auth
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [auth])
    //User Info
    const userInfo = {userRegister, userLogin, loading, user}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;