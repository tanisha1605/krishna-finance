"use client";
import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroOverlay} />
      
      {/* Added 'flex justify-end' to push the content to the right.
          Added 'w-full' to ensure the container spans the whole width.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-end w-full">
        
        {/* You can also add text-right here if you want the text itself aligned right */}
        <div className={`${styles.contentBox} text-right`}>
          <p className={styles.subHeading}>WE ARE HERE TO SERVE</p>
          
          <h1 className={styles.mainTitle}>
            Welcome To <br />
            <span className={styles.brandName}>Krishna Finance</span>
          </h1>
          
          <p className={styles.description}>
            Empowering your financial future with trusted expertise and 
            personalized investment solutions.
          </p>

          {/* Added 'justify-end' to the button group to keep them on the right */}
          <div className={`${styles.buttonGroup} flex justify-end gap-4`}>
            <button className={styles.primaryBtn}>
              EXPLORE SERVICES
            </button>
            <button className={styles.secondaryBtn}>
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;