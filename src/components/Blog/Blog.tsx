"use client";
import React from 'react';
import styles from './Blog.module.scss';
import { motion } from 'framer-motion';

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const blogItems = [
    {
      title: "Limited Liability Partnership (LLP): A Complete Guide",
      bannerTitle: "LIMITED LIABILITY PARTNERSHIP (LLP)",
      date: "May 28, 2025",
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600"
    },
    {
      title: "India's Solo Entrepreneurs: Top 5 One-Person Companies to Watch",
      bannerTitle: "TOP 5 ONE-PERSON COMPANIES TO WATCH",
      date: "May 19, 2025",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=600"
    },
    {
      title: "What is a Section 8 Company? Everything You Need to Know",
      bannerTitle: "WHAT IS A SECTION 8 COMPANY?",
      date: "April 21, 2025",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600"
    }
  ];

  return (
    <div className={styles.blogPage}>
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.pageHeader}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h1 className={styles.title}>Latest <span>Insights</span></h1>
          <p className={styles.breadcrumb}>Home / Insights</p>
        </div>
      </motion.section>

      <section className={styles.mainContent}>
        <motion.div 
          className={styles.blogGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blogItems.map((item, index) => (
            <motion.div 
              key={index} 
              className={`${styles.blogCard} group`} // 'group' added here to fix build error
              variants={itemVariants}
            >
              <div className={styles.bannerWrapper}>
                <div className={styles.greenBanner}>
                  <div className={styles.bannerLeft}>
                    <span className={styles.brandName}>bharatedge</span>
                    <h2 className={styles.bannerTitle}>{item.bannerTitle}</h2>
                    <span className={styles.url}>WWW.BHARAT-EDGE.COM</span>
                  </div>
                  <div className={styles.bannerRight}>
                    <img src={item.img} alt="thumbnail" className={styles.innerImg} />
                  </div>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3>{item.title}</h3>
                <p className={styles.date}>{item.date}</p>
                <button className={styles.readMore}>Read More »</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;