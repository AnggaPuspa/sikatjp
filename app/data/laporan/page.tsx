import DataLaporan from "@/components/sections/DataLaporan/DataLaporan";

export const metadata = {
  title: "Laporan Tahunan - SIKAT JP",
  description: "Ringkasan Temuan Riset SIKAT JP mengenai Judi Online dan Pinjol Ilegal",
};

export default function LaporanPage() {
  return (
    <main>
      <DataLaporan />
    </main>
  );
}
