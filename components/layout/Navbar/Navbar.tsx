"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (href: string) => pathname === href;

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
            <Image
              src="/logo-sikat1.png"
              alt="SIKAT JP Emblem"
              className={styles.logoIcon}
              width={28}
              height={28}
            />
            <span className={styles.logoText}>SIKAT JP</span>
          </Link>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" className={`${styles.navLink} ${isActive("/") ? styles.navLinkActive : ""}`}>
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/tentang" className={`${styles.navLink} ${isActive("/tentang") ? styles.navLinkActive : ""}`}>
                Tentang
              </Link>
            </li>
            <li>
              <Link href="/kalkulator" className={`${styles.navLink} ${isActive("/kalkulator") ? styles.navLinkActive : ""}`}>
                Simulasi
              </Link>
            </li>
            <li>
              <Link href="/open-data" className={`${styles.navLink} ${isActive("/open-data") ? styles.navLinkActive : ""}`}>
                Open Data
              </Link>
            </li>
            <li>
              <Link href="/bantuan-darurat" className={`${styles.navLink} ${isActive("/bantuan-darurat") ? styles.navLinkActive : ""}`}>
                Bantuan
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
          <Link href="/" className={`${styles.mobileLink} ${isActive("/") ? styles.mobileLinkActive : ""}`} onClick={closeMenu}>
            <span className={styles.mobileLinkNum}>01</span>
            <span className={styles.mobileLinkText}>Beranda</span>
          </Link>
          <Link href="/tentang" className={`${styles.mobileLink} ${isActive("/tentang") ? styles.mobileLinkActive : ""}`} onClick={closeMenu}>
            <span className={styles.mobileLinkNum}>02</span>
            <span className={styles.mobileLinkText}>Tentang</span>
          </Link>
          <Link href="/kalkulator" className={`${styles.mobileLink} ${isActive("/kalkulator") ? styles.mobileLinkActive : ""}`} onClick={closeMenu}>
            <span className={styles.mobileLinkNum}>03</span>
            <span className={styles.mobileLinkText}>Simulasi</span>
          </Link>
          <Link href="/open-data" className={`${styles.mobileLink} ${isActive("/open-data") ? styles.mobileLinkActive : ""}`} onClick={closeMenu}>
            <span className={styles.mobileLinkNum}>04</span>
            <span className={styles.mobileLinkText}>Open Data</span>
          </Link>
          <Link href="/bantuan-darurat" className={`${styles.mobileLink} ${isActive("/bantuan-darurat") ? styles.mobileLinkActive : ""}`} onClick={closeMenu}>
            <span className={styles.mobileLinkNum}>05</span>
            <span className={styles.mobileLinkText}>Bantuan</span>
          </Link>
        </nav>
        <div className={styles.mobileFooter}>
          <span className={styles.mobileFooterText}>✦ SIKAT JP — Edukasi Keuangan Berbasis Data</span>
        </div>
      </div>
    </>
  );
}
