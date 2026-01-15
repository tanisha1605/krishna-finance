"use client";

import { useState } from 'react';

import Image from 'next/image';

import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';

import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi';

import { FaRocket, FaShieldAlt, FaCheckCircle, FaHandHoldingUsd, FaChartLine, FaBullhorn, FaBriefcase } from 'react-icons/fa';

import styles from './Header.module.scss';

import Logo from '@/components/Images/Krishna-Finance-Logo.png';



const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const [activeMobileSection, setActiveMobileSection] = useState<number | null>(null);



    const closeMenu = () => setIsOpen(false);



    const servicesData = [
        { title: "AARAMBH", icon: <FaRocket />, items: ["Private Limited Company", "One Person Company Registration", "Limited Liability Partnership", "Partnership Firm Registration (ROF)", "Section 8 Company", "12A and 80G Registration", "NGO Darpan"] },
        { title: "KAVACH", icon: <FaShieldAlt />, items: ["Shram Suvidha Registration", "Trademark Registration", "Patent", "Copyright Registration"] },
        { title: "PRAMANIT", icon: <FaCheckCircle />, items: ["START-UP India Certificate", "GeM Registration", "Tax Exemption Certificate", "ZED Certificate", "ISO Certificate", "GST Registration & Certificate", "FSSAI Certificate", "IEC Certificate", "NSIC Certification", "Udhyam Registration"] },
        { title: "NIDHI", icon: <FaHandHoldingUsd />, items: ["Seed Fund", "Agri Preneurs", "MSME Design", "Tide Idea 2.0", "Nidhi Prayas", "Seed Support Scheme", "Gujarat Innovators"] },
        { title: "VIKAS", icon: <FaChartLine />, items: ["Venture Capital", "Working Capital (CGTMSE Loan)", "NAIFF", "PMEGP LOAN", "MUDRA LOAN", "PMFME", "Maha Udyog Yojana (CMEGP)"] },
        { title: "VISTAR", icon: <FaBullhorn />, items: ["Bhaskar ID", "Financial Deck", "Investor deck"] },
        { title: "PRABANDHIT", icon: <FaBriefcase />, items: ["ROC Compliances for Pvt Ltd", "ROC Compliances for LLP", "GST Compliances"] }
    ];


    return (

        <header className={styles.navContainer}>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-center h-20">

                    <div className="flex-shrink-0 z-[2001]">

                        <Link href="/" onClick={closeMenu} className="cursor-pointer">

                            <Image src={Logo} alt="Logo" width={160} height={40} priority className="object-contain cursor-pointer" />

                        </Link>

                    </div>



                    {/* Desktop Nav */}

                    <nav className="hidden lg:flex items-center space-x-8">

                        <Link href="/" className={styles.navLink}>Home</Link>

                        <Link href="/about" className={styles.navLink}>About Us</Link>



                        <div

                            className="relative h-20 flex items-center"

                            onMouseEnter={() => setIsServicesOpen(true)}

                            onMouseLeave={() => setIsServicesOpen(false)}

                        >

                            <span className={`${styles.navLink} flex items-center cursor-pointer`}>

                                Services <HiChevronDown className={`ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />

                            </span>



                            <AnimatePresence>

                                {isServicesOpen && (

                                    <motion.div

                                        initial={{ opacity: 0, y: 15 }}

                                        animate={{ opacity: 1, y: 0 }}

                                        exit={{ opacity: 0, y: 15 }}

                                        className={styles.megaMenu}

                                    >

                                        <div className={styles.megaMenuGrid}>

                                            {servicesData.map((section, idx) => (

                                                <div key={idx} className={styles.menuColumn}>

                                                    <h3>{section.title}</h3>

                                                    <ul>

                                                        {section.items.map((item, i) => (

                                                            <li key={i}>

                                                                <Link href="/services" className="cursor-pointer">

                                                                    <span className={styles.iconSpan}>{section.icon}</span> {item}

                                                                </Link>

                                                            </li>

                                                        ))}

                                                    </ul>

                                                </div>

                                            ))}

                                        </div>

                                    </motion.div>

                                )}

                            </AnimatePresence>

                        </div>



                        <Link href="/blog" className={styles.navLink}>Blog</Link>

                       

                        {/* THE REDIRECT BUTTON */}

                        <Link href="/contactus" className="cursor-pointer">

                            <motion.button

                                whileHover={{ scale: 1.05 }}

                                whileTap={{ scale: 0.95 }}

                                className={styles.contactBtn}

                            >

                                Contact Us

                            </motion.button>

                        </Link>

                    </nav>



                    {/* Hamburger */}

                    <div className="lg:hidden flex items-center z-[2001]">

                        <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-white cursor-pointer outline-none">

                            {isOpen ? <HiX /> : <HiMenuAlt3 />}

                        </button>

                    </div>

                </div>

            </div>



            {/* Mobile Sidebar */}

            <AnimatePresence>

                {isOpen && (

                    <>

                        <motion.div

                            initial={{ opacity: 0 }}

                            animate={{ opacity: 1 }}

                            exit={{ opacity: 0 }}

                            onClick={closeMenu}

                            className={styles.overlay}

                        />

                        <motion.div

                            initial={{ x: "100%" }}

                            animate={{ x: 0 }}

                            exit={{ x: "100%" }}

                            transition={{ type: "spring", damping: 25, stiffness: 200 }}

                            className={styles.mobileSidebar}

                        >

                            <div className="pt-24 px-8 flex flex-col h-full">

                                <Link href="/" onClick={closeMenu} className={styles.mobileMainLink}>Home</Link>

                                <Link href="/about" onClick={closeMenu} className={styles.mobileMainLink}>About Us</Link>

                                <Link href="/blog" onClick={closeMenu} className={styles.mobileMainLink}>Blog</Link>



                                <div className="py-4 overflow-y-auto flex-grow">

                                    <p className={styles.sidebarLabel}>OUR SERVICES</p>

                                    {servicesData.map((section, idx) => (

                                        <div key={idx} className="mb-4">

                                            <button

                                                className="w-full flex justify-between items-center text-white cursor-pointer"

                                                onClick={() => setActiveMobileSection(activeMobileSection === idx ? null : idx)}

                                            >

                                                <span className="flex items-center gap-2">{section.icon} {section.title}</span>

                                                <HiChevronDown className={activeMobileSection === idx ? 'rotate-180' : ''} />

                                            </button>

                                            {activeMobileSection === idx && (

                                                <ul className="mt-2 ml-6 border-l border-white/10 pl-4">

                                                    {section.items.map((item, i) => (

                                                        <li key={i} className="py-2">

                                                            <Link href="/services" onClick={closeMenu} className="text-gray-400 text-sm cursor-pointer hover:text-[#5ea000]">

                                                                {item}

                                                            </Link>

                                                        </li>

                                                    ))}

                                                </ul>

                                            )}

                                        </div>

                                    ))}

                                </div>

                                <div className="pb-10">

                                    <Link href="/contactus" onClick={closeMenu} className="cursor-pointer">

                                        <motion.button className={`${styles.contactBtn} w-full cursor-pointer`}>

                                            Contact Us

                                        </motion.button>

                                    </Link>

                                </div>

                            </div>

                        </motion.div>

                    </>

                )}

            </AnimatePresence>

        </header>

    );

};



export default Header;