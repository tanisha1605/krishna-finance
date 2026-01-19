"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react'; // Optional: Use a real icon if available
import styles from './GrowthCatalyst.module.scss';

const GrowthCatalyst: React.FC = () => {
  const router = useRouter();

  const services = [
    { id: 'aarambh', title: 'AARAMBH', icon: '🚀', description: 'Complete company registration solutions from Private Limited to NGOs and partnerships.' },
    { id: 'kavach', title: 'KAVACH', icon: '🛡️', description: 'Legal protection through Shram Suvidha and trademark registration services.' },
    { id: 'pramanit', title: 'PRAMANIT', icon: '✅', description: 'Get certified with essential business, tax, and compliance certifications.' },
    { id: 'nidhi', title: 'NIDHI', icon: '💰', description: 'Access a variety of government grants, funds, and MSME support schemes.' },
    { id: 'vikas', title: 'VIKAS', icon: '📈', description: 'Fuel your business growth with venture capital and government loan assistance.' },
    { id: 'vistar', title: 'VISTAR', icon: '📢', description: 'Build your brand with expert logo design, digital marketing, and web development.' },
  ];

  return (
    <section className={styles.mainWrapper}>
      <div className={styles.contentContainer}>
        
        {/* Intro Section - Sticky on Desktop, Stacked on Mobile */}
        <motion.div 
          className={styles.introSide}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.tagline}>
            <span className={styles.iconCheck}>✓</span> OUR SERVICES
          </div>
          <h1 className={styles.mainTitle}>
            Business Solutions for <span className={styles.accentText}>Startup & MSMEs</span>
          </h1>
          <button className={styles.ctaButton} onClick={() => router.push('/services')}>
            Explore Services 
            <span style={{ fontSize: '1.2em' }}>↗</span>
          </button>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className={styles.servicesGrid}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className={styles.serviceBox}
              onClick={() => router.push(`/services/${service.id}`)}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>{service.icon}</div>
                <h3 className={styles.serviceName}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>
              </div>

              <div className={styles.viewDetails}>
                View Details <span>→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthCatalyst;