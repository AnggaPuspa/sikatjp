import styles from './FeaturesSection.module.css';
import Link from 'next/link';
export default function FeaturesSection() {
  return (
    <section className={styles.section} id="fitur">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeSolid}>SENJATA KAMU</div>
          <h2 className={styles.title}>
            Alat yang Kamu Butuhkan.
          </h2>
          <p className={styles.subtitle}>
            Simulasi dan kalkulator yang buktikan fakta di balik judol & pinjol — biar kamu lihat sendiri.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          <div className={styles.calcCard}>
            <div className={styles.calcContent}>
              <h3 className={styles.calcTitle}>
                Kalkulator Realita Judol
              </h3>
              <p className={styles.calcDesc}>
                Masukkan nominal deposit kamu, lihat sendiri gimana uangmu pelan-pelan jadi Rp 0.
              </p>
              <Link href="/kalkulator" style={{ textDecoration: 'none', width: '100%' }}>
                <button className={styles.ctaButton}>Coba Simulasi</button>
              </Link>
            </div>
            <div className={styles.calcVisual}>
              <div className={styles.algoPipeline}>
                <div className={styles.pipeStep}>
                  <span className={styles.pipeText}>Deposit Masuk</span>
                </div>
                <div className={styles.pipeArrow}></div>
                <div className={styles.pipeMain}>
                  <span className={styles.pipeLabel}>SISTEM BANDAR</span>
                  <div className={styles.pipeLogic}>Ilusi Menang ➔ Manipulasi Drop</div>
                </div>
                <div className={styles.pipeArrow}></div>
                <div className={styles.pipeEnd}>
                  <span className={styles.pipeTextRed}>Saldo Rp 0</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dataCard}>
            <div className={styles.dataHeader}>
              <span className={styles.badgeSolid}>Debt Snowball</span>
            </div>
            <h3 className={styles.smallTitle}>Simulasi Bola<br />Salju Pinjol</h3>
            <p className={styles.smallDesc}>
              Hitung rute pelunasan logis dengan hidup hemat. Tanpa gali lubang tutup lubang.
            </p>
          </div>
          <div className={styles.advocacyCard}>
            <h3 className={styles.smallTitle}>Panic Button 119</h3>
            <p className={styles.smallDesc}>
              Nyawamu lebih berharga dari hutang manapun. Akses bantuan darurat sekarang.
            </p>
            <button className={styles.secondaryButton}>Hubungi Sekarang</button>
          </div>
        </div>
      </div>
    </section>
  );
}
