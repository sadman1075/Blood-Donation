import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../Firebase/Firebase';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [duser, setDuser] = useState('')

    // const { data } = useQuery({
    //     queryKey: ["duser"],
    //     queryFn: axios.get(`http://localhost:5000/user?email=${user?.email}`)
    //         .then(data => setDuser(data.data))
    // })


    useEffect(() => {
        axios.get(`http://localhost:5000/user?email=${user?.email}`)
            .then(data => setDuser(data.data))
    }, [user?.email])


    const provider = new GoogleAuthProvider();

    const googleCreateUser = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateProfileuser = (updateuserProfile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateuserProfile)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => unsubscribe()
    }, [])


    const authInfo = { loading, user, duser, googleCreateUser, createUser, loginUser, logout, updateProfileuser, setUser }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;