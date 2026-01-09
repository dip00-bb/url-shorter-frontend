"use client"
import React, { ReactNode, useEffect, useState } from 'react';
import { AuthContext, User } from './AuthContext';
import { axiosInstence } from '../Axios/axiosInstance';


const AuthProvider = ({ children }: { children: ReactNode }) => {
    // const router = useRouter()
    const [user, setUser] = useState<null | User>(null)
    const [isLoading, setIsLoading] = useState(true)
    
    const login = (userData: User) => {
        setUser(userData)
        setIsLoading(false)
    }

    const logout = () => {
        setUser(null)
    }

    useEffect(() => {

        const verifyUser = async () => {
            try {
                const response = await axiosInstence.post('/api/auth/refresh-token');
                if (response?.data?.user) {
                    setUser(response.data.user);
                }
            } catch (error:any) {
                if (error.response?.status !== 401) {
                    console.error("Refresh token error:", error);
                }
            } finally {
                setIsLoading(false);
            }
        };

        verifyUser();
    }, []);


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