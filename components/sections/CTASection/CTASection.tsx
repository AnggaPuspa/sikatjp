import React from 'react';
import styles from './CTASection.module.css';
export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>
            Berhenti Jadi{' '}
            <span className={styles.highlightWrapper}>
              Korban Berikutnya.
            </span>
          </h2>
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.desc}>
            Satu langkah kamu hari ini bisa ubah segalanya. Putus rantai manipulasi sekarang.
          </p>
          <button className={styles.ctaButton} aria-label="Mulai sekarang">
            Mulai Sekarang
            <svg
              className={styles.arrowIcon}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              width={18}
              height={18}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
