import React from 'react';
import { motion } from 'framer-motion';
import styles from './BusinessService.module.scss';
import Logo from '@/components/Images/Modal-Logo.png';

const BusinessService: React.FC = () => {
  const services = [
    { title: 'Business Incorporation & Registration', icon: '🤝' },
    { title: 'Startup India & MSME Certification', icon: '📜' },
    { title: 'Seed Funding & Loan Assistance', icon: '💰' },
    { title: 'Business Growth Strategy', icon: '📈' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className={styles.sectionWrapper}>
      <motion.div 
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Left Side: Visuals with Scale Animation */}
        <motion.div 
          className={styles.imageSide}
          variants={itemVariants}
        >
          <img 
            src={Logo.src} 
            alt="Business Collaboration" 
            className={styles.puzzleImage} 
          />
        </motion.div>

        {/* Right Side: Content */}
        <div className={styles.contentSide}>
          <motion.div className={styles.topNote} variants={itemVariants}>
            <span className={styles.checkIcon}>✓</span>
            We are an Ahmedabad based consultancy
          </motion.div>

          <motion.h2 className={styles.headline} variants={itemVariants}>
            Committed to growth and <br />
            essential <span className={styles.highlight}>business services</span>
          </motion.h2>

          <motion.p className={styles.subtext} variants={itemVariants}>
            From launching startups to scaling established businesses, we serve entrepreneurs at every stage.
          </motion.p>

          <div className={styles.grid}>
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className={styles.card}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#f0fdf4",
                  transition: { duration: 0.2 } 
                }}
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