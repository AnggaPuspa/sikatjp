import Link from 'next/link';
import styles from './DataSurvei.module.css';

import testimoniesData from '@/app/data/survei/testimonies.json';

export default function DataSurvei() {
  const testimonies = testimoniesData;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Link href="/open-data" className={styles.backLink}>
          <i className="fa-solid fa-arrow-left"></i> Kembali ke Katalog Data
        </Link>
        
        <div className={styles.header}>
          <div className={styles.badge}>DATA RISET LAPANGAN 03</div>
          <h1 className={styles.title}>Survei Korban Langsung</h1>
          <p className={styles.subtitle}>Testimoni anonim hasil *scraping* dari curhatan ribuan korban jerat ganda (Pinjaman Ilegal & Judi Online) di platform komunitas seperti Reddit, X, dan TikTok. Data disusun me-replika format 'Wall of Truth'.</p>
        </div>

        <div className={styles.masonryGrid}>
          {testimonies.map((item, idx) => (
            <div key={idx} className={`${styles.card} ${item.isDark ? styles.cardDark : ''}`}>
              <div className={styles.cardHeader}>
                <div className={styles.platformIcon}>
                  <i className={item.icon}></i>
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{item.profile}</span>
                  <span className={styles.authorHandle}>@ {item.source}</span>
                </div>
              </div>
              <p className={styles.cardContent}>
                "{item.quote}"
              </p>
              <div className={styles.cardMeta}>
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Gaji/Pendapatan</span>
                  <span className={styles.metaValue}>{item.income}</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Kerusakan Lintah Pinjol</span>
                  <span className={`${styles.metaValue} ${styles.debtAlert}`}>{item.debt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.warningBox}>
          <i className={`fa-solid fa-triangle-exclamation ${styles.warningIcon}`}></i>
          <div className={styles.warningContent}>
            <h3>Catatan Penting SIKAT JP</h3>
            <p>Data di atas ditarik langsung (raw data) dari platform publik sebagai representasi murni jeritan masyarakat lapis terbawah. Depresi, kehilangan pekerjaan, hingga dorongan bunuh diri akibat teror Debt Collector Pinjol dan kecanduan algoritma Judol adalah ancaman nyata terhadap fondasi demografi Indonesia. Jika Anda merasa butuh bantuan terkait kesehatan mental, segera hubungi layanan profesional.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
