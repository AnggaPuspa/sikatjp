import React from 'react';
import styles from './TentangHero.module.css';
export default function TentangHero() {
  return (
    <>
      <section id="hero" className={styles.fullBleedHero}>
        <div className={styles.dnaCanvas}>
          <div className={styles.gridOverlay}></div>
          <div className={styles.pastelSphereGiant}></div>
          <div className={styles.gradientMask}></div>
        </div>
        <div className={styles.heroContentContainer}>
          <div className={styles.heroContentBottomLeft}>
            <div className={styles.badge}>
              ✦ MISI PENYELAMATAN GENERASI
            </div>
            <h1 className={styles.heroTitle}>Mengapa Kami Ada.</h1>
          </div>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.splitLayout}>
            <div className={styles.leftContent}>
              <h2 className={styles.title}>Misi Penyelamatan Generasi.</h2>
            </div>
            <div className={styles.rightContent}>
              <p className={styles.description}>
                Angka depresi dan bunuh diri akibat judi online dan pinjol ilegal terus melonjak. Jutaan orang terjebak dalam siklus yang sama — kalah, pinjam, kalah lagi.<br /><br />
                SIKAT JP hadir karena penderitaan itu nyata. Kami bantu kamu keluar dari siklus ini — pakai data, simulasi, dan logika. Bukan ceramah.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
