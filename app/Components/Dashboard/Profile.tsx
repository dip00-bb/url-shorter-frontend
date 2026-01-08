import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

const Profile = () => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>

            <h1 className=' text-xl md:text-2xl lg:text-3xl text-center'>DIP CHONDO PARTHO</h1>
        </div>
    );
};

export default Profile;