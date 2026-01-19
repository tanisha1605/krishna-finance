"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './BlogDetails.module.scss';

interface BlogClientProps {
  post: {
    title: string;
    date: string;
    content: { heading: string; text: string }[];
    conclusion: string;
  };
}

// 1. Defined 3 Related Posts to fill the grid
const relatedPosts = [
  {
    id: 1,
    title: "India's Solo Entrepreneurs: Top 5 One-Person Companies",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600",
    slug: "top-5-one-person-companies"
  },
  {
    id: 2,
    title: "What is a Private Limited Company? A Beginner's Guide",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600",
    slug: "private-limited-company-guide"
  },
  {
    id: 3,
    title: "80 IAC Tax Exemption: Why Every Startup Needs It",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600",
    slug: "80-iac-tax-exemption"
  }
];

export default function BlogClient({ post }: BlogClientProps) {
  return (
    <div className={styles.pageWrapper}>
      
      {/* Article Container */}
      <motion.article 
        className={styles.articleContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.breadcrumb}>
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>

        <header className={styles.articleHeader}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.metaData}>
            <span><Calendar size={14} /> {post.date}</span>
            <span><User size={14} /> Krishna Finance Team</span>
            <span><Clock size={14} /> 5 min read</span>
          </div>
        </header>

        <div className={styles.imageWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200" 
            alt={post.title} 
            className={styles.featureImage} 
          />
        </div>

        <div className={styles.contentBody}>
          {post.content && post.content.map((section, index) => (
            <motion.div 
              key={index} 
              className={styles.contentSection}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </motion.div>
          ))}

          <motion.div 
            className={styles.conclusion}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3>Conclusion</h3>
            <p>{post.conclusion}</p>
          </motion.div>
        </div>
      </motion.article>

      {/* Related Blogs Section */}
      <section className={styles.relatedSection}>
        <div className={styles.relatedContainer}>
          <h3 className={styles.relatedTitle}>Related Articles</h3>
          
          {/* 2. Mapped the 3 items to the grid */}
          <div className={styles.relatedGrid}>
            {relatedPosts.map((item, index) => (
              <motion.div 
                key={item.id}
                className={styles.relatedCard} 
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                  <div className={styles.cardImage}>
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className={styles.cardContent}>
                    <h4>{item.title}</h4>
                    <Link href={`/blog/${item.slug}`} className={styles.readMoreBtn}>
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}