"use client";
import React, { useRef } from "react";
import styles from "./TentangTimeline.module.css";
export default function TentangTimeline() {
  // ===== STATE =====
  const trackRef = useRef<HTMLDivElement>(null);
  // ===== HANDLERS =====
  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };
  // ===== DATA =====
  const milestones = [
    {
      year: "01",
      id: "MANIFESTO—I",
      title: "Realitas Algoritma Manipulatif",
      desc: "Kami mendeklarasikan fakta bahwa slot digital bukanlah permainan probabilitas atau ketangkasan, melainkan ekosistem bandar yang dirancang mutlak untuk menyedot habis ekonomi pengguna.",
    },
    {
      year: "02",
      id: "MANIFESTO—II",
      title: "Memutus Lingkaran Kembar",
      desc: "Judi online dan jerat pinjaman ilegal (pinjol) adalah monster kembar yang memakan satu sama lain. SIKAT JP mengedukasi publik agar berhenti menambal kekalahan mesin dengan hutang lintah darat berdarah.",
    },
    {
      year: "03",
      id: "MANIFESTO—III",
      title: "Keluarga Sebagai Benteng Utama",
      desc: "Pertahanan terkuat dan rehabilitasi pertama melawan pencucian otak bandar digital ada di ruang keluarga. Kami membekali masyarakat cara untuk mendeteksi sejak dini jebakan manipulasi psikologis.",
    },
    {
      year: "04",
      id: "MANIFESTO—IV",
      title: "Data Aktual Sebagai Senjata",
      desc: "Perlawanan kami tidak didasarkan pada khotbah moralitas sempit, melainkan observasi nyata, penarikan data empiris terukur, dan rekam nyata hancurnya pondasi sosial-ekonomi sipil akibat kartel ini.",
    },
  ];
  // ===== RENDER =====
  return (
    <section className={styles.timelineSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Manifesto SIKAT JP.</h2>
          <div className={styles.navControls}>
            <button
              className={styles.navBtn}
              onClick={scrollLeft}
              aria-label="Geser Kiri"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className={styles.navBtn}
              onClick={scrollRight}
              aria-label="Geser Kanan"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className={styles.timelineTrack} ref={trackRef}>
          <div className={styles.connectingLine}></div>
          {milestones.map((item, index) => (
            <div key={index} className={styles.milestoneNode}>
              <div className={styles.yearPoint}>
                <div className={styles.dot}></div>
                <span className={styles.yearText}>{item.year}</span>
              </div>
              <div className={styles.eventCard}>
                <span className={styles.num}>{item.id}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
