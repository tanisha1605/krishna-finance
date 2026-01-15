"use client";
import React from 'react';
import styles from './About.module.scss';
import { motion, Variants } from 'framer-motion';

const About = () => {
  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" // Now TypeScript knows this is a valid easing string
      }
    }
  };

  return (
    <div className={styles.aboutPage}>
      {/* Mini Hero Header */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.pageHeader}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className={styles.title}>About Our Company</h1>
          <p className={styles.breadcrumb}>Home / About Us</p>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <section className={styles.mainContent}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Container with Entrance Animation */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={styles.imageContainer}
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                className={styles.experienceBadge}
              >
                <h3>15+</h3>
                <p>Years of Experience</p>
              </motion.div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000" 
                alt="Our Office" 
                className={styles.mainImg}
              />
            </motion.div>

            {/* Text Content with Staggered Animation */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={styles.textSide}
            >
              <motion.p variants={itemVariants} className={styles.topSub}>WHO WE ARE</motion.p>
              <motion.h2 variants={itemVariants} className={styles.heading}>
                Your Trusted Partner in <span className={styles.highlight}>Financial Excellence</span>
              </motion.h2>
              <motion.p variants={itemVariants} className={styles.para}>
                At Krishna Finance, we believe in empowering individuals and businesses to achieve their financial dreams. Founded on the principles of integrity and transparency, we have become a leading name in investment consultancy.
              </motion.p>
              <motion.p variants={itemVariants} className={styles.para}>
                Our team of seasoned financial experts works tirelessly to provide tailored strategies that minimize risk and maximize returns.
              </motion.p>
              
              <motion.div variants={itemVariants} className={styles.pointsGrid}>
                {[
                  "Personalized Investment Plans",
                  "Expert Asset Management",
                  "24/7 Dedicated Support",
                  "Secure & Transparent Process"
                ].map((item, index) => (
                  <div key={index} className={styles.pointItem}>
                    <div className={styles.dot} />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.learnMoreBtn}
              >
                OUR SERVICES
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;