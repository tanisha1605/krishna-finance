"use client";
import React from 'react';
import styles from './About.module.scss';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Mini Hero Header */}
      <section className={styles.pageHeader}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className={styles.title}>About Our Company</h1>
          <p className={styles.breadcrumb}>Home / About Us</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.mainContent}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className={styles.imageContainer}>
              <div className={styles.experienceBadge}>
                <h3>15+</h3>
                <p>Years of Experience</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000" 
                alt="Our Office" 
                className={styles.mainImg}
              />
            </div>

            <div className={styles.textSide}>
              <p className={styles.topSub}>WHO WE ARE</p>
              <h2 className={styles.heading}>Your Trusted Partner in <span className={styles.highlight}>Financial Excellence</span></h2>
              <p className={styles.para}>
                At Krishna Finance, we believe in empowering individuals and businesses to achieve their financial dreams. Founded on the principles of integrity and transparency, we have become a leading name in investment consultancy.
              </p>
              <p className={styles.para}>
                Our team of seasoned financial experts works tirelessly to provide tailored strategies that minimize risk and maximize returns, ensuring your future is secure and prosperous.
              </p>
              
              <div className={styles.pointsGrid}>
                <div className={styles.pointItem}>
                  <div className={styles.dot} />
                  <span>Personalized Investment Plans</span>
                </div>
                <div className={styles.pointItem}>
                  <div className={styles.dot} />
                  <span>Expert Asset Management</span>
                </div>
                <div className={styles.pointItem}>
                  <div className={styles.dot} />
                  <span>24/7 Dedicated Support</span>
                </div>
                <div className={styles.pointItem}>
                  <div className={styles.dot} />
                  <span>Secure & Transparent Process</span>
                </div>
              </div>

              <button className={styles.learnMoreBtn}>OUR SERVICES</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;