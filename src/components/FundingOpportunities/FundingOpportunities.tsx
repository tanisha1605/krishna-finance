"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiChartBar, HiLightningBolt, HiCurrencyRupee, 
  HiLibrary, HiUserGroup, HiOfficeBuilding, 
  HiScissors, HiCake, HiBriefcase, HiX, HiCheckCircle 
} from 'react-icons/hi';
import { MdTrendingUp } from 'react-icons/md';
import styles from './FundingOpportunities.module.scss';

const FundingOpportunities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
  }, [isModalOpen]);

  const fundingData = [
    { title: "CGTMSE", amount: "Up to ₹5 Crore", icon: <HiChartBar />, points: ["Working Capital", "Provides collateral-free working capital loans"] },
    { title: "NAIFF", amount: "Up to ₹2 Crore", icon: <HiLightningBolt />, points: ["National Agriculture Infra Financing Facility", "Financing facility for community farming assets"] },
    { title: "SSS", amount: "Up to ₹1 Crore", icon: <HiCurrencyRupee />, points: ["Seed Support Scheme", "Offering funding for early-stage startups"] },
    { title: "SISFS", amount: "Up to ₹50 Lakh", icon: <HiLibrary />, points: ["Startup India Seed Fund Scheme", "Supports startups with early-stage seed funding"] },
    { title: "PMEGP", amount: "Up to ₹50 Lakh", icon: <HiUserGroup />, points: ["PM Employment Generation Program", "Credit-linked subsidy for micro-enterprises"] },
    { title: "MSME Loan", amount: "Up to ₹50 Lakh", icon: <HiOfficeBuilding />, points: ["Loan for MSMEs", "Financial support for Micro and Small Enterprises"] },
    { title: "Textile Fund", amount: "Up to ₹1 Crore", icon: <HiScissors />, points: ["Textile Innovation Fund", "Innovation fund for textile sector development"] },
    { title: "PMFME", amount: "Up to ₹10 Lakh", icon: <HiCake />, points: ["PM Micro Food Processing Enterprises", "Subsidy support for micro food processing"] },
    { title: "PMMY", amount: "Up to ₹20 Lakh", icon: <HiBriefcase />, points: ["Pradhan Mantri MUDRA Yojana", "Collateral-free loans for small businesses"] }
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.headerArea}
        >
          <div className={styles.badgeLine}>
            <span className={styles.checkIcon}>✓</span>
            <span className={styles.badgeText}>Funding opportunities</span>
          </div>
          <h2 className={styles.mainTitle}>For Every Stage of <span>Your Startup</span></h2>
        </motion.div>

        {/* Responsive Grid */}
        <div className={styles.cardsGrid}>
          {fundingData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={styles.card}
              onClick={() => {
                setSelectedService(item.title);
                setIsModalOpen(true);
              }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardTitleGroup}>
                  <span className={styles.iconBox}>{item.icon}</span>
                  {item.title}
                </div>
                <div className={styles.amountBadge}>{item.amount}</div>
              </div>
              <div className={styles.cardBody}>
                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}><span className={styles.pointer}>👉</span><p>{point}</p></li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- FORM MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div 
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            />
            <div className={styles.modalContainer}>
              <motion.div 
                className={styles.modalContent}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
              >
                <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}><HiX /></button>
                <div className={styles.modalHeader}>
                    <div className={styles.badgeLine}>
                        <HiCheckCircle className={styles.checkIcon} />
                        <span>GROW WITH US</span>
                    </div>
                    <h2>Connect with an <span>expert</span></h2>
                </div>
                <div className={styles.modalBody}>
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Enter Your Full Name" required />
                        <input type="tel" placeholder="Enter Your Mobile Number" required />
                        <input type="email" placeholder="Enter Your Email" required />
                        <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                            <option value="" disabled>Select Service</option>
                            {fundingData.map(f => <option key={f.title} value={f.title}>{f.title}</option>)}
                        </select>
                        <button type="submit" className={styles.submitBtn}>
                            Consult Now <MdTrendingUp />
                        </button>
                    </form>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FundingOpportunities;