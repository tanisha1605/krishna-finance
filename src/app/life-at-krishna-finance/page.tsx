"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Life.module.scss';

export default function LifeAtKrishnaFinance() {
  const galleryData = [
    { id: 1, src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800", alt: "Office Culture" },
    { id: 2, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800", alt: "Team Collaboration" },
    { id: 3, src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800", alt: "Modern Workspace" },
    { id: 4, src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800", alt: "Financial Planning" },
    { id: 5, src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800", alt: "Innovation Hub" },
    { id: 6, src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800", alt: "Team Success" },
  ];

  return (
    <main className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className={styles.title}>
            Life @ <span className={styles.highlight}>Krishna Finance</span>
          </h1>
          <p className={styles.subtitle}>
            Building Wealth, Securing Futures—and fostering a culture of growth and innovation.
          </p>
        </motion.div>
      </section>

      <section className={styles.gallerySection}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className={styles.gridContainer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {galleryData.map((item) => (
              <motion.div 
                key={item.id} 
                className={styles.imageCard}
                whileHover={{ y: -10 }}
              >
                <div className={styles.imageWrapper}>
                  <Image 
                    src={item.src} 
                    alt={item.alt}
                    fill
                    className={styles.actualImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.overlay}>
                    <span className={styles.overlayText}>View Event</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}