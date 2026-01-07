"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import styles from './Header.module.scss';
import Logo from '@/components/Images/Krishna-Finance-Logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const servicesData = [
        {
            title: "AARAMBH",
            items: ["Private Limited Company", "One Person Company Registration", "Limited Liability Partnership", "Partnership Firm Registration (ROF)", "Section 8 Company", "12A and 80G Registration", "NGO Darpan"]
        },
        {
            title: "KAVACH",
            items: ["Shram Suvidha Registration", "Trademark Registration", "Patent", "Copyright Registration"]
        },
        {
            title: "PRAMANIT",
            items: ["START-UP India Certificate", "GeM Registration", "Tax Exemption Certificate", "ZED Certificate", "ISO Certificate", "GST Registration & Certificate", "FSSAI Certificate", "IEC Certificate", "NSIC Certification", "Udhyam Registration", "GST Lut", "Make In India", "Pasara Certificate"]
        },
        {
            title: "NIDHI",
            items: ["Seed Fund", "Agri Preneurs", "MSME Design", "Tide Idea 2.0", "Nidhi Prayas", "Seed Support Scheme", "Gujarat Innovators"]
        },
        {
            title: "VIKAS",
            items: ["Venture Capital", "Working Capital (CGTMSE Loan)", "NAIFF", "PMEGP LOAN", "MUDRA LOAN", "PMFME", "Maha Udyog Yojana (CMEGP)"]
        }
    ];

    return (
        <header className={styles.navContainer}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <Image src={Logo} alt="Logo" width={160} height={40} className="object-contain" />
                    </div>

                    <nav className="hidden lg:flex items-center space-x-6">
                        {/* Home Link */}
                        <Link href="/" className={`${styles.navLink} ${styles.activeLink}`}>Home</Link>
                        <Link href="/about" className={styles.navLink}>About Us</Link>

                        {/* Services Link with Dropdown Logic */}
                        <div 
                            className="relative h-20 flex items-center"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <Link href="/services" className={styles.navLink}>
                                Services <span className="ml-1 text-xs">▼</span>
                            </Link>

                            {/* MEGA MENU CONTAINER */}
                            {isServicesOpen && (
                                <div className={styles.megaMenu}>
                                    <div className="grid grid-cols-5 gap-8 p-10">
                                        {servicesData.map((section, idx) => (
                                            <div key={idx} className={styles.menuColumn}>
                                                <h3>{section.title}</h3>
                                                <ul>
                                                    {section.items.map((item, i) => (
                                                        <li key={i}>
                                                            <Link href={`/services/${item.toLowerCase().replace(/ /g, '-')}`}>
                                                                {item}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/featured" className={styles.navLink}>Featured</Link>
                        <Link href="/blog" className={styles.navLink}>Blog</Link>
                        
                        <div className="flex items-center space-x-4 ml-4">
                            <button className={styles.contactBtn}>Contact Us</button>
                            <div className={styles.langToggle}>English</div>
                        </div>
                    </nav>

                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsOpen(true)} className="text-3xl text-white">
                            <HiMenuAlt3 />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

