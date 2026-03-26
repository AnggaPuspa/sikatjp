"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
      >
        <nav
          className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
        >
          <Link href="/" className={styles.logoContainer} onClick={closeMenu}>
            <svg
              className={styles.logoIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12 2C12 7.52285 16.4772 12 22 12C16.4772 12 12 16.4772 12 22C12 16.4772 7.52285 12 2 12C7.52285 12 12 7.52285 12 2Z" />
            </svg>
            <span className={styles.logoText}>SIKAT JP</span>
          </Link>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" className={styles.navLink}>
                Markas Pusat
              </Link>
            </li>
            <li>
              <Link href="/tentang" className={styles.navLink}>
                Manifesto
              </Link>
            </li>
            <li>
              <Link href="/kalkulator" className={styles.navLink}>
                Lab Simulasi
              </Link>
            </li>
            <li>
              <Link href="/bantuan-darurat" className={styles.navLink}>
                Mitigasi Darurat
              </Link>
            </li>
          </ul>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ""}`}
        onClick={closeMenu}
      />
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <nav className={styles.mobileNav}>
          <Link href="/" className={styles.mobileLink} onClick={closeMenu}>
            <span className={styles.mobileLinkNum}>01</span>
            <span className={styles.mobileLinkText}>Markas Pusat</span>
          </Link>
          <Link href="/tentang" className={styles.mobileLink} onClick={closeMenu}>
            <span className={styles.mobileLinkNum}>02</span>
            <span className={styles.mobileLinkText}>Manifesto</span>
          </Link>
          <Link href="/kalkulator" className={styles.mobileLink} onClick={closeMenu}>
            <span className={styles.mobileLinkNum}>03</span>
            <span className={styles.mobileLinkText}>Lab Simulasi</span>
          </Link>
          <Link href="/bantuan-darurat" className={styles.mobileLink} onClick={closeMenu}>
            <span className={styles.mobileLinkNum}>04</span>
            <span className={styles.mobileLinkText}>Mitigasi Darurat</span>
          </Link>
        </nav>
        <div className={styles.mobileFooter}>
          <span className={styles.mobileFooterText}>✦ SIKAT JP — Edukasi Keuangan Berbasis Data</span>
        </div>
      </div>
    </>
  );
}
