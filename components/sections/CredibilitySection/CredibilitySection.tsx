"use client";
import { useRef, useState } from "react";
import styles from "./CredibilitySection.module.css";

// ===== DATA =====
const AWARDS = [
  {
    year: "2026",
    brand: "SIKAT JP",
    title: "The Best Public Interest Tech",
    capaian: "Gold Medal Nusantara Innovation Award Kategori Advokasi Digital.",
    tingkat: "Nasional",
  },
  {
    year: "2026",
    brand: "SIKAT JP",
    title: "Most Impactful Social Tool",
    capaian: "GovTech Summit Kategori Keselamatan Finansial & Mitigasi Publik.",
    tingkat: "Internasional",
  },
  {
    year: "2026",
    brand: "KEMENKOMINFO",
    title: "Dukungan Validasi Resmi",
    capaian:
      "Infrastruktur rujukan utama penyuluhan literasi digital dan keamanan siber.",
    tingkat: "Kementerian Negara",
  },
  {
    year: "2025",
    brand: "OJK & SATGAS PASTI",
    title: "Ekosistem Taktis Hukum",
    capaian:
      "Kolaborasi langsung pemetaan radar pemblokiran entitas lintah darat.",
    tingkat: "Otoritas Regulasi",
  },
  {
    year: "2025",
    brand: "CYBER POLRI",
    title: "Mitigasi Lintas Batas",
    capaian: "Pelaporan terpadu sindikat judi online via engine API.",
    tingkat: "Penegak Hukum",
  },
  {
    year: "2024",
    brand: "LPS",
    title: "Akurasi Rasionalitas",
    capaian:
      "Validasi kalkulator penyelamatan finansial untuk mitigasi hutang riil.",
    tingkat: "Nasional",
  },
];

export default function CredibilitySection() {
  // ===== STATE =====
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeYear, setActiveYear] = useState("2026");

  // ===== HANDLERS =====
  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  const scrollToYear = (year: string) => {
    setActiveYear(year);
    const index = AWARDS.findIndex((item) => item.year === year);
    if (index !== -1 && scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * 320,
        behavior: "smooth",
      });
    }
  };

  const handleContainerScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (scrollLeft >= maxScroll - 10) {
      setActiveYear("2024");
      return;
    }
    const focalPoint = scrollLeft + clientWidth * 0.5;
    const currentIndex = Math.floor(focalPoint / 320);
    if (currentIndex >= 5) setActiveYear("2024");
    else if (currentIndex >= 3) setActiveYear("2025");
    else setActiveYear("2026");
  };

  // ===== RENDER =====
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Kredibilitas & Validasi Institusional
          </h2>
        </div>

        <div className={styles.controlsRow}>
          <div className={styles.filterTabs}>
            {["2026", "2025", "2024"].map((year) => (
              <button
                key={year}
                className={`${styles.yearTab} ${activeYear === year ? styles.activeTab : ""}`}
                onClick={() => scrollToYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
          <div className={styles.navButtons}>
            <button
              className={styles.navBtn}
              onClick={() => handleScroll("left")}
              aria-label="Scroll Left"
            >
              ‹
            </button>
            <button
              className={styles.navBtn}
              onClick={() => handleScroll("right")}
              aria-label="Scroll Right"
            >
              ›
            </button>
          </div>
        </div>

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineAxis} />
          <div
            className={styles.scrollContainer}
            ref={scrollRef}
            onScroll={handleContainerScroll}
          >
            <div className={styles.timelineGrid}>
              {AWARDS.map((award, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.node} />
                  <span className={styles.brandSubtitle}>
                    {award.year} — {award.brand}
                  </span>
                  <h3 className={styles.awardTitle}>{award.title}</h3>
                  <div className={styles.metaGroup}>
                    <span className={styles.metaLabel}>Pencapaian</span>
                    <p className={styles.metaValue}>{award.capaian}</p>
                  </div>
                  <div className={styles.metaGroup}>
                    <span className={styles.metaLabel}>Tingkat</span>
                    <p className={styles.metaHighlight}>{award.tingkat}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
