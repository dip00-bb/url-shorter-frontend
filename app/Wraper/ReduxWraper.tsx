"use client"

import { store } from '@/lib/store';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

interface ReduxInterface{
    children:ReactNode
}

const ReduxWraper = ({children}:ReduxInterface) => {
    return <Provider store={store}>{children}</Provider>
};

export default ReduxWraper;