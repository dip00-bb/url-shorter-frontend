import React from 'react';
import DashboardTable from '../Components/Dashboard/DashboardTable';
import UrlInput from '../Components/Hero/UrlInput';
import HeroTitle from '../Components/Hero/HeroTitle';
import Profile from '../Components/Dashboard/Profile';


const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 py-10 bg-(--background-color) w-full h-[80%]">

            {/* MAIN CONTENT */}
            <div className="lg:col-span-9">
                <div className="flex flex-col gap-8 ">

                    {/* Generate Link Section */}
                    <div className="flex flex-col items-center gap-4 border border-(--surface-border) h-[25vh] py-5 px-4">
                        <HeroTitle textSize="text-3xl md:text-4xl lg:text-5xl">
                            Generate A Link
                        </HeroTitle>

                        <UrlInput />
                    </div>


                    <DashboardTable />
                </div>
            </div>


            <div className="lg:col-span-3 py-3 px-4 border border-(--surface-border) ">
                <div className="flex flex-col justify-between h-full gap-y-10">

                    <Profile />


                </div>
            </div>

        </div>

    );
};

export default Dashboard;