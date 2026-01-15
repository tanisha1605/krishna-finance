"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock 
} from 'react-icons/fa';
import styles from './Footer.module.scss';
import Logo from '@/components/Images/Krishna-Finance-Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants for staggered entrance of columns
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each column
      }
    }
  };

  // Animation variants for individual text elements/rows
  const textVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className={styles.footerWrapper}>
      <motion.div 
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* Main Content Grid */}
        <motion.div 
          className={styles.mainGrid}
          variants={containerVariants}
        >
          {/* Column 1: Logo & Socials */}
          <motion.div variants={itemVariants} className={styles.brandCol}>
            <Image src={Logo} alt="Logo" width={180} height={45} className="object-contain mb-4" />
            <motion.p variants={textVariants} className={styles.tagline}>
              Registration | Certification | Funding
            </motion.p>
            <motion.div variants={textVariants} className={styles.socialIcons}>
              <Link href="#"><FaInstagram /></Link>
              <Link href="#"><FaFacebookF /></Link>
              <Link href="#"><FaYoutube /></Link>
              <Link href="#"><FaLinkedinIn /></Link>
            </motion.div>
          </motion.div>

          {/* Column 2: Contact */}
          <motion.div variants={itemVariants} className={styles.infoCol}>
            <motion.h3 variants={textVariants}>Contact</motion.h3>
            <motion.div variants={textVariants} className={styles.iconRow}>
              <FaMapMarkerAlt className={styles.brandIcon} />
              <p>609 - SHREEJI Business, opposite hanspura residency, Hanspura, GIDC Naroda, Ahmedabad, Gujarat 382330</p>
            </motion.div>
            <div className={styles.emailRow}>
              <motion.h3 variants={textVariants}>Email us</motion.h3>
              <motion.div variants={textVariants} className={styles.iconRow}>
                <FaEnvelope className={styles.brandIcon} />
                <a href="mailto:support@KrishnaFinance.com">support@KrishnaFinance.com</a>
              </motion.div>
            </div>
          </motion.div>

          {/* Column 3: Expert & Time */}
          <motion.div variants={itemVariants} className={styles.infoCol}>
            <motion.h3 variants={textVariants}>Talk with our Expert</motion.h3>
            <motion.div variants={textVariants} className={styles.iconRow}>
              <FaPhoneAlt className={styles.brandIcon} />
              <p>+91 98240 22350</p>
            </motion.div>
            <motion.div variants={textVariants} className={styles.iconRow}>
              <FaPhoneAlt className={styles.brandIcon} />
              <p>+91 99044 03298</p>
            </motion.div>

            <div className={styles.timeRow}>
              <motion.h3 variants={textVariants}>Office Time</motion.h3>
              <motion.div variants={textVariants} className={styles.iconRow}>
                <FaClock className={styles.brandIcon} />
                <p>Monday – Saturday</p>
              </motion.div>
              <motion.div variants={textVariants} className={styles.iconRow}>
                <FaClock className={styles.brandIcon} />
                <p>09:30 AM – 06:30 PM</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Column 4: Quick Links */}
          <motion.div variants={itemVariants} className={styles.infoCol}>
            <motion.h3 variants={textVariants}>Quick links</motion.h3>
            <nav className={styles.quickLinks}>
              {['Home', 'About Us', 'Services', 'Life@KrishnaFinance', 'Blog', 'Contact Us'].map((text, i) => (
                <motion.div key={text} variants={textVariants}>
                  <Link href="/">{text}</Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </motion.div>

        {/* Disclaimer Box */}
        <motion.div 
          className={styles.disclaimerBox}
          variants={itemVariants}
        >
          <motion.p variants={textVariants}>
            <span>Disclaimer:</span> We provide consultancy services in areas such as pitch deck preparation, financial reporting, business incorporation...
          </motion.p>
          <motion.p variants={textVariants} className="mt-4">
            <span>Note:</span> Payments for services are only accepted in the name of Krishna Finance...
          </motion.p>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className={styles.bottomBar}
          variants={itemVariants}
        >
          <motion.p variants={textVariants}>
            © 2025 Krishna Finance, Designed By SEULUXE
          </motion.p>
          <motion.div variants={textVariants} className={styles.legalLinks}>
            <Link href="/terms">Terms & Conditions</Link>
            <span className={styles.dot}>•</span>
            <Link href="/privacy">Privacy Policy</Link>
          </motion.div>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default Footer;