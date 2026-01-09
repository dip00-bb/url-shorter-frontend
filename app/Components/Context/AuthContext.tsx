"use client"

import { createContext } from "react"
export interface User {
    id: string;
    email: string;
    username: string;
}
export interface AuthContextType {
    user: User| null;
    login: (user: User) => void;
    logout: () => void;
    isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null >(null)