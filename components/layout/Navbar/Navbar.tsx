"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const dataMenuItems = [
  {
    href: "/data/pinjol",
    icon: "fa-solid fa-landmark",
    title: "Statistik Pinjol",
    desc: "Data OJK & Satgas PASTI entitas ilegal 2024–2025",
  },
  {
    href: "/data/judol",
    icon: "fa-solid fa-dice",
    title: "Statistik Judol",
    desc: "Kerugian nasional & tren korban judi online per tahun",
  },
  {
    href: "/data/laporan",
    icon: "fa-solid fa-file-lines",
    title: "Laporan Tahunan",
    desc: "Ringkasan temuan riset lapangan SIKAT JP",
  },
  {
    href: "/data/survei",
    icon: "fa-solid fa-comments",
    title: "Survei Korban",
    desc: "Testimoni anonim langsung dari ribuan korban nyata",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dataDropdownOpen, setDataDropdownOpen] = useState(false);
  const [mobileDataOpen, setMobileDataOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const isDataActive = pathname.startsWith("/data");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDataDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileDataOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
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
              <Link href="/" className={`${styles.navLink} ${isActive("/") && !isDataActive ? styles.navLinkActive : ""}`}>
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

            {/* DATA MEGA DROPDOWN */}
            <li className={styles.dropdownWrapper} ref={dropdownRef}>
              <button
                className={`${styles.navLink} ${styles.dropdownTrigger} ${isDataActive || dataDropdownOpen ? styles.navLinkActive : ""}`}
                onClick={() => setDataDropdownOpen((v) => !v)}
                aria-expanded={dataDropdownOpen}
              >
                Open Data
                <i className={`fa-solid fa-chevron-down ${styles.chevron} ${dataDropdownOpen ? styles.chevronOpen : ""}`} />
              </button>

              {dataDropdownOpen && (
                <div className={styles.megaDropdown}>
                  <div className={styles.dropdownHeader}>
                    <span className={styles.dropdownLabel}>DATA RISET LAPANGAN</span>
                    <Link href="/open-data" className={styles.dropdownSeeAll} onClick={() => setDataDropdownOpen(false)}>
                      Lihat Katalog Lengkap <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                  <div className={styles.dropdownGrid}>
                    {dataMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`${styles.dropdownItem} ${pathname === item.href ? styles.dropdownItemActive : ""}`}
                        onClick={() => setDataDropdownOpen(false)}
                      >
                        <div className={styles.dropdownItemIcon}>
                          <i className={item.icon} />
                        </div>
                        <div className={styles.dropdownItemText}>
                          <span className={styles.dropdownItemTitle}>{item.title}</span>
                          <span className={styles.dropdownItemDesc}>{item.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
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
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <nav className={styles.mobileNav}>
          <Link href="/" className={`${styles.mobileLink} ${isActive("/") && !isDataActive ? styles.mobileLinkActive : ""}`} onClick={closeMenu}>
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

          {/* Mobile Data accordion */}
          <div className={styles.mobileAccordion}>
            <button
              className={`${styles.mobileLink} ${styles.mobileAccordionTrigger} ${isDataActive ? styles.mobileLinkActive : ""}`}
              onClick={() => setMobileDataOpen((v) => !v)}
            >
              <span className={styles.mobileLinkNum}>04</span>
              <span className={styles.mobileLinkText}>Open Data</span>
              <i className={`fa-solid fa-chevron-down ${styles.mobileChevron} ${mobileDataOpen ? styles.mobileChevronOpen : ""}`} />
            </button>
            {mobileDataOpen && (
              <div className={styles.mobileSubLinks}>
                <Link href="/open-data" className={styles.mobileSubLink} onClick={closeMenu}>
                  <i className="fa-solid fa-table-list" /> Katalog Lengkap
                </Link>
                {dataMenuItems.map((item) => (
                  <Link key={item.href} href={item.href} className={styles.mobileSubLink} onClick={closeMenu}>
                    <i className={item.icon} /> {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

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
