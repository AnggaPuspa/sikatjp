import React from "react";
import styles from "./BantuanHotline.module.css";
export default function BantuanHotline() {
  // ===== DATA =====
  const hotlines = [
    {
      id: "01",
      title: "Pendampingan SIKAT JP",
      desc: "Masih bingung harus mulai darimana? Ayo diskusi kalkulasi logis pengentasan utang dan restrukturisasi (Debt Snowball).",
      action: "Mulai Sesi Chat Anonim",
      tag: "BANTUAN EKSKLUSIF",
      link: "/chat",
      btnClass: styles.sikatBtn,
    },
    {
      id: "02",
      title: "Satgas PASTI",
      desc: "Laporan jeratan pinjaman online ilegal, penagihan kasar/intimidasi, dan pembobolan data pribadi peminjam.",
      action: "Hubungi OJK (157)",
      tag: "FINANSIAL & HUKUM",
      link: "tel:157",
      btnClass: styles.redBtn,
    },
    {
      id: "03",
      title: "Sehat Jiwa",
      desc: "Bantuan darurat untuk depresi pikiran gelap, atau krisis mental lelah akibat tekanan kerugian finansial judol.",
      action: "Panggil (119 Ext. 8)",
      tag: "PSIKOLOGIS (KEMENKES)",
      link: "tel:119",
      btnClass: styles.blueBtn,
    },
    {
      id: "04",
      title: "Aduan Konten",
      desc: "Blokir rekening penipu, laporkan situs web judi online, dan putus interaksi rantai transaksi komplotan.",
      action: "Lapor Kominfo",
      tag: "SITUS & REKENING",
      link: "https://cekrekening.id/",
      btnClass: styles.amberBtn,
    },
  ];
  // ===== RENDER =====
  return (
    <section className={styles.capsuleWrapper}>
      <div className={styles.capsule}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {hotlines.map((item) => (
              <div key={item.id} className={styles.card}>
                <span className={styles.badge}>{item.tag}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <a
                  href={item.link}
                  className={`${styles.actionBtn} ${item.btnClass || ""}`}
                >
                  <span>{item.action}</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.arrowIcon}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
