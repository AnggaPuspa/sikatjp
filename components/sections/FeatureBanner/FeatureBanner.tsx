'use client';
import { useState, useEffect } from 'react';
import styles from './FeatureBanner.module.css';
export default function FeatureBanner() {
  const [lossAmount, setLossAmount] = useState(81450201000);
  useEffect(() => {
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 700000) + 150000;
      setLossAmount(prev => prev + increment);
    }, 80);
    return () => clearInterval(interval);
  }, []);
  const formattedLoss = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(lossAmount);
  return (
    <section className={styles.bannerWrapper}>
      <div className={styles.abstractBg}></div>
      <div className={styles.arc1}></div>
      <div className={styles.arc2}></div>
      <div className={styles.arc3}></div>
      <div className={styles.statsPillWrapper}>
        <div className={styles.avatars}>
          <img src="https://i.pravatar.cc/100?img=33" alt="" className={styles.avatar} />
          <img src="https://i.pravatar.cc/100?img=47" alt="" className={styles.avatar} />
          <img src="https://i.pravatar.cc/100?img=12" alt="" className={styles.avatar} />
        </div>
        <span className={styles.pillText}>🚨 8,8 Juta Warga Korban Judi Online</span>
      </div>
      <div className={styles.glassCard}>
        <div className={styles.counterGroup}>
          <div className={styles.statTitle}>Estimasi Kerugian Nasional Detik Ini</div>
          <div className={styles.statValue}>
            {formattedLoss}
          </div>
        </div>
        <div className={styles.descGroup}>
          <p className={styles.statDesc}>
            Uang rakyat menguap setiap detik. Kamu melawan matematika, bukan keberuntungan.
          </p>
        </div>
      </div>
    </section>
  );
}
