"use client"

import Link from "next/link";
import AuthButton from "./AuthButton";


interface NavLinks {
    mobile?: boolean;
    onClick?: () => void
}

const NavLinks = ({ mobile = false, onClick }: NavLinks) => {
    const links = ['Home', 'Dashboard', 'CreateURL'];

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

            <AuthButton customColor="red">Logout</AuthButton>
        </div>
    );
};

export default NavLinks