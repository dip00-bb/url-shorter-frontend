"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';
import useAuthContext from '../Hook/useAuthContext';
import DashboardCard from './DashboardCard';
import Link from 'next/link';
import Button from '../CommonButton/CommonButton';
import { useGetUserUrlQuery } from '@/lib/features/api/apiSlice';

const Profile = () => {

    const { user } = useAuthContext()
    const userId=user?.id
    const {
        data,
    } = useGetUserUrlQuery(userId!, {
        skip: !userId,
    });
    const urls = data?.urls;

    

    return (
        <div className='space-y-6 '>
            <div className='flex items-center justify-center'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>

            <h1 className=' text-xl md:text-2xl lg:text-3xl text-center text-(--primary)'>{user?.username}</h1>


            <div className='space-y-5 lg:space-y-110'>
                <div className="grid grid-cols-1  lg:grid-cols-1 gap-4">
                    <DashboardCard count={urls?.length}>Total Link</DashboardCard>
    
                </div>

                <div>
                    <Link href={'/'}>
                        <Button>Back Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;