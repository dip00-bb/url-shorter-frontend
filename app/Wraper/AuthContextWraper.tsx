

import React, { ReactNode } from 'react';
import AuthProvider from '../Components/Context/AuthProvider';

const AuthContextWraper = ({children}:{children:ReactNode}) => {
    return <AuthProvider>{children}</AuthProvider>
};

export default AuthContextWraper;