"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './BusinessService.module.scss';
import Logo from '@/components/Images/Modal-Logo.png';
import Image from 'next/image';

const BusinessService: React.FC = () => {
  const services = [
    { title: 'Business Incorporation', icon: '🤝' },
    { title: 'MSME Certification', icon: '📜' },
    { title: 'Funding Assistance', icon: '💰' },
    { title: 'Growth Strategy', icon: '📈' },
  ];

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 } 
    }
  };

  return (
    <section className={styles.sectionWrapper}>
      <motion.div 
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Visual Side */}
        <motion.div className={styles.imageSide} variants={itemVariants}>
          <Image 
            src={Logo} 
            alt="Krishna Finance" 
            className={styles.puzzleImage}
            priority
          />
        </motion.div>

        {/* Content Side */}
        <div className={styles.contentSide}>
          <motion.div className={styles.topNote} variants={itemVariants}>
            <span className={styles.checkIcon}>✓</span>
            Consultancy Ahmedabad
          </motion.div>

          <motion.h2 className={styles.headline} variants={itemVariants}>
            Committed to <span className={styles.highlight}>Growth</span>
          </motion.h2>

          <motion.p className={styles.subtext} variants={itemVariants}>
            Launching and scaling startups at every stage.
          </motion.p>

          <div className={styles.grid}>
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className={styles.card}
                variants={itemVariants}
              >
                <div className={styles.iconBox}>
                  <span>{service.icon}</span>
                </div>
                <span className={styles.cardTitle}>{service.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BusinessService;