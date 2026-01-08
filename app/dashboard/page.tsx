import React from 'react';
import DashboardTable from '../Components/Dashboard/DashboardTable';
import DashboardCard from '../Components/Dashboard/DashboardCard';
import UrlInput from '../Components/Hero/UrlInput';
import HeroTitle from '../Components/Hero/HeroTitle';
import Profile from '../Components/Dashboard/Profile';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 w-full bg-amber-600 h-screen'>
            <div className='col-span-10'>
                <div>
                    <div>
                        <HeroTitle textSize="text-3xl md:text-4xl lg:text-5xl">Generate A Link</HeroTitle>
                    </div>
                    <div>
                        <UrlInput />
                    </div>
                </div>
                <div>
                    <DashboardTable />
                </div>
            </div>
            <div className='col-span-2'>
                <div>
                    <Profile />
                </div>
                <div>
                    <div>
                        <DashboardCard count='5'>Total Link</DashboardCard>
                    </div>
                    <div>
                        <DashboardCard count='5'>Total Link</DashboardCard>
                    </div>

                    <div>
                        <DashboardCard count='5'>Total Link</DashboardCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;