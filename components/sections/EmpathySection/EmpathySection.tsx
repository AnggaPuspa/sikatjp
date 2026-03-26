import styles from './EmpathySection.module.css';
export default function EmpathySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeSolid}>REALITA</div>
          <h2 className={styles.title}>
            Siapapun Bisa Terjebak.
          </h2>
          <p className={styles.subtitle}>
            Depresi finansial itu nyata. Kamu tidak sendirian.
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.mainCard}>
            <h3 className={styles.mainQuote}>
              "Gaji 10 Juta, tapi utang 30 Juta dan tabungan habis dalam semalam karena game Aviator."
            </h3>
            <div className={styles.author}>
              <span className={styles.badge}>Identitas Disamarkan</span>
              <span className={styles.authorRole}>Pegawai Swasta, Anonim</span>
            </div>
          </div>
          <div className={styles.sideColumn}>
            <div className={styles.smallCard}>
              <p className={styles.smallQuoteText}>"Pinjol neror ke kantor, HRD panggil gue. Rasanya mau hilang aja dari dunia ini."</p>
              <span className={styles.badge}>Anonim</span>
            </div>
            <div className={`${styles.smallCard} ${styles.staggeredCard}`}>
              <p className={styles.smallQuoteText}>"Awalnya iseng depo 50k buat weekend, lama-lama diam-diam BPKB motor mertua melayang."</p>
              <span className={styles.badge}>Anonim</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
