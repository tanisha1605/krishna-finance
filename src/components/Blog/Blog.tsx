"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Blog.module.scss';
import { motion, Variants } from 'framer-motion';

const Blog = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Full list of 7 Blog Items from your screenshots
  const blogItems = [
    {
      id: 1,
      slug: "limited-liability-partnership-guide",
      title: "Limited Liability Partnership (LLP): A Complete Guide",
      bannerTitle: "LIMITED LIABILITY PARTNERSHIP (LLP)",
      date: "May 28, 2025",
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600"
    },
    {
      id: 2,
      slug: "top-5-one-person-companies",
      title: "India's Solo Entrepreneurs: Top 5 One-Person Companies to Watch",
      bannerTitle: "TOP 5 ONE-PERSON COMPANIES TO WATCH",
      date: "May 19, 2025",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=600"
    },
    {
      id: 3,
      slug: "section-8-company-guide",
      title: "What is a Section 8 Company? Everything You Need to Know",
      bannerTitle: "WHAT IS A SECTION 8 COMPANY?",
      date: "April 21, 2025",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600"
    },
    {
      id: 4,
      slug: "80-iac-tax-exemption",
      title: "80 IAC Tax Exemption Certificate: Why Every DPIIT-Recognized Startup Needs It",
      bannerTitle: "80 IAC TAX EXEMPTION CERTIFICATE",
      date: "April 21, 2025",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600"
    },
    {
      id: 5,
      slug: "sole-proprietorship-vs-opc",
      title: "Sole Proprietorship vs One Person Company: Key Differences You Need to Know",
      bannerTitle: "SOLE PROPRIETORSHIP VS ONE PERSON COMPANY",
      date: "April 21, 2025",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600"
    },
    {
      id: 6,
      slug: "what-is-opc-guide",
      title: "What is a One Person Company (OPC)? A Complete Guide for Beginners",
      bannerTitle: "WHAT IS A ONE PERSON COMPANY (OPC)?",
      date: "April 8, 2025",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"
    },
    {
      id: 7,
      slug: "private-limited-company-guide",
      title: "What is a Private Limited Company? A Complete Guide for Beginners",
      bannerTitle: "WHAT IS A PRIVATE LIMITED COMPANY?",
      date: "April 4, 2025",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600"
    }
  ];

  return (
    <div className={styles.blogPage}>
      {/* Page Header */}
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

      {/* Main Grid Content */}
      <section className={styles.mainContent}>
        <motion.div 
          className={styles.blogGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blogItems.map((item) => (
            <motion.div 
              key={item.id} 
              className={`${styles.blogCard} group`} 
              variants={itemVariants}
            >
              {/* Image Banner Section */}
              <div className={styles.bannerWrapper}>
                <div className={styles.greenBanner}>
                  <div className={styles.bannerLeft}>
                    <span className={styles.brandName}>KRISHNA FINANCE</span>
                    <h2 className={styles.bannerTitle}>{item.bannerTitle}</h2>
                    <span className={styles.url}>WWW.KRISHNAFINANCE.COM</span>
                  </div>
                  <div className={styles.bannerRight}>
                    <img src={item.img} alt={item.title} className={styles.innerImg} />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className={styles.cardContent}>
                <Link href={`/blog/${item.slug}`} className={styles.titleLink}>
                  <h3>{item.title}</h3>
                </Link>
                <p className={styles.date}>{item.date}</p>
                
                {/* Functional Read More Link */}
                <Link href={`/blog/${item.slug}`} className={styles.readMore}>
                  Read More »
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;