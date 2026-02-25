import Link from 'next/link';
import { FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import styles from './Career.module.scss';

export const metadata = {
  title: 'Careers | Krishna Finance',
  description: 'Join the Krishna Finance team and build your career in the financial sector.',
};

export default function CareerPage() {
  // Placeholder job data
  const openPositions = [
    {
      id: 1,
      title: "Senior Financial Analyst",
      location: "Ahmedabad, Gujarat",
      type: "Full-Time",
      department: "Finance",
    },
    {
      id: 2,
      title: "Business Development Executive",
      location: "Ahmedabad, Gujarat",
      type: "Full-Time",
      department: "Sales",
    },
    {
      id: 3,
      title: "Compliance Officer (ROC/GST)",
      location: "Remote / Hybrid",
      type: "Full-Time",
      department: "Legal & Compliance",
    }
  ];

  return (
    <main className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={styles.title}>
            Shape Your Future with <span className={styles.highlight}>Krishna Finance</span>
          </h1>
          <p className={styles.subtitle}>
            We are always looking for passionate, driven individuals to join our growing team. 
            Discover your next career opportunity below.
          </p>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className={styles.jobsSection}>
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.sectionHeader}>
            <h2>Open Positions</h2>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.jobList}>
            {openPositions.map((job) => (
              <div key={job.id} className={styles.jobCard}>
                <div className={styles.jobInfo}>
                  <h3>{job.title}</h3>
                  <div className={styles.jobMeta}>
                    <span className={styles.metaItem}>
                      <FaBriefcase className={styles.metaIcon} /> {job.department}
                    </span>
                    <span className={styles.metaItem}>
                      <FaMapMarkerAlt className={styles.metaIcon} /> {job.location}
                    </span>
                    <span className={styles.metaItem}>
                      <FaClock className={styles.metaIcon} /> {job.type}
                    </span>
                  </div>
                </div>
                <div className={styles.jobAction}>
                  <Link href={`/contactus?subject=Application for ${job.title}`}>
                    <button className={styles.applyBtn}>Apply Now</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Fallback CTA if no jobs fit */}
          <div className={styles.generalApplication}>
            <p>Don&apos;t see a role that fits? Send us your resume anyway!</p>
            <Link href="/contactus" className={styles.textLink}>
              Submit a General Application &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}