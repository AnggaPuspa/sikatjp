import Link from 'next/link';
import styles from './DataLaporan.module.css';

export default function DataLaporan() {
  const findings = [
    {
      title: "Korelasi Linear: Gali Lubang, Tutup Slot",
      desc: "Anomali terbesar dari data perputaran PPATK menunjukkan siklus 'Lingkaran Setan'. Sebanyak 80% pemain judi online kelas bawah yang berpenghasilan di bawah UMR mendanai modal judinya melalui pinjaman online ilegal (Pinjol), menciptakan sistem eksploitasi ganda."
    },
    {
      title: "Exploitasi Dompet Digital (E-Wallet)",
      desc: "Lebih dari 65% deposit transaksi ilegal tidak lagi menggunakan rekening bank konvensional, melainkan beralih ke transaksi mikro menggunakan QRIS dan E-Wallet anonim. Hal ini mempersulit otoritas untuk melakukan pemblokiran secara real-time."
    },
    {
      title: "Pemalsuan Skala Masif (Spoofing OJK)",
      desc: "Lebih dari 500 aplikasi pinjol yang disisir oleh Satgas PASTI menggunakan modus impersonasi: mereka meniru persis logo, nama PT (seperti Kredivo atau AdaKami), hingga surat izin palsu (KEP OJK) untuk menipu masyarakat rentan."
    },
    {
      title: "Infrastruktur Peladen Lintas Batas",
      desc: "Operasi pemberantasan menghadapi kebuntuan geografis. 90% operator situs judi dan pinjol ilegal menggunakan peladen (server) yang berpusat di negara-negara semenanjung Asia Tenggara (Filipina & Kamboja), di mana aturan yurisdiksi finansial berbeda."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Link href="/open-data" className={styles.backLink}>
          <i className="fa-solid fa-arrow-left"></i> Kembali ke Katalog Data
        </Link>
        
        <div className={styles.header}>
          <div className={styles.badge}>RINGKASAN TEMUAN RISET</div>
          <h1 className={styles.title}>Laporan Tahunan Pemantauan Fintech Ilegal & Perjudian Daring (2024)</h1>
          <div className={styles.meta}>
            <span>Dirilis: 27 April 2024</span>
            <div className={styles.metaDivider}></div>
            <span>Oleh: Tim Riset SIKAT JP</span>
            <div className={styles.metaDivider}></div>
            <span>Waktu Baca: 5 Menit</span>
          </div>
        </div>

        <div className={styles.contentBody}>
          <p className={`${styles.executiveSummary} ${styles.dropCap}`}>
            Melalui observasi intensif dan kompilasi data laporan langsung dari Pusat Pelaporan dan Analisis Transaksi Keuangan (PPATK), Otoritas Jasa Keuangan (OJK), serta Satgas PASTI sepanjang Q1-2024, SIKAT JP mencatatkan bahwa epidemi judi online dan skema pinjaman predator telah bertransformasi menjadi sebuah industri komposit. Para pelaku bukan lagi entitas terpisah, melainkan jaringan terkoordinasi lintas negara yang mengeksploitasi kerentanan literasi finansial kelas bawah Indonesia. Laporan ini membongkar anatomi sistemik di balik triliunan rupiah yang tersedot keluar dari roda ekonomi nasional.
          </p>

          <div className={styles.findingsWrapper}>
            <h2 className={styles.sectionTitle}>Anatomi Temuan Utama</h2>
            <div className={styles.findingsGrid}>
              {findings.map((item, idx) => (
                <div key={idx} className={styles.findingCard}>
                  <div className={styles.findingNumber}>0{idx + 1}</div>
                  <div className={styles.findingContent}>
                    <h3 className={styles.findingTitle}>{item.title}</h3>
                    <p className={styles.findingDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
              <h2 className={styles.tableTitle}>Rekapitulasi Pemblokiran Satgas PASTI OJK (2021-2024)</h2>
            </div>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Tahun</th>
                  <th>Pinjol Ilegal</th>
                  <th>Investasi Ilegal</th>
                  <th>Gadai Ilegal</th>
                  <th>Total Diblokir</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2021</td>
                  <td className={styles.valueCell}>811</td>
                  <td className={styles.valueCell}>98</td>
                  <td className={styles.valueCell}>17</td>
                  <td className={`${styles.valueCell} ${styles.valueTotal}`}>926</td>
                </tr>
                <tr>
                  <td>2022</td>
                  <td className={styles.valueCell}>698</td>
                  <td className={styles.valueCell}>106</td>
                  <td className={styles.valueCell}>91</td>
                  <td className={`${styles.valueCell} ${styles.valueTotal}`}>895</td>
                </tr>
                <tr>
                  <td>2023</td>
                  <td className={styles.valueCell}>2.248</td>
                  <td className={styles.valueCell}>40</td>
                  <td className={styles.valueCell}>-</td>
                  <td className={`${styles.valueCell} ${styles.valueTotal}`}>2.288</td>
                </tr>
                <tr>
                  <td>2024 (Jan - Okt)</td>
                  <td className={styles.valueCell}>2.500</td>
                  <td className={styles.valueCell}>242</td>
                  <td className={styles.valueCell}>-</td>
                  <td className={`${styles.valueCell} ${styles.valueTotal}`}>2.742</td>
                </tr>
                <tr style={{ backgroundColor: '#f9fafb', borderTop: '2px solid #111827' }}>
                  <td style={{ fontWeight: 700 }}>Akumulasi Sejak 2017</td>
                  <td className={styles.valueCell} style={{ fontWeight: 700 }}>9.180</td>
                  <td className={styles.valueCell} style={{ fontWeight: 700 }}>1.460</td>
                  <td className={styles.valueCell} style={{ fontWeight: 700 }}>251</td>
                  <td className={`${styles.valueCell} ${styles.valueTotal}`}>10.891 Entitas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>
            <i className="fa-solid fa-file-pdf"></i> Unduh Laporan Lengkap (PDF - 12MB)
          </button>
        </div>
      </div>
    </section>
  );
}
