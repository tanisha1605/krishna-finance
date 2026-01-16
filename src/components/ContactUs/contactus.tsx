"use client";
import React from 'react';
import styles from './contactus.module.scss';
import { motion, Variants } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactUs = () => {
  // 2. Explicitly type the variants object
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contactItems = [
    {
      icon: <MapPin size={24} />,
      title: "Address",
      detail: "609 - SHREEJI Business, opposite hanspura residency, Hanspura, GIDC Naroda, Ahmedabad, Gujarat 382330",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      detail: "support@krishnafinance.com",
      img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=600"
    },
    {
      icon: <Phone size={24} />,
      title: "For Consultation",
      detail: "+91 98240 22350",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600"
    }
  ];

  return (
      <div className={styles.contactPage}>
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.pageHeader}
        >
          <div className="max-w-7xl mx-auto">
            <h1 className={styles.title}>Contact <span>Us</span></h1>
            <p className={styles.breadcrumb}>Home / Contact Us</p>
          </div>
        </motion.section>

        <section className={styles.mainContent}>
          <div className={styles.contactGrid}>
            {contactItems.map((item, index) => (
                <motion.div
                    key={index}
                    className={styles.contactCard}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                >
                  <div className={styles.imageWrapper}>
                    <img src={item.img} alt={item.title} className={styles.cardImg} />
                    <div className={styles.iconCircle}>{item.icon}</div>
                  </div>

                  <div className={styles.cardContent}>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </motion.div>
            ))}
          </div>
        </section>
      </div>
  );
};

export default ContactUs;