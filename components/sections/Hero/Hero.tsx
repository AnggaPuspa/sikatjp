import Link from 'next/link';
import styles from './Hero.module.css';
export default function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.leftColumn}>
          <div className={styles.badge}>
            ✦ EDUKASI KEUANGAN BERBASIS DATA & SIMULASI
          </div>
          <h1 className={styles.title}>
            <span className={styles.line1}>Uangmu</span>
            <span className={styles.line2}>
              <div className={styles.sphere}></div>
              Kendalimu,
            </span>
            <span className={styles.line3}>
              Bukan Sebaliknya
              <svg
                className={styles.titleStar}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C12 7.52285 16.4772 12 22 12C16.4772 12 12 16.4772 12 22C12 16.4772 7.52285 12 2 12C7.52285 12 12 7.52285 12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h1>
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.description}>
            Bongkar ilusi kemenangan judol dan jerat pinjol ilegal — pakai data dan simulasi, bukan asumsi.
          </p>
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <svg
                className={styles.checkIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Laporan PPATK 2024</span>
            </div>
            <div className={styles.featureItem}>
              <svg
                className={styles.checkIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Panduan Logis OJK</span>
            </div>
          </div>
          <Link href="/kalkulator">
            <button className={styles.ctaButton}>Buktikan Sendiri</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
