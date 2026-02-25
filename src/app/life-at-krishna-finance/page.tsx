import Image from 'next/image';
import styles from './Life.module.scss';

export const metadata = {
  title: 'Life @ Krishna Finance',
  description: 'Discover the culture, people, and events at Krishna Finance.',
};

export default function LifeAtKrishnaFinance() {
  return (
    <main className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={styles.title}>
            Life @ <span className={styles.highlight}>Krishna Finance</span>
          </h1>
          <p className={styles.subtitle}>
            Building Wealth, Securing Futures—and fostering a culture of growth, innovation, and teamwork.
          </p>
        </div>
      </section>

      {/* Gallery / Content Section */}
      <section className={styles.gallerySection}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.gridContainer}>
            {/* Placeholder items - Replace with real images later */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className={styles.imageCard}>
                <div className={styles.imagePlaceholder}>
                  <span>Gallery Image {item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}