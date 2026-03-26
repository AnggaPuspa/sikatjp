"use client";

import styles from "./Stats.module.css";

const OpenDataStats = () => {
  return (
    <div className={styles.statsGrid}>
      {/* Story 01: The Dark Capital Flow - LEFT FEATURED */}
      <div className={styles.leftColumn}>
        <div className={`${styles.statCard} ${styles.featuredCard}`}>
          <span className={styles.statNum}>01 / Arus Modal Bayangan</span>
          <h2 className={styles.statTitle}>
            Rp 327 <span className={styles.unit}>Triliun</span>
          </h2>
          <p className={styles.statDesc}>
            Monitoring integratif arus modal bayangan di ekosistem perbankan nasional guna mengidentifikasi pola kejahatan finansial digital secara real-time.
          </p>

          <div className={styles.chartContainer}>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>Tahun 2023</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: "100%", background: "#ef4444" }} />
              </div>
              <span className={styles.barValue}>327 T</span>
            </div>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>Q1 2024</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: "35%", background: "#111827" }} />
              </div>
              <span className={styles.barValue}>110 T</span>
            </div>
          </div>

          <div className={styles.bigStats} style={{ marginTop: '3rem' }}>
            <p className={styles.statDesc} style={{ marginBottom: '1rem', color: '#9ca3af', fontSize: '0.85rem' }}>
              Data menunjukkan perputaran dana ilegal yang terus bermutasi melalui instrumen transaksi nontunai dan dompet digital.
            </p>
          </div>
        </div>
      </div>

      {/* Story 02 & 03: The Impact - RIGHT SPLIT */}
      <div className={styles.rightColumn}>
        <div className={`${styles.statCard} ${styles.impactCard}`}>
          <span className={styles.statNum}>02 / Demografi Terdampak</span>
          <h3 className={styles.statTitle}>Warga Jeratan.</h3>
          <p className={styles.statDesc}>
            Analisis sebaran partisipasi usia dini pada platform keuangan berisiko tinggi.
          </p>
          <div className={styles.bigNumber}>
            197.5 <span className={styles.unit}>K</span>
          </div>
          <p className={styles.statDesc} style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>
            *Estimasi usia 11 - 19 tahun berdasarkan aktivitas siber intelijen.
          </p>
        </div>

        <div className={`${styles.statCard} ${styles.actionCard}`}>
          <span className={styles.statNum}>03 / Mitigasi Agresif</span>
          <h3 className={styles.statTitle}>Intervensi Ruang Digital.</h3>
          <p className={styles.statDesc}>
            Eskalasi pembersihan entitas ilegal dari ekosistem digital Indonesia melalui sistem patroli AI.
          </p>
          <div className={styles.actionValue}>5.1 JUTA</div>
          <p className={styles.statDesc} style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.5rem' }}>
            Domain & Konten Diblokir
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpenDataStats;
