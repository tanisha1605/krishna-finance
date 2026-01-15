"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import styles from './GrowthCatalyst.module.scss';

const GrowthCatalyst: React.FC = () => {
  const router = useRouter();

  const services = [
    { id: 'aarambh', title: 'AARAMBH', icon: '🚀', description: 'Complete company registration solutions from Private Limited to NGOs and partnerships.' },
    { id: 'kavach', title: 'KAVACH', icon: '🛡️', description: 'Legal protection through Shram Suvidha and trademark registration services.' },
    { id: 'pramanit', title: 'PRAMANIT', icon: '✅', description: 'Get certified with essential business, tax, and compliance certifications.' },
    { id: 'nidhi', title: 'NIDHI', icon: '💰', description: 'Access a variety of government grants, funds, and MSME support schemes.' },
    { id: 'vikas', title: 'VIKAS', icon: '🛡️', description: 'Fuel your business growth with venture capital and government loan assistance.' },
    { id: 'vistar', title: 'VISTAR', icon: '📢', description: 'Build your brand with expert logo design, digital marketing, and web development.' },
  ];

  return (
    <section className={styles.mainWrapper}>
      <div className={styles.contentContainer}>
        
        {/* Intro Section */}
        <motion.div 
          className={styles.introSide}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.tagline}>
            <span className={styles.iconCheck}>✓</span> SERVICES
          </div>
          <h1 className={styles.mainTitle}>
            Business Solutions for <span className={styles.accentText}>Startup and MSMEs</span>
          </h1>
          <button className={styles.ctaButton} onClick={() => router.push('/services')}>
            Explore Services ↗
          </button>
        </motion.div>

        {/* Responsive Grid */}
        <motion.div 
          className={styles.servicesGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className={styles.serviceBox}
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', y: -5 }}
              onClick={() => router.push(`/services/${service.id}`)}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>{service.icon}</div>
                <h3 className={styles.serviceName}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>
              </div>

              <div className={styles.viewDetails}>
                View Details →
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthCatalyst;