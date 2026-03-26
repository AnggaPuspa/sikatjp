import Link from 'next/link';
import styles from './DataJudol.module.css';

export default function DataJudol() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Link href="/open-data" className={styles.backLink}>
          <i className="fa-solid fa-arrow-left"></i> Kembali ke Katalog Data
        </Link>
        <div className={styles.header}>
          <div className={styles.badge}>DATA RESMI PPATK & OJK</div>
          <h1 className={styles.title}>Statistik Ekstrem: Jerat Judi Online di Indonesia</h1>
          <p className={styles.subtitle}>Analisis data kerugian finansial dan jumlah korban yang terlilit utang akibat perjudian daring ilegal, disarikan dari Pusat Pelaporan dan Analisis Transaksi Keuangan (PPATK) 2023 - 2025.</p>
        </div>

        <div className={styles.gridStats}>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Total Perputaran Uang (2024)</span>
            <h3 className={styles.statValue}>Rp359 T</h3>
            <p className={styles.statSub}>Naik 10% dari 2023</p>
            <div className={`${styles.trendBadge} ${styles.trendUp}`}>
              <i className="fa-solid fa-arrow-trend-up"></i> Hampir Tidak Terkendali
            </div>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statLabel}>Jumlah Pemain (2024)</span>
            <h3 className={styles.statValue}>9,7 Juta</h3>
            <p className={styles.statSub}>Orang Terlibat Transaksi</p>
            <div className={`${styles.trendBadge} ${styles.trendDown}`}>
              <i className="fa-solid fa-arrow-trend-down"></i> Turun 68% di 2025 (3,1 Jt)
            </div>
          </div>

          <div className={`${styles.statCard} ${styles.statCardDark}`}>
            <span className={styles.statLabel}>Korban Gali Lubang</span>
            <h3 className={styles.statValue}>3,8 Juta</h3>
            <p className={styles.statSub}>Pemain Terlilit Utang Pinjol</p>
            <div className={`${styles.trendBadge} ${styles.trendUp}`} style={{backgroundColor: 'rgba(239, 68, 68, 0.15)', border: 'none', color: '#fca5a5'}}>
              <i className="fa-solid fa-triangle-exclamation"></i> Kritis
            </div>
          </div>
        </div>

        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <h2 className={styles.tableTitle}>Perbandingan Tahun ke Tahun (YoY)</h2>
          </div>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Tahun Ref.</th>
                <th>Total Perputaran Uang</th>
                <th>Status Pertumbuhan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2022</td>
                <td className={styles.valueCell}>Rp104 Triliun</td>
                <td>
                  <div className={`${styles.trendBadge} ${styles.trendNeutral}`}>
                    <i className="fa-solid fa-minus"></i> Basis Awal Laporan
                  </div>
                </td>
              </tr>
              <tr>
                <td>2023</td>
                <td className={styles.valueCell}>Rp327 Triliun</td>
                <td>
                  <div className={`${styles.trendBadge} ${styles.trendUp}`}>
                    <i className="fa-solid fa-arrow-trend-up"></i> Melonjak 213%
                  </div>
                </td>
              </tr>
              <tr>
                <td>2024</td>
                <td className={styles.valueCell}>Rp359 Triliun</td>
                <td>
                  <div className={`${styles.trendBadge} ${styles.trendUp}`}>
                    <i className="fa-solid fa-arrow-trend-up"></i> Melambat (Hanya Naik 10%)
                  </div>
                </td>
              </tr>
              <tr>
                <td>2025 (Estimasi)</td>
                <td className={styles.valueCell}>Rp155,4 Triliun</td>
                <td>
                  <div className={`${styles.trendBadge} ${styles.trendDown}`}>
                    <i className="fa-solid fa-arrow-trend-down"></i> Ditekan Turun -57% (Efek Satgas)
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.demographicBox}>
          <div className={styles.demoLeft}>
            <h2 className={styles.demoTitle}>Demografi Target Korban</h2>
            <p className={styles.demoDesc}>Berdasarkan data PPATK, operator judi online sengaja menargetkan masyarakat kelas bawah melalui sistem deposit kecil. Ironisnya, mereka adalah kelompok yang paling rentan secara finansial namun menyumbang volume transaksi paling persisten, yang akhirnya dijerat utang lintah darat digital (Pinjol Ilegal).</p>
          </div>
          <div className={styles.demoRight}>
            <div className={styles.barGroup}>
              <div className={styles.barHeader}>
                <span className={styles.barLabel}>Berpenghasilan &lt; Rp 5 Juta/Bulan</span>
                <span className={styles.barValue}>71,6%</span>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFillRed} style={{ width: '71.6%' }}></div>
              </div>
            </div>

            <div className={styles.barGroup}>
              <div className={styles.barHeader}>
                <span className={styles.barLabel}>Berpenghasilan &gt; Rp 5 Juta/Bulan</span>
                <span className={styles.barValue}>28,4%</span>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFillGray} style={{ width: '28.4%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
