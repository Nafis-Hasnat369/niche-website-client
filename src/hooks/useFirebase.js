import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, getIdToken, signOut } from "firebase/auth";
import initializeFirebase from "../components/Login/Firebase/firebase.init";


initializeFirebase();
const useFirebase = _ => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();

    // Register

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(_ => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, "POST")
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(_ => { }).catch(error => { });
                history.replace('/');
            })
            .catch(error => setAuthError(error.message))
            .finally(_ => setIsLoading(false));
    };

    // Login

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(_ => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch(error => setAuthError(error.message))
            .finally(_ => setIsLoading(false));
    };

    // Google sign in

    const googleSignIn = (location, history) => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                saveUser(user.email, user.displayName, "PUT");
                setAuthError('');
                const destination = location.state?.from || '/';
                history.replace(destination);
            })
            .catch(error => setAuthError(error.message))
            .finally(_ => setIsLoading(false));
    }

    // Observe users

    useEffect(_ => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return _ => unsubscribed;
    }, [auth]);

    // Logout

    const logout = _ => {
        setIsLoading(true)
        signOut(auth)
            .then(setUser({}))
            .catch(error => error.message)
            .finally(_ => setIsLoading(false));
    }

    useEffect(_ => {
        fetch(`https://thawing-stream-21692.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email]);

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch(`https://thawing-stream-21692.herokuapp.com/users`, {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        googleSignIn,
        logout
    }
}

export default useFirebase;