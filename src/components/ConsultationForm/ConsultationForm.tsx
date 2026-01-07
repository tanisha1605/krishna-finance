"use client";
import React from 'react';
import Image from 'next/image';
import styles from './ConsultationForm.module.scss';
import { motion } from 'framer-motion';
import { LuArrowUpRight } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
// Path to your third image
import ConsultImg from '@/components/Images/Consultation.png'; 

const ConsultationForm = () => {
  return (
    <section className={styles.consultSection}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.wrapper}>
          
          {/* Left Side: Exact Image UI */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.visualSide}
          >
            <div className={styles.imageContainer}>
              <Image 
                src={ConsultImg} 
                alt="Time is Money Save Both" 
                className={styles.mainImage}
                priority
              />
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Enter Your Full Name" required />
              </div>
              <div className={styles.inputGroup}>
                <input type="tel" placeholder="Enter Your Mobile Number" required />
              </div>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="Enter Your Email" required />
              </div>
              <div className={styles.inputGroup}>
                <select required defaultValue="">
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