import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Pages/Login/firebase/firebase.init";

initializeAuthentication()


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();


    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))
    }

    const signInUsingGitHub = () => {
        setIsLoading(true)
        const gitHubProvider = new GithubAuthProvider();
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))
    }

    // observe user state change
    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubcribed;
    }, [auth])


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        signInUsingGitHub,
        logOut

    }
}

export default useFirebase;