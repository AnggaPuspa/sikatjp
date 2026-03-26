'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.bannerWrapper}>
        <div className={styles.abstractBg}></div>
        <div className={styles.arc1}></div>
        <div className={styles.arc2}></div>
        <div className={styles.contentOverlay}>
          <div className={styles.leftColumn}>
            <div className={styles.sphereWrapper}>
              <div className={styles.sphere}></div>
              <h2 className={styles.heroTitle}>Waktunya<br />Bertindak.</h2>
            </div>
            <p className={styles.description}>
              Langkah kecil kamu hari ini bisa menyelamatkan masa depan seseorang. Bagikan edukasi, hentikan siklus.
            </p>
            <button className={styles.ctaButton}>
              Amankan Masa Depan
              <svg 
                className={styles.arrowIcon}
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor" 
                width={20} 
                height={20}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
          <div className={styles.glassCard}>
            <div className={styles.linksGrid}>
              <div className={styles.linkGroup}>
                <span className={styles.groupTitle}>Radar Navigasi</span>
                <Link href="/" className={styles.linkItem}>Markas Pusat (Home)</Link>
                <Link href="/tentang" className={styles.linkItem}>Manifesto Gerakan (About)</Link>
                <Link href="/kalkulator" className={styles.linkItem}>Laboratorium Analitik (Tools)</Link>
                <Link href="/bantuan-darurat" className={styles.linkItem}>Unit Mitigasi Darurat (Help)</Link>
              </div>
              <div className={styles.linkGroup}>
                <span className={styles.groupTitle}>Akses Cepat Hotline</span>
                <Link href="/bantuan-darurat" className={styles.linkItem}>Lapor Satgas PASTI / OJK (157)</Link>
                <Link href="/bantuan-darurat" className={styles.linkItem}>Panggil Layanan Sehat Jiwa (119)</Link>
                <Link href="/bantuan-darurat" className={styles.linkItem}>Aduan Blokir Rekening</Link>
                <Link href="/bantuan-darurat" className={styles.linkItem}>Konseling Restrukturisasi (Bot)</Link>
              </div>
            </div>
            <div className={styles.copyright}>
              <strong>© 2026 SIKAT JP. Hak Cipta Dilindungi.</strong><br/>
              Platform independen, bukan penyelenggara perjudian / peminjaman online.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
