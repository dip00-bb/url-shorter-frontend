

import  { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const useAuthContext = () => {
    const authContext = use(AuthContext);

    if (!authContext) {
        throw new Error("RegisterForm must be used within AuthProvider");
    }

    
    return authContext
};

export default useAuthContext;