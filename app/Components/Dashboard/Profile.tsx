"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';
import useAuthContext from '../Hook/useAuthContext';

const Profile = () => {

    const {user}=useAuthContext()

    return (
        <div className='space-y-6 '>
            <div className='flex items-center justify-center'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>

            <h1 className=' text-xl md:text-2xl lg:text-3xl text-center text-(--primary)'>{user?.username}</h1>
        </div>
    );
};

export default Profile;