"use client"

import Link from "next/link";
import AuthButton from "./AuthButton";
import { useHandleLogOutMutation } from "@/lib/features/api/apiSlice";
import { use, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AuthContext } from "../Context/AuthContext";


interface NavLinks {
    mobile?: boolean;
    onClick?: () => void
}


const NavLinks = ({ mobile = false, onClick }: NavLinks) => {


    const links = ['Home', 'Dashboard', 'CreateURL'];

    const router = useRouter()
    const [handleLogOut, { isError, isSuccess }] = useHandleLogOutMutation()

    useEffect(() => {
        if (isSuccess) {
            toast.success("Logout Successfull", { id: "logout" });
            router.push('/login')

        }
        if (isError) {
            toast.error("Something went wrong. Please try again.", { id: "logout" });
        }
    }, [isError, isSuccess, router])
    const handleUserLogOut = async () => {
        await handleLogOut().unwrap()
    }
    return (
        <div className={mobile ? 'flex flex-col space-y-4' : 'hidden md:flex items-center space-x-8'}>
            {links.map((link) => (
                <div key={link}>
                    <Link
                        key={link}
                        href={`${link === "Home" ? '/' : `${link.toLowerCase()}`}`}
                        onClick={onClick}
                        className="text-white hover:opacity-80 transition-opacity duration-200"
                    >
                        {link}
                    </Link>
                </div>
            ))}

            <AuthButton onClick={handleUserLogOut} customColor="red">Logout</AuthButton>
        </div>
    );
};

export default NavLinks