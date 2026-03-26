"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./OpenData.module.css";

export default function OpenDataPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.heroSplit}>
            <div className={styles.heroLeft}>
              <div className={styles.badge}>✦ INTELIJEN DATA</div>
              <h1 className={styles.heroTitle}>
                Data Berbicara.
                <br />
                Keras.
              </h1>
              <p className={styles.heroDesc}>
                Judi online merusak tatanan sosial dan ekonomi negara. SIKAT JP merangkum bukti rekapitulasi PPATK & Satgas PASTI sebagai landasan tak terbantahkan misi edukasi finansial ini.
              </p>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.liveCard}>
                <div className={styles.liveHeader}>
                  <span className={styles.liveDot}></span>
                  <span className={styles.liveLabel}>LIVE</span>
                </div>
                <div className={styles.liveNumber}>Rp 327T</div>
                <p className={styles.liveText}>Perputaran 2023</p>
              </div>
              <div className={styles.liveCard}>
                <div className={styles.liveNumber}>8.6 Juta</div>
                <p className={styles.liveText}>Warga Terdampak</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statNum}>01</span>
            <h3 className={styles.statTitle}>Perputaran Uang Judol</h3>
            <p className={styles.statDesc}>
              Data resmi PPATK: Transaksi semakin kecil namun jumlah pemain meledak, menghasilkan akumulasi perputaran masif.
            </p>
            <div className={styles.chartContainer}>
              <div className={styles.barRow}>
                <span className={styles.barLabel}>Tahun 2023</span>
                <div className={styles.barTrack}>
                  <div className={styles.barFillRed} style={{ width: "100%" }} />
                </div>
                <span className={styles.barValue}>Rp 327 T</span>
              </div>
              <div className={styles.barRow}>
                <span className={styles.barLabel}>Kuartal 1 2024</span>
                <div className={styles.barTrack}>
                  <div className={styles.barFillGray} style={{ width: "35%" }} />
                </div>
                <span className={styles.barValue}>Rp 110 T</span>
              </div>
              <div className={styles.barRow}>
                <span className={styles.barLabel}>Transaksi Anak</span>
                <div className={styles.barTrack}>
                  <div className={styles.barFillGray} style={{ width: "2%" }} />
                </div>
                <span className={styles.barValue}>Rp 293 M</span>
              </div>
            </div>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statNum}>02</span>
            <h3 className={styles.statTitle}>Darurat Anak & Pelajar</h3>
            <p className={styles.statDesc}>
              Hal yang lebih memprihatinkan, anak usia 11-19 tahun terlibat aktif dalam ekosistem judi online dengan nilai kerugian miliaran.
            </p>
            <div className={styles.bigNumber}>197.540</div>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statNum}>03</span>
            <h3 className={styles.statTitle}>Tindakan Represif</h3>
            <p className={styles.statDesc}>
              Sinergi Komdigi, OJK, dan Satgas Pasti membumihanguskan 9.062 entitas ilegal menggunakan teknologi patroli siber AI.
            </p>
            <div className={styles.bigNumber} style={{ color: "#ef4444" }}>5.1 Juta</div>
            <p className={styles.bigNumberLabel}>Situs Diblokir</p>
          </div>
        </div>

        <div className={styles.datasetSection}>
          <div className={styles.datasetHeader}>
            <div className={styles.datasetBadge}>ARSIP DATASET</div>
            <h2 className={styles.datasetTitle}>
              Akses Penuh.
              <br />
              Data Mentah.
            </h2>
            <p className={styles.datasetDesc}>
              Pusat referensi data valid dari rilis Kementerian, ditambah dengan 1 Data Raksasa Proprietary (Master) hasil crawling sosial media independen oleh Tim SIKAT JP.
            </p>
          </div>

          <div className={styles.datasetList}>
            <div className={styles.dataRow}>
              <div className={styles.fileInfo}>
                <div className={styles.fileNameRow}>
                  <span className={styles.fileName}>DB_RAW_Crawl_Curhatan_Korban_TikTok_X.json</span>
                  <span className={styles.masterBadge}>PROPRIETARY MASTER</span>
                </div>
                <span className={styles.fileMeta}>
                  JSON • 1.4 GB • Hasil scraping Artificial Intelligence (NLP) dari 2.1 Juta komentar dan video TikTok/X terkait depresi utang judol. (Akurasi 94%).
                </span>
              </div>
              <button className={styles.downloadBtn} onClick={() => setIsModalOpen(true)}>
                Akses Master
              </button>
            </div>

            <div className={styles.dataRow}>
              <div className={styles.fileInfo}>
                <span className={styles.fileName}>Rilis_PPATK_Perputaran_Judol_23_24.csv</span>
                <span className={styles.fileMeta}>
                  CSV • 3.2 MB • Sumber: Pusat Pelaporan dan Analisis Transaksi Keuangan
                </span>
              </div>
              <button className={styles.downloadBtn} onClick={() => setIsModalOpen(true)}>
                Akses Kunci
              </button>
            </div>

            <div className={styles.dataRow}>
              <div className={styles.fileInfo}>
                <span className={styles.fileName}>Manifesto_Tindakan_Satgas_Pasti_OJK.json</span>
                <span className={styles.fileMeta}>
                  JSON • 1.1 MB • Riwayat 9.062 Pemblokiran Entitas Keuangan Ilegal
                </span>
              </div>
              <button className={styles.downloadBtn} onClick={() => setIsModalOpen(true)}>
                Akses Kunci
              </button>
            </div>

            <div className={styles.dataRow}>
              <div className={styles.fileInfo}>
                <span className={styles.fileName}>Data_Komdigi_Patroli_Siber_AI.csv</span>
                <span className={styles.fileMeta}>
                  CSV • 6.8 MB • Daftar 5.1 Juta Situs Terblokir Artificial Intelligence
                </span>
              </div>
              <button className={styles.downloadBtn} onClick={() => setIsModalOpen(true)}>
                Akses Kunci
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalImageHeader}>
              <Image
                src="/coming-soon-data.png"
                alt="Database Under Construction"
                fill
                style={{ objectFit: "contain", padding: "1.5rem" }}
              />
            </div>
            <div className={styles.modalTextWrapper}>
              <h2 className={styles.modalTitle}>Akses Dibatasi</h2>
              <p className={styles.modalDesc}>
                Infrastruktur database sedang tahap compile internal. Akses publik akan segera dibuka.
              </p>
              <button className={styles.modalCloseBtn} onClick={() => setIsModalOpen(false)}>
                Saya Mengerti
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
