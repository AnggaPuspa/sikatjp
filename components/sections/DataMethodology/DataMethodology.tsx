'use client';
import styles from './DataMethodology.module.css';
export default function DataMethodology() {
  return (
    <section className={styles.section} id="sumber-data">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeSolid}>Metodologi Data</div>
          <h2 className={styles.title}>Dari Mana Data Kami Berasal</h2>
          <p className={styles.subtitle}>
            Semua angka bersumber dari otoritas resmi — bukan klaim sepihak.
          </p>
        </div>
        <div className={styles.diagramWrapper}>
          <div className={styles.topRow}>
            <div className={styles.dataCard}>
              <h4 className={styles.cardTitleHeader}>Sumber Data Otoritas</h4>
              <div className={styles.dataItem}>
                <div className={styles.itemHeader}>
                  <span className={styles.itemNum}>01</span>
                  <strong>Rilis Resmi OJK</strong>
                </div>
                <p>Daftar <strong>pinjol legal &amp; ilegal</strong> yang diperbarui resmi dari OJK.</p>
              </div>
              <div className={styles.dataItem}>
                <div className={styles.itemHeader}>
                  <span className={styles.itemNum}>02</span>
                  <strong>Laporan Intelijen PPATK</strong>
                </div>
                <p>Statistik aliran dana <strong>judi online</strong> &amp; transaksi mencurigakan skala nasional.</p>
              </div>
            </div>
            <div className={styles.arrowLineRight}></div>
            <div className={styles.complexHub}>
              <h5 className={styles.hubLabel}>Processing Layer SIKAT JP</h5>
              <div className={styles.hubInner}>
                <div className={styles.hubCircle}>
                  <span>Validasi<br />Data</span>
                </div>
                <div className={styles.hubFlow}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8l4 4-4 4" />
                  </svg>
                </div>
                <div className={styles.hubCircle}>
                  <span>Edukasi<br />Publik</span>
                </div>
              </div>
            </div>
            <div className={styles.arrowLineLeft}></div>
            <div className={`${styles.dataCard} ${styles.rightDataCard}`}>
              <div className={styles.rightCardInner}>
                <h4 className={styles.cardTitleHeader}>Data Riset Lapangan</h4>
                <div className={styles.dataItem}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemNum}>03</span>
                    <strong>Survei Korban Langsung</strong>
                  </div>
                  <p>Testimoni anonim langsung dari <strong>ribuan korban</strong> pinjol &amp; judi online.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.branchRow}>
            <div className={styles.branchDropMain}></div>
            <div className={styles.branchHorizontal}>
              <div className={styles.branchChild}></div>
              <div className={styles.branchChild}></div>
              <div className={styles.branchChild}></div>
            </div>
          </div>
          <div className={styles.outputRow}>
            <div className={styles.outputPill}>
              <div className={styles.outputIconWrapper}>
                <i className="fa-solid fa-server" style={{ fontSize: '2.2rem', color: '#111827' }}></i>
              </div>
              <strong>Database Pinjol</strong>
              <span>Daftar Lengkap Pinjol Legal &amp; Ilegal</span>
              <div className={styles.outputActions}>
                <a href="/data/pinjol" className={styles.actionBtnPrimary}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Lihat Data
                </a>
                <a href="#" className={styles.actionBtnSecondary} download>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </a>
              </div>
            </div>
            <div className={styles.outputPill}>
              <div className={styles.outputIconWrapper}>
                <i className="fa-solid fa-chart-line" style={{ fontSize: '2.2rem', color: '#111827' }}></i>
              </div>
              <strong>Statistik Judol</strong>
              <span>Data Kerugian &amp; Korban Judi Online</span>
              <div className={styles.outputActions}>
                <a href="/data/judol" className={styles.actionBtnPrimary}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Lihat Data
                </a>
                <a href="#" className={styles.actionBtnSecondary} download>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </a>
              </div>
            </div>
            <div className={styles.outputPill}>
              <div className={styles.outputIconWrapper}>
                <i className="fa-solid fa-file-shield" style={{ fontSize: '2.2rem', color: '#111827' }}></i>
              </div>
              <strong>Laporan Tahunan</strong>
              <span>Ringkasan Temuan Riset SIKAT JP</span>
              <div className={styles.outputActions}>
                <a href="/data/laporan" className={styles.actionBtnPrimary}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Lihat Data
                </a>
                <a href="#" className={styles.actionBtnSecondary} download>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
