"use client";

import React, { FormEvent } from 'react';
import Image from 'next/image';
import styles from './ConsultationForm.module.scss';
import { motion } from 'framer-motion';
import { LuArrowUpRight } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import ConsultImg from '@/components/Images/Consultation.png'; 

const ConsultationForm: React.FC = () => {
  
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Form Data:", Object.fromEntries(formData));
  };

  return (
    <section className={styles.consultSection}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.wrapper}>
          
          {/* Visual Side (Image) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.visualSide}
          >
            <div className={styles.imageWrapper}>
              {/* This div creates the glow effect behind the image */}
              <div className={styles.glowEffect}></div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image 
                  src={ConsultImg} 
                  alt="Financial Consultation" 
                  className={styles.mainImage}
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.formSide}
          >
            <div className={styles.formHeader}>
              <span className={styles.badge}>
                <FaCheckCircle className={styles.checkIcon} /> GROW WITH US
              </span>
              <h3 className={styles.formTitle}>
                Connect with an <span>expert</span>
              </h3>
            </div>

            <form className={styles.form} onSubmit={handleFormSubmit}>
              <div className={styles.inputGroup}>
                <input type="text" name="name" placeholder="Enter Your Full Name" required />
              </div>
              <div className={styles.inputGroup}>
                <input type="tel" name="phone" placeholder="Enter Your Mobile Number" required />
              </div>
              <div className={styles.inputGroup}>
                <input type="email" name="email" placeholder="Enter Your Email" required />
              </div>
              <div className={styles.inputGroup}>
                <select name="service" required defaultValue="">
                  <option value="" disabled>Select Service</option>
                  <option value="investment">Investment Planning</option>
                  <option value="asset">Asset Management</option>
                  <option value="tax">Tax Consultancy</option>
                </select>
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                Consult Now <LuArrowUpRight />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;