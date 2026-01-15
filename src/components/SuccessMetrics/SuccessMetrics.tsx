'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  FileCheck, 
  Users, 
  CalendarDays, 
  Map, 
  CheckCircle2 
} from 'lucide-react';
import styles from './SuccessMetrics.module.scss';

// Component for the counting animation
const Counter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number from string (e.g., "15,000" -> 15000)
  const numericValue = parseInt(value.replace(/,/g, ''), 10);
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const displayValue = useTransform(springValue, (latest) => {
    const rounded = Math.floor(latest);
    // Format back to locale string (e.g., 15000 -> "15,000")
    return rounded.toLocaleString() + suffix;
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const metrics = [
  {
    id: 1,
    icon: <FileCheck size={32} />,
    value: "15,000",
    suffix: "+",
    label: "Projects executed"
  },
  {
    id: 2,
    icon: <Users size={32} />,
    value: "1,000",
    suffix: "+",
    label: "Reviews, 4.7 star rated"
  },
  {
    id: 3,
    icon: <CalendarDays size={32} />,
    value: "900",
    suffix: "+",
    label: "Projects every month"
  },
  {
    id: 4,
    icon: <Map size={32} />,
    value: "Pan India", // Text based value
    label: "Client base"
  },
  {
    id: 5,
    icon: <Users size={32} />,
    value: "100",
    suffix: "+",
    label: "Members in team"
  }
];

const SuccessMetrics = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className={styles.metricsSection}>
      <motion.div 
        className={styles.metricsCard}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.header}>
          <div className={styles.badge}>
            <CheckCircle2 size={16} />
            SUCCESS METRICS
          </div>
          <h2 className={styles.title}>Build to lead</h2>
        </div>

        <motion.div 
          className={styles.metricsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((item) => (
            <motion.div key={item.id} className={styles.metricItem} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <div className={styles.content}>
                <h3 className={styles.value}>
                  {/* If the value is a number string, animate it. Otherwise, show as text. */}
                  {!isNaN(parseInt(item.value.replace(/,/g, ''), 10)) ? (
                    <Counter value={item.value} suffix={item.suffix} />
                  ) : (
                    item.value
                  )}
                </h3>
                <p className={styles.label}>{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SuccessMetrics;