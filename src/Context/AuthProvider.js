import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../Firebase/firebase.config'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    //User Registration using Email and Password
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //User Login
    const userLogin= (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //User Info
    const userInfo = {userRegister, userLogin}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;