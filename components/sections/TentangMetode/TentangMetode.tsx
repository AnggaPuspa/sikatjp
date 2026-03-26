"use client";
import React from "react";
import styles from "./TentangMetode.module.css";
export default function TentangMetode() {
  // ===== DATA =====
  const methods = [
    {
      id: "01",
      code: "V",
      title: "VALIDATE",
      subset: "Validasi Realita",
      desc: "Memvalidasi nyata depresi korban finansial tanpa menghakimi. Kami mengakui bahwa jebakan sistematis itu eksis, memutus stigma bahwa korban adalah tersangka tunggal atau pelaku kejahatan dalam siklus ini.",
    },
    {
      id: "02",
      code: "N",
      title: "NAVIGATE",
      subset: "Navigasi Taktis",
      desc: "Menavigasi korban keluar dari siklus gali-lubang lintah darat (Pinjol) dan candu Judi Online melalui pemetaan resolusi hutang matematis yang taktis, logis, dan terstruktur jelas.",
    },
    {
      id: "03",
      code: "O",
      title: "OPTIMIZE",
      subset: "Optimalisasi Nalar",
      desc: "Mengoptimalkan sisa literasi keuangan dasar. Kami membongkar ilusi dengan simulasi rasional (Kalkulator Nalar) untuk mematahkan mitos probabilitas kemenangan algoritma bandar yang dimanipulasi utuh.",
    },
    {
      id: "04",
      code: "I",
      title: "IMPEL NOVELTY",
      subset: "Kebaruan Edukasi",
      desc: "Eksekusi kebaruan (novelty) mutlak dalam edukasi digital. Menghindari format menceramahi, kami menggunakan pendekatan interaktif (simulasi data brutal secara transparan) sebagai garis pertahanan generasi.",
    },
  ];
  // ===== RENDER =====
  return (
    <section className={styles.methodSection}>
      <div className={styles.container}>
        <div className={styles.stickyCol}>
          <div className={styles.stickyContent}>
            <div className={styles.badge}>✦ PROTOKOL OPERASI</div>
            <h2 className={styles.title}>
              Metodologi
              <br />
              INNOVATE.
            </h2>
            <p className={styles.subtitle}>
              Kerangka kerja logis penyusunan simulasi penyelamatan berbasis
              data empiris SIKAT JP. Berangkat dari validasi trauma hingga
              lahirnya kebaruan edukasi finansial masyarakat.
            </p>
          </div>
        </div>
        <div className={styles.scrollCol}>
          <div className={styles.cardsWrapper}>
            {methods.map((item, index) => (
              <div key={index} className={styles.methodCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.codeBlock}>
                    <span className={styles.codeTag}>[{item.code}]</span>
                    <span className={styles.idTag}>TAHAP {item.id}</span>
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <h4 className={styles.cardSubset}>{item.subset}</h4>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
