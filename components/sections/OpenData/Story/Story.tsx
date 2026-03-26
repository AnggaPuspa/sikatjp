import styles from "./Story.module.css";

export default function OpenDataStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.badge}>KONTEKS DATA</div>
        <h2 className={styles.title}>
          Lebih dari sekadar statistik.<br />
          Ini adalah rekaman <span className={styles.highlight}>jeritan darurat.</span>
        </h2>
        <p className={styles.description}>
          Di balik jutaan baris data mentah yang disajikan, terdapat narasi kelam dan korban nyata mesin judi dan rentenir digital. Kami merilis dataset ini ke publik bukan untuk sekadar dibaca, tetapi untuk diteliti dan dipotong akar masalahnya.
        </p>
      </div>
    </section>
  );
}
