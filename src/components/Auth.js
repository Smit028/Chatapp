import { authUser,provider } from '../firebase_config.js';
import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

const Auth = (props) => {
    const setAuth = { props };
    
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(authUser, provider);
            // Will be using cookie to store data as when user refreshes the page he stays logged in 
            cookie.set("auth-token", result.user.refreshToken);
            setAuth(true)
            // It will enter after signing in withour refreshing
        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <div>
            <p>Sign In with Google to Continue</p>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    )
}

export default Auth