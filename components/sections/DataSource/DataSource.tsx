import styles from './DataSource.module.css';
export default function DataSource() {
  return (
    <section className={styles.section} id="sumber-data">
      <div className={styles.container}>
        <div className={styles.splitLayout}>
          <div className={styles.leftColumn}>
            <div className={`${styles.card} ${styles.card1}`}>
              <span className={styles.num}>01</span>
              <h3 className={styles.cardTitle}>Dari Mana</h3>
              <p className={styles.cardDesc}>
                Langsung dari rilis resmi OJK, laporan PPATK, dan survei anonim ribuan korban.
              </p>
            </div>
            <div className={`${styles.card} ${styles.card2}`}>
              <span className={styles.num}>02</span>
              <h3 className={styles.cardTitle}>Bagaimana</h3>
              <p className={styles.cardDesc}>
                Semua angka dicek ulang dari beberapa sumber sebelum ditampilkan.
              </p>
            </div>
            <div className={`${styles.card} ${styles.card3}`}>
              <span className={styles.num}>03</span>
              <h3 className={styles.cardTitle}>Mengapa</h3>
              <p className={styles.cardDesc}>
                Biar kamu bisa nilai sendiri — bukan percaya klaim, tapi baca faktanya.
              </p>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.stickyContent}>
              <div className={styles.badgeSolid}>DARIMANA DATA INI</div>
              <h2 className={styles.title}>
                Transparan.<br />
                Terverifikasi.<br />
                Terbuka.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
