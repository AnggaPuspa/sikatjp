"use client";

import styles from "./Archive.module.css";

interface ArchiveProps {
  onDownloadClick: () => void;
}

const OpenDataArchive = ({ onDownloadClick }: ArchiveProps) => {
    return (
        <div className={styles.datasetSection} id="dataset-archive">
          <div className={styles.datasetHeader}>
            <div className={styles.datasetBadge}>KATALOG DATASET</div>
            <h2 className={styles.datasetTitle}>
              Portal Data Terbuka.
              <br />
              Standar Publik.
            </h2>
            <p className={styles.datasetDesc}>
              Unduh dataset mentah untuk keperluan riset ilmiah, jurnalisme data, maupun pengawasan kolektif terhadap ekosistem keuangan digital Indonesia.
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
              <button className={styles.downloadBtn} onClick={onDownloadClick}>
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
              <button className={styles.downloadBtn} onClick={onDownloadClick}>
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
              <button className={styles.downloadBtn} onClick={onDownloadClick}>
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
              <button className={styles.downloadBtn} onClick={onDownloadClick}>
                Akses Kunci
              </button>
            </div>
          </div>
        </div>
    );
};

export default OpenDataArchive;
