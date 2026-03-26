"use client";

import { useState } from "react";
import styles from "@/components/sections/OpenData/OpenData.module.css";
import OpenDataHero from "@/components/sections/OpenData/Hero/Hero";
import OpenDataArchive from "@/components/sections/OpenData/Archive/Archive";
import OpenDataModal from "@/components/sections/OpenData/Modal/Modal";
import DataMethodology from "@/components/sections/DataMethodology/DataMethodology";

export default function OpenDataPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className={styles.section}>
      <div className={styles.container}>
        <OpenDataHero />
        <DataMethodology />
        <OpenDataArchive onDownloadClick={() => setIsModalOpen(true)} />
      </div>

      {isModalOpen && (
        <OpenDataModal onClose={() => setIsModalOpen(false)} />
      )}
    </main>
  );
}
