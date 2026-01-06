"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import styles from './Header.module.scss';
import Logo from '@/components/Images/Krishna-Finance-Logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/', active: true },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services', hasDropdown: true },
        { name: 'Featured', href: '/featured', hasDropdown: true },
        { name: 'Blog', href: '/blog' },
        { name: 'Career', href: '/career' },
    ];

    return (
        <header className={styles.navContainer}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={160}
                            height={40}
                            className="object-contain"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`${styles.navLink} ${link.active ? styles.activeLink : ''}`}
                            >
                                {link.name}
                                {link.hasDropdown && <span className="ml-1 text-xs">▼</span>}
                            </Link>
                        ))}

                        <div className="flex items-center space-x-4 ml-4">
                            <button className={styles.contactBtn}>
                                Contact Us
                            </button>
                            <div className={styles.langToggle}>
                                English
                            </div>
                        </div>
                    </nav>

                    {/* Mobile/Tablet Menu Icon */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsOpen(true)} className="text-3xl text-white">
                            <HiMenuAlt3 />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile/Tablet Side Drawer */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
                <div className="flex justify-end items-center mb-10">
                    <button onClick={() => setIsOpen(false)} className={styles.closeIcon}>
                        {/* Casting as any ignores the IconBaseProps constraint */}
                        <HiX className={("text-3xl text-white" as any)} />
                    </button>
                </div>

                <nav className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={styles.mobileNavLink}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className={styles.contactBtn}>Contact Us</button>
                </nav>
            </div>

            {/* Overlay for mobile menu */}
            {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
        </header>
    );
};

export default Header;