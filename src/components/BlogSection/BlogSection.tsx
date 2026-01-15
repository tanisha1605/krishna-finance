'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import styles from './BlogSection.module.scss';

const blogPosts = [
  {
    id: 1,
    title: "Limited Liability Partnership (LLP): A Complete Guide",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500",
  },
  {
    id: 2,
    title: "India's Solo Entrepreneurs: Top 5 One-Person Companies to Watch",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=500",
  },
  {
    id: 3,
    title: "What is a Section 8 Company? Everything You Need to Know",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=500",
  },
  {
    id: 4,
    title: "80 IAC Tax Exemption Certificate: Why Every DPIIT-Recognized Startup Needs It",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=500",
  }
];

const BlogSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.blogSection}>
      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <div className={styles.badge}>
            <CheckCircle2 size={16} />
            Blogs
          </div>
          <h2 className={styles.title}>
            Business insights, <span>updates</span><br />and trends
          </h2>
        </div>
        
        <motion.a 
          href="#" 
          className={styles.viewAllBtn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Post <ArrowUpRight size={20} />
        </motion.a>
      </div>

      <motion.div 
        className={styles.blogGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {blogPosts.map((post) => (
          <motion.div 
            key={post.id} 
            className={styles.blogCard} 
            variants={itemVariants}
          >
            <div className={styles.imageWrapper}>
              <img src={post.image} alt={post.title} />
              <div className={styles.overlay} />
            </div>
            
            <div className={styles.content}>
              <h3>{post.title}</h3>
              <a href="#" className={styles.readMore}>
                Read More »
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BlogSection;