"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { FaRocket, FaShieldAlt, FaCheckCircle, FaHandHoldingUsd, FaChartLine, FaBullhorn, FaBriefcase } from 'react-icons/fa';
import styles from './ServiceDetails.module.scss';

interface ServiceClientProps {
  service: {
    title: string;
    description: string;
    features: string[];
    category: string;
  };
}

export default function ServiceClient({ service }: ServiceClientProps) {
  
  // Helper to get icon based on category
  const getIcon = (cat: string) => {
    switch(cat) {
      case 'AARAMBH': return <FaRocket />;
      case 'KAVACH': return <FaShieldAlt />;
      case 'PRAMANIT': return <FaCheckCircle />;
      case 'NIDHI': return <FaHandHoldingUsd />;
      case 'VIKAS': return <FaChartLine />;
      case 'VISTAR': return <FaBullhorn />;
      default: return <FaBriefcase />;
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
           <Link href="/" className={styles.backLink}>
             <ArrowLeft size={16} /> Back to Home
           </Link>
           <span>/</span>
           <span className={styles.current}>{service.category}</span>
        </div>

        {/* Header Section */}
        <div className={styles.header}>
           <div className={styles.iconCircle}>
             {getIcon(service.category)}
           </div>
           <h1 className={styles.title}>{service.title}</h1>
           <p className={styles.description}>{service.description}</p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {service.features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              className={styles.featureCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <CheckCircle className={styles.checkIcon} />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2>Ready to get started with {service.title}?</h2>
          <Link href="/contactus" className={styles.ctaBtn}>
            Talk to an Expert
          </Link>
        </div>

      </motion.div>
    </div>
  );
}