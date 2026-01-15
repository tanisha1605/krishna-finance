'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Partners.module.scss';

// Importing logos from your src/components/Images path
import Logo1 from '../Images/Logo-1.png';
import Logo2 from '../Images/Logo-2.png';
import Logo3 from '../Images/Logo-3.png';
import Logo4 from '../Images/Logo-4.png';
import Logo5 from '../Images/Logo-5.png';

const partnerLogos = [
  { id: 1, name: 'AIC-JKLU', src: Logo1 },
  { id: 2, name: 'ANDROMEDA', src: Logo2 },
  { id: 3, name: 'VISHVA', src: Logo3 },
  { id: 4, name: 'CHITKARA', src: Logo4 },
  { id: 5, name: 'PRESTIGE', src: Logo5 },
];

const Partners: React.FC = () => {
  const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Our <span>Partners</span>
        </h2>

        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            {duplicatedLogos.map((logo, index) => (
              <div className={styles.slide} key={`${logo.id}-${index}`}>
                <div className={styles.logoWrapper}>
                  <Image 
                    src={logo.src} 
                    alt={logo.name} 
                    className={styles.partnerLogo}
                    priority={index < 5} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;