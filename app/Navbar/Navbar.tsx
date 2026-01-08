"use client"

import React, { useState } from 'react';
import Logo from '../Components/Navbars/Logo';
import NavLinks from '../Components/Navbars/NavLinks';
import MobileMenu from '../Components/Navbars/MobileMenu';
import MenuButton from '../Components/Navbars/MenuButton';
import GuestNavLinks from '../Components/Navbars/GuestNavLink';






const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [user,setUser]=useState(true)
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ 
          backgroundColor: 'var(--background-color)',
          borderBottom: '1px solid var(--surface-border)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            {user?<NavLinks/> :<GuestNavLinks/> }
            <MenuButton isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isOpen} onClose={closeMenu} />

    </>
  );
};

export default Navbar;