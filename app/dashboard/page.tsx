import React from 'react';
import DashboardTable from '../Components/Dashboard/DashboardTable';
import DashboardCard from '../Components/Dashboard/DashboardCard';
import UrlInput from '../Components/Hero/UrlInput';
import HeroTitle from '../Components/Hero/HeroTitle';
import Profile from '../Components/Dashboard/Profile';

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full h-screen">

            {/* MAIN CONTENT */}
            <div className="lg:col-span-9">
                <div className="flex flex-col gap-8">

                    {/* Generate Link Section */}
                    <div className="flex flex-col items-center gap-4">
                        <HeroTitle textSize="text-3xl md:text-4xl lg:text-5xl">
                            Generate A Link
                        </HeroTitle>

                        <UrlInput />
                    </div>

                    {/* Table */}
                    <DashboardTable />
                </div>
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-3 bg-red-700">
                <div className="flex flex-col gap-6">

                    <Profile />

                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                        <DashboardCard count="5">Total Link</DashboardCard>
                        <DashboardCard count="5">Active Link</DashboardCard>
                        <DashboardCard count="5">Total Click</DashboardCard>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default Dashboard;