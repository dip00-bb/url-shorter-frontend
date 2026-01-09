"use client"

import React, { useState } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import MenuButton from './MenuButton';
import useAuthContext from '../Hook/useAuthContext';
import GuestNavLinks from './GuestNavLink';
// import GuestNavLinks from './GuestNavLink';






const Navbar = () => {

  const { user } = useAuthContext()


  const [isOpen, setIsOpen] = useState(false);
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
            {user ? <NavLinks /> : <GuestNavLinks />}
            <MenuButton isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isOpen} onClose={closeMenu} />

    </>
  );
};

export default Navbar;