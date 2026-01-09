"use client"

import { createContext } from "react"

export interface AuthContextType {
    user: object | null;
    login: (user: object) => void;
    logout: () => void;
    isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null)