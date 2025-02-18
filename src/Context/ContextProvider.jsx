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
    //     queryFn: axios.get(`https://blood-donation-server-hazel-gamma.vercel.app/user?email=${user?.email}`)
    //         .then(data => setDuser(data.data))
    // })


    useEffect(() => {
        axios.get(`https://blood-donation-server-hazel-gamma.vercel.app/user?email=${user?.email}`)

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
    console.log(loading)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axios.post('https://blood-donation-server-hazel-gamma.vercel.app/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem("access-token", res.data.token)
                        }
                    })
            }
            else {
                //do
                localStorage.removeItem("access-token")
            }
            console.log(currentUser)
            setLoading(false);
        })
        return () => unsubscribe()
    }, [])


    const authInfo = { setLoading, loading, user, duser, googleCreateUser, createUser, loginUser, logout, updateProfileuser, setUser }
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