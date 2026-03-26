import React from 'react';
import styles from './BantuanHero.module.css';
export default function BantuanHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.pulse}></span>
          MODE MITIGASI DARURAT
        </div>
        <h1 className={styles.title}>
          Putus Rantai<br />
          Destruksinya<br />
          Sekarang <span className={styles.sparkle}>✧</span>
        </h1>
        <p className={styles.desc}>
          Kepanikan finansial akibat judi online adalah fase paling rentan. Negara dan psikolog profesional siap menjadi jalur pelarian Anda. Semua akses darurat di bawah ini dijamin anonim dan bebas biaya.
        </p>
      </div>
    </section>
  );
}
