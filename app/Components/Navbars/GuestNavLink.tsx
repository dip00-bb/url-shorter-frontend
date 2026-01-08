"use client"

import AuthButton from "./AuthButton";


interface NavLinks {
    mobile?: boolean;
    onClick?: () => void
}

const GuestNavLinks = ({ mobile = false }: NavLinks) => {
    const links = ['Login', 'Register'];

    return (
        <div className={mobile ? 'flex flex-col space-y-4' : 'hidden md:flex items-center space-x-8'}>
            {links.map((link) => (
                <AuthButton key={link} href={`${link.toLowerCase()}`} >{link}</AuthButton>
            ))}
        </div>
    );
};

export default GuestNavLinks