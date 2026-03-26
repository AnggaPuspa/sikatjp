"use client";

import styles from "./Hero.module.css";

const OpenDataHero = () => {
    return (
        <div id="hero" className={styles.heroSection}>
          <div className={styles.heroSplit}>
            <div className={styles.heroLeft}>

              <h1 className={styles.heroTitle}>
                Transparansi. <span className={styles.highlight}>Akuntabel.</span>
                <br />
                <span style={{ whiteSpace: 'nowrap' }}>Satu Portal Data.</span>
              </h1>
              <p className={styles.heroDesc}>
                Dataset riil otoritas keuangan negara untuk mendukung transparansi dan kebijakan publik berbasis bukti.
              </p>
              
              <button 
                className={styles.heroCta}
                onClick={() => {
                  const el = document.getElementById("dataset-archive");
                  if(el) el.scrollIntoView({behavior: 'smooth'});
                }}
              >
                Akses Database <span className={styles.ctaArrow}><i className="fa-solid fa-arrow-right"></i></span>
              </button>

              <div className={styles.heroFooter}>
                <p className={styles.heroFooterText}>Sumber Utama Integritas Data Publik</p>
                <div className={styles.heroLogos}>
                  <a href="https://www.ppatk.go.id/" target="_blank" rel="noopener noreferrer" className={styles.heroLogo}>PPATK</a>
                  <a href="https://www.komidigi.go.id/" target="_blank" rel="noopener noreferrer" className={styles.heroLogo}>KOMDIGI</a>
                  <a href="https://www.ojk.go.id/" target="_blank" rel="noopener noreferrer" className={styles.heroLogo}>OJK</a>
                  <a href="https://www.ojk.go.id/id/berita-dan-kegiatan/publikasi/Pages/Satgas-PASTI.aspx" target="_blank" rel="noopener noreferrer" className={styles.heroLogo}>SATGAS PASTI</a>
                </div>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.topCardsRow}>
                <div className={`${styles.liveCard} ${styles.cardSales}`}>
                  <div className={styles.cardHeaderSmall}>
                    <div className={styles.cardInfoGroup}>
                      <span className={styles.cardHeaderTitle}>Perputaran 2023</span>
                      <span className={styles.cardHeaderDate}>Apr 1 - 30</span>
                    </div>
                    <span className={styles.cardSettingsIcon}><i className="fa-solid fa-gear"></i></span>
                  </div>
                  <div className={styles.mainValue}>+Rp 327<span className={styles.unitUnderline}>T</span></div>
                  <p className={styles.cardSubValueText}>Akumulasi dari tahun lalu</p>
                  <div className={styles.stripedProgressContainer}>
                    <div className={styles.stripedProgressFill} style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div className={`${styles.liveCard} ${styles.cardUsers}`}>
                  <div className={styles.cardHeaderSmall}>
                    <span className={styles.cardHeaderTitleLight}>Warga Terdampak</span>
                  </div>
                  <div className={styles.mainValueLight}>8.6 <span className={styles.unitUnderlineLight}>jt</span></div>
                  <div className={styles.miniBarChart}>
                    <div className={styles.miniBar} style={{ height: '40%' }}></div>
                    <div className={styles.miniBar} style={{ height: '70%' }}></div>
                    <div className={`${styles.miniBar} ${styles.miniBarActive}`} style={{ height: '100%' }}>
                      <span className={styles.miniBarTrend}>+15%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.bottomMainContainer}>
                <div className={styles.mainOrbWrapper}>
                   <div className={styles.liquidBubble}></div>
                </div>
                
                <div className={`${styles.liveCard} ${styles.cardFloatingBottom}`}>
                  <div className={styles.cardHeaderSmall}>
                    <div className={styles.cardInfoGroup}>
                      <span className={styles.cardHeaderTitle}>Darurat Pelajar</span>
                      <span className={styles.cardHeaderDate}>Usia 11 - 19 th</span>
                    </div>
                  </div>
                  <div className={styles.valueRow}>
                    <div className={styles.mainValue}>197.5 <span className={styles.unitUnderline}>K</span></div>
                    <div className={styles.trendPillGreen}>+300%</div>
                  </div>
                  <div className={styles.solidProgressContainer}>
                    <div className={styles.solidProgressFill} style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default OpenDataHero;
