"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi';
import { 
  FaRocket, FaShieldAlt, FaCheckCircle, 
  FaHandHoldingUsd, FaChartLine, FaBullhorn, FaBriefcase 
} from 'react-icons/fa';
import styles from './Header.module.scss';
import Logo from '@/components/Images/Krishna-Finance-Logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [activeMobileSection, setActiveMobileSection] = useState<number | null>(null);
    const router = useRouter();

    const closeMenu = () => {
        setIsOpen(false);
        setIsServicesOpen(false);
        setActiveMobileSection(null);
    };

    const formatSlug = (name: string) => `/services/${name.toLowerCase().replace(/\s+/g, '-')}`;

    // Full Service List from your Screenshot
    const servicesData = [
        { 
            title: "AARAMBH", 
            icon: <FaRocket />, 
            items: [
                "Private Limited Company", 
                "One Person Company Registration", 
                "Limited Liability Partnership", 
                "Partnership Firm Registration (ROF)", 
                "Section 8 Company", 
                "12A and 80G Registration", 
                "NGO Darpan"
            ] 
        },
        { 
            title: "KAVACH", 
            icon: <FaShieldAlt />, 
            items: [
                "Shram Suvidha Registration", 
                "Trademark Registration", 
                "Patent", 
                "Copyright Registration"
            ] 
        },
        { 
            title: "PRAMANIT", 
            icon: <FaCheckCircle />, 
            items: [
                "START-UP India Certificate", 
                "GeM Registration", 
                "Tax Exemption Certificate", 
                "ZED Certificate", 
                "ISO Certificate", 
                "GST Registration & Certificate", 
                "FSSAI Certificate", 
                "IEC Certificate", 
                "NSIC Certification", 
                "Udhyam Registration", 
                "GST Lut",
                "Make In India",
                "Pasara Certificate"
            ] 
        },
        { 
            title: "NIDHI", 
            icon: <FaHandHoldingUsd />, 
            items: [
                "Seed Fund", 
                "Agri Preneurs", 
                "MSME Design", 
                "Tide Idea 2.0", 
                "Nidhi Prayas", 
                "Seed Support Scheme", 
                "Gujarat Innovators"
            ] 
        },
        { 
            title: "VIKAS", 
            icon: <FaChartLine />, 
            items: [
                "Venture Capital", 
                "Working Capital (CGTMSE Loan)", 
                "NAIFF", 
                "PMEGP LOAN", 
                "MUDRA LOAN", 
                "PMFME", 
                "Maha Udyog Yojana (CMEGP)"
            ] 
        },
        { 
            title: "VISTAR", 
            icon: <FaBullhorn />, 
            items: [
                "Bhaskar ID", 
                "Financial Deck", 
                "Investor deck"
            ] 
        },
        { 
            title: "PRABANDHIT", 
            icon: <FaBriefcase />, 
            items: [
                "ROC Compliances for Pvt Ltd", 
                "ROC Compliances for LLP", 
                "GST Compliances"
            ] 
        }
    ];

    return (
        <header className={styles.navContainer}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 z-[2001]">
                        <Link href="/" onClick={closeMenu}>
                            <Image src={Logo} alt="Logo" width={160} height={40} priority className="object-contain cursor-pointer" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link href="/" className={styles.navLink}>Home</Link>
                        <Link href="/about" className={styles.navLink}>About Us</Link>

                        {/* Services Dropdown Trigger */}
                        <div 
                            className="h-20 flex items-center" 
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <span 
                                className={`${styles.navLink} flex items-center cursor-pointer`}
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                            >
                                Services <HiChevronDown className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                            </span>

                            {/* MEGA MENU - Positioned Fixed/Absolute relative to screen */}
                            <AnimatePresence>
                                {isServicesOpen && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className={styles.megaMenuWrapper}
                                    >
                                        <div className={styles.megaMenuCard}>
                                            {servicesData.map((section, idx) => (
                                                <div key={idx} className={styles.menuColumn}>
                                                    <h3 className={styles.columnTitle}>
                                                        {section.title}
                                                    </h3>
                                                    <ul className={styles.columnList}>
                                                        {section.items.map((item, i) => (
                                                            <li key={i}>
                                                                <Link 
                                                                    href={formatSlug(item)} 
                                                                    onClick={closeMenu}
                                                                    className={styles.menuItemLink}
                                                                >
                                                                    <span className={styles.itemIcon}>{section.icon}</span>
                                                                    <span className={styles.itemText}>{item}</span>
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
                        
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.contactBtn}
                            onClick={() => router.push('/contactus')}
                        >
                            Contact Us
                        </motion.button>
                    </nav>

                    {/* Mobile Hamburger */}
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
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={closeMenu} className={styles.overlay} 
                        />
                        <motion.div 
                            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className={styles.mobileSidebar}
                        >
                            <div className="pt-24 px-8 flex flex-col h-full overflow-y-auto">
                                <Link href="/" onClick={closeMenu} className={styles.mobileMainLink}>Home</Link>
                                <Link href="/about" onClick={closeMenu} className={styles.mobileMainLink}>About Us</Link>
                                <Link href="/blog" onClick={closeMenu} className={styles.mobileMainLink}>Blog</Link>

                                <div className="py-4">
                                    <p className={styles.sidebarLabel}>SERVICES</p>
                                    {servicesData.map((section, idx) => (
                                        <div key={idx} className="mb-4">
                                            <button 
                                                className="w-full flex justify-between text-white py-2" 
                                                onClick={() => setActiveMobileSection(activeMobileSection === idx ? null : idx)}
                                            >
                                                <span className="flex items-center gap-2 text-sm font-semibold">{section.icon} {section.title}</span>
                                                <HiChevronDown className={activeMobileSection === idx ? 'rotate-180' : ''} />
                                            </button>
                                            <AnimatePresence>
                                                {activeMobileSection === idx && (
                                                    <motion.ul 
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="ml-6 border-l border-white/10 pl-4 mt-2 overflow-hidden"
                                                    >
                                                        {section.items.map((item, i) => (
                                                            <li key={i} className="py-2">
                                                                <Link href={formatSlug(item)} onClick={closeMenu} className="text-gray-400 text-sm hover:text-[#5ea000] block">
                                                                    {item}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-auto pb-10">
                                    <button 
                                        onClick={() => { closeMenu(); router.push('/contactus'); }} 
                                        className={`${styles.contactBtn} w-full`}
                                    >
                                        Contact Us
                                    </button>
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