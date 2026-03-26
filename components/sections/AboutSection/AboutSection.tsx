'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './AboutSection.module.css';
export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollableDistance = rect.height - windowHeight;
      let progress = -rect.top / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      if (progress > 0.66) {
        setActiveIndex(2);
      } else if (progress > 0.33) {
        setActiveIndex(1);
      } else {
        setActiveIndex(0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const getCardClass = (cardIndex: number) => {
    if (cardIndex === activeIndex) return styles.cardActive;
    if (cardIndex < activeIndex) {
      if (activeIndex - cardIndex === 1) return styles.cardStacked1;
      return styles.cardStacked2;
    }
    return styles.cardHidden;
  };
  return (
    <section className={styles.scrollContainer} ref={containerRef} id="about">
      <div className={styles.stickyWrapper}>
        <div className={styles.bannerWrapper}>
          <div className={styles.abstractBg}></div>
          <div className={styles.arc1}></div>
          <div className={styles.arc2}></div>
          <div className={styles.arc3}></div>
          <div className={styles.cardsContainer}>
            <div className={`${styles.glassCard} ${getCardClass(0)}`} style={{ zIndex: 1 }}>
              <div className={styles.badgeSolid}>Latar Belakang</div>
              <h3 className={styles.cardTitle}>Lahir dari darurat: lonjakan angka depresi & bunuh diri.</h3>
              <p className={styles.cardDesc}>
                Kombinasi maut pinjol dan judi online sudah menghancurkan jutaan keluarga tanpa ampun.
              </p>
            </div>
            <div className={`${styles.glassCard} ${getCardClass(1)}`} style={{ zIndex: 2 }}>
              <div className={styles.badgeSolid}>Kepedulian</div>
              <h3 className={styles.cardTitle}>Sistem ini menjebak siapa saja. Kami menolak diam.</h3>
              <p className={styles.cardDesc}>
                Penderitaan dan krisis mental korban itu nyata — bukan aib. Kami hadir karena itu.
              </p>
            </div>
            <div className={`${styles.glassCard} ${getCardClass(2)}`} style={{ zIndex: 3 }}>
              <div className={styles.badgeSolidHighlight}>Visi Tim</div>
              <h3 className={styles.cardTitleHighlight}>Misi Penyelamatan Generasi.</h3>
              <p className={styles.cardDesc}>
                Bantu korban keluar dari siklus utang maut — pakai simulasi, logika, dan data.
              </p>
              <Link href="/kalkulator">
                <button className={styles.ctaButton}>Buktikan di Lab Simulasi</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
