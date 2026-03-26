"use client";

import styles from "./Archive.module.css";

interface ArchiveProps {
  onDownloadClick: () => void;
}

const OpenDataArchive = ({ onDownloadClick }: ArchiveProps) => {
  return (
    <section className={styles.datasetSection} id="dataset-archive">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeSolid}>KATALOG DATASET</div>
          <h2 className={styles.title}>
            Portal Data Terbuka.
          </h2>
          <p className={styles.subtitle}>
            Unduh dataset mentah untuk keperluan riset ilmiah, jurnalisme data, maupun pengawasan kolektif terhadap ekosistem keuangan digital Indonesia.
          </p>
        </div>

        <div className={styles.datasetList}>
          
          <div className={styles.dataCard}>
            <div className={styles.dataHeader}>
              <span className={styles.badgeSolid}>JSON</span>
              <span className={styles.masterBadge}>PROPRIETARY MASTER</span>
            </div>
            <h3 className={styles.fileName}>DB_RAW_Crawl_Curhatan_Korban_TikTok_X.json</h3>
            <p className={styles.fileDesc}>
              Hasil scraping Artificial Intelligence (NLP) dari 2.1 Juta komentar dan video TikTok/X terkait depresi utang judol. (Akurasi 94%).
            </p>
            <p className={styles.fileMeta}>File Size: 1.4 GB</p>
            <button className={styles.ctaButton} onClick={onDownloadClick}>Akses Master</button>
          </div>

          <div className={styles.dataCard}>
            <div className={styles.dataHeader}>
              <span className={styles.badgeSolid}>CSV</span>
            </div>
            <h3 className={styles.fileName}>Rilis_PPATK_Perputaran_Judol_23_24.csv</h3>
            <p className={styles.fileDesc}>
              Dataset rekapitulasi mutasi dan perputaran dana dari Pusat Pelaporan dan Analisis Transaksi Keuangan.
            </p>
            <p className={styles.fileMeta}>File Size: 3.2 MB</p>
            <button className={styles.ctaButton} onClick={onDownloadClick}>Akses Kunci</button>
          </div>

          <div className={styles.dataCard}>
            <div className={styles.dataHeader}>
              <span className={styles.badgeSolid}>JSON</span>
            </div>
            <h3 className={styles.fileName}>Manifesto_Tindakan_Satgas_Pasti_OJK.json</h3>
            <p className={styles.fileDesc}>
              Log dan riwayat dari 9.062 pemblokiran entitas keuangan ilegal oleh otoritas pengawas.
            </p>
            <p className={styles.fileMeta}>File Size: 1.1 MB</p>
            <button className={styles.ctaButton} onClick={onDownloadClick}>Akses Kunci</button>
          </div>

          <div className={styles.dataCard}>
            <div className={styles.dataHeader}>
              <span className={styles.badgeSolid}>CSV</span>
            </div>
            <h3 className={styles.fileName}>Data_Komdigi_Patroli_Siber_AI.csv</h3>
            <p className={styles.fileDesc}>
              Daftar 5.1 Juta domain dan situs terblokir hasil crawling mesin Artificial Intelligence Komdigi.
            </p>
            <p className={styles.fileMeta}>File Size: 6.8 MB</p>
            <button className={styles.ctaButton} onClick={onDownloadClick}>Akses Kunci</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OpenDataArchive;
