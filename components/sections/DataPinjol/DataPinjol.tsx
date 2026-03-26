"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './DataPinjol.module.css';

export default function DataPinjol() {
  const [searchQuery, setSearchQuery] = useState("");

  const legalList = [
    { name: 'Danamas', pT: 'PT Pasar Dana Pinjaman', no: 'KEP-49/D.05/2017' },
    { name: 'investree', pT: 'PT Investree Radhika Jaya', no: 'KEP-45/D.05/2019' },
    { name: 'amartha', pT: 'PT Amartha Mikro Fintek', no: 'KEP-46/D.05/2019' },
    { name: 'DOMPET Kilat', pT: 'PT Indo Fin Tek', no: 'KEP-47/D.05/2019' },
    { name: 'Boost', pT: 'PT Creative Mobile Adventure', no: 'KEP-48/D.05/2019' },
    { name: 'TOKO MODAL', pT: 'PT Toko Modal Mitra Usaha', no: 'KEP-49/D.05/2019' },
    { name: 'modalku', pT: 'PT Mitrausaha Indonesia Grup', no: 'KEP-81/D.05/2019' },
    { name: 'KTA KILAT', pT: 'PT Pendanaan Teknologi Nusa', no: 'KEP-82/D.05/2019' },
    { name: 'Kredit Pintar', pT: 'PT Kredit Pintar Indonesia', no: 'KEP-83/D.05/2019' },
    { name: 'Maucash', pT: 'PT Astra Welab Digital', no: 'KEP-84/D.05/2019' },
    { name: 'Finmas', pT: 'PT Oriente Mas Sejahtera', no: 'KEP-85/D.05/2019' },
    { name: 'KlikA2C', pT: 'PT Aman Cermat Cepat', no: 'KEP-87/D.05/2019' },
    { name: 'Akseleran', pT: 'PT Akseleran Keuangan Inklusif', no: 'KEP-122/D.05/2019' },
    { name: 'Ammana.id', pT: 'PT Ammana Fintek Syariah', no: 'KEP-123/D.05/2019' },
    { name: 'PinjamanGO', pT: 'PT Dana Pinjaman Inklusif', no: 'KEP-124/D.05/2019' },
    { name: 'KoinP2P', pT: 'PT Lunaria Annua Teknologi', no: 'KEP-125/D.05/2019' },
    { name: 'pohondana', pT: 'PT Pohon Dana Indonesia', no: 'KEP-126/D.05/2019' },
    { name: 'MEKAR', pT: 'PT Mekar Investama Teknologi', no: 'KEP-127/D.05/2019' },
    { name: 'AdaKami', pT: 'PT Pembiayaan Digital Indonesia', no: 'KEP-128/D.05/2019' },
    { name: 'ESTA KAPITAL', pT: 'PT Esta Kapital Fintek', no: 'KEP-129/D.05/2019' },
    { name: 'Indodana', pT: 'PT Artha Dana Teknologi', no: 'KEP-15/D.05/2020' },
    { name: 'JULO', pT: 'PT Julo Teknologi Finansial', no: 'KEP-16/D.05/2020' },
    { name: 'OVO Finansial', pT: 'PT Indonusa Bara Sejahtera', no: 'KEP-19/D.05/2020' },
    { name: 'Pinjam Modal', pT: 'PT Finansial Integrasi Teknologi', no: 'KEP-20/D.05/2020' },
    { name: 'ALAMI', pT: 'PT Alami Fintek Sharia', no: 'KEP-21/D.05/2020' },
    { name: 'AwanTunai', pT: 'PT Simplefi Teknologi Indonesia', no: 'KEP-22/D.05/2020' },
    { name: 'PINJAM YUK', pT: 'PT Kuaikuai Tech Indonesia', no: 'KEP-2/D.05/2021' },
    { name: 'FinPlus', pT: 'PT Rezeki Bersama Teknologi', no: 'KEP-3/D.05/2021' },
    { name: 'Kredinesia', pT: 'PT Kreditku Teknologi Indonesia', no: 'KEP-25/D.05/2021' },
    { name: 'Pintek', pT: 'PT Pinduit Teknologi Indonesia', no: 'KEP-26/D.05/2021' },
    { name: 'ModalRakyat', pT: 'PT Modal Rakyat Indonesia', no: 'KEP-27/D.05/2021' },
    { name: 'UKU', pT: 'PT Teknologi Merlin Sejahtera', no: 'KEP-46/D.05/2021' },
    { name: 'AdaPundi', pT: 'PT Info Tekno Siaga', no: 'KEP-48/D.05/2021' },
    { name: 'Lentera Dana', pT: 'PT Lentera Dana Nusantara', no: 'KEP-49/D.05/2021' },
    { name: 'Modal Nasional', pT: 'PT Solusi Teknologi Finansial', no: 'KEP-50/D.05/2021' },
    { name: 'KlikCair', pT: 'PT Klikcair Magga Jaya', no: 'KEP-103/D.05/2021' }
  ];

  const ilegalList = [
    { name: 'Dana Plus - Lending Aman', pT: 'Developer: goon', no: 'Satgas PASTI 2024' },
    { name: 'DanaPlus - Uang mudah', pT: 'Developer: Sharon Kelley', no: 'Satgas PASTI 2024' },
    { name: 'Dana Kilat - Pinjaman Online', pT: 'com.dana.kilatsuper', no: 'Satgas PASTI 2024' },
    { name: 'U-Box pinjaman mudah', pT: 'com.uuabox.an', no: 'Satgas PASTI 2024' },
    { name: 'Dompet Ajaib-Pinjaman', pT: 'com.ninestars.pinjamandigital', no: 'Satgas PASTI 2024' },
    { name: 'Bantu Pinjam', pT: 'Developer: bantupinjam', no: 'Satgas PASTI 2024' },
    { name: 'Uang Mudah - ayo pinjam', pT: 'PT. Uang Mudah Indonesia', no: 'Satgas PASTI 2024' },
    { name: 'SUMUR.ID - online pinjam uang', pT: 'Developer: glover', no: 'Satgas PASTI 2024' },
    { name: 'Pinjaman Modal Usaha Berita', pT: 'PT. Dana Mandiri Raharja', no: 'Satgas PASTI 2024' },
    { name: 'Tempat Dana', pT: 'Developer: extremi25472', no: 'Satgas PASTI 2024' },
    { name: 'Rupiah Dompet', pT: 'PT. KilatRupiah Tech Indonesia', no: 'Satgas PASTI 2024' },
    { name: 'POIN-TEPAT : pjm kilat', pT: 'Developer: Shirley Claiborne', no: 'Satgas PASTI 2024' },
    { name: 'Tas tunai', pT: 'Developer: Susan Osborne', no: 'Satgas PASTI 2024' },
    { name: 'TunaiLemon', pT: 'Developer: Georgiann Wrenn', no: 'Satgas PASTI 2024' },
    { name: 'Pencairan Cepat', pT: 'Aplikasi Tidak Resmi', no: 'Blokir SWI 2024' },
    { name: 'Pencairan Cepat Pro', pT: 'Aplikasi Tidak Resmi', no: 'Blokir SWI 2024' },
    { name: 'PinjamDisini - Cepat Cair', pT: 'Aplikasi Tidak Resmi', no: 'Satgas PASTI 2024' },
    { name: 'Opsna Cash - Cash Tunai', pT: 'Aplikasi Tidak Resmi', no: 'Blokir Kominfo 2024' },
    { name: 'Dana Mudah - Uang online', pT: 'Aplikasi Tidak Resmi', no: 'Blokir OJK 2024' },
    { name: 'Duit Pintar - Uang Online', pT: 'Aplikasi Tidak Resmi', no: 'Satgas PASTI 2024' },
    { name: 'Dana Pintar - Uangmu', pT: 'Aplikasi Tidak Resmi', no: 'Satgas PASTI 2024' },
    { name: 'Pinjam Mudah Cair Cepat', pT: 'Aplikasi Tidak Resmi', no: 'Blokir SWI 2024' },
    { name: 'Di pinjam - pinjam uang cepat', pT: 'Aplikasi Tidak Resmi', no: 'Satgas PASTI 2024' }
  ];

  const filteredLegal = legalList.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.pT.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.no.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredIlegal = ilegalList.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.pT.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.no.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Link href="/open-data" className={styles.backLink}>
          <i className="fa-solid fa-arrow-left"></i> Kembali ke Katalog Data
        </Link>
        <div className={styles.header}>
          <div className={styles.badge}>DIPERBARUI APRIL 2024</div>
          <h1 className={styles.title}>Database Real-time Pinjol Terklasifikasi</h1>
          <p className={styles.subtitle}>Sinkronisasi langsung dengan daftar rilis Otoritas Jasa Keuangan (OJK) dan direktori larangan operasi oleh SWI/PPATK.</p>
        </div>

        <div className={styles.searchWrapper}>
          <i className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}></i>
          <input 
            type="text" 
            className={styles.searchInput} 
            placeholder="Cari nama aplikasi, PT perusahaan, atau status..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Legal & Berizin OJK</h2>
            </div>
            <div className={styles.list}>
              {filteredLegal.length > 0 ? (
                filteredLegal.map((item, idx) => (
                  <div key={idx} className={styles.listItem}>
                    <div className={styles.itemInfo}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemSub}>{item.pT} • {item.no}</span>
                    </div>
                    <div className={styles.statusLegal}>LEGAL</div>
                  </div>
                ))
              ) : (
                <div className={styles.noResults}>
                  <i className="fa-solid fa-file-circle-xmark"></i>
                  <span>Tidak ada data legal yang cocok</span>
                </div>
              )}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Ilegal & Terblokir</h2>
            </div>
            <div className={styles.list}>
              {filteredIlegal.length > 0 ? (
                filteredIlegal.map((item, idx) => (
                  <div key={idx} className={styles.listItem}>
                    <div className={styles.itemInfo}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemSub}>{item.no}</span>
                    </div>
                    <div className={styles.statusIlegal}>DIBLOKIR</div>
                  </div>
                ))
              ) : (
                <div className={styles.noResults}>
                  <i className="fa-solid fa-ghost"></i>
                  <span>Tidak ada data ilegal yang cocok</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
