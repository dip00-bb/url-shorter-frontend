"use client"
import React, { ReactNode, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { useRouter } from 'next/navigation';
import { axiosInstence } from '../Axios/axiosInstance';


const AuthProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter()
    const [user, setUser] = useState<null | object>(null)
    const [isLoading, setIsLoading] = useState(true)

    const login = (user: object) => {
        setUser(user)
        setIsLoading(false)
    }

    const logout = () => {
        setUser(null)
    }

    useEffect(() => {

        const verifyUser = async () => {
            try {
                const response = await axiosInstence.post('/api/auth/refresh-token')
                if (response?.data?.user) {
                    setUser(response?.data?.user)
                    setIsLoading(false)
                } else {
                    setIsLoading(false)
                    router.push('/login')
                }
            } catch (error) {
                setIsLoading(false)
                router.push('/login')
            }
        }

        verifyUser()
    }, [router]);


    const authInfo = {
        user,
        login,
        logout,
        isLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;