import DataPinjol from "@/components/sections/DataPinjol/DataPinjol";

export const metadata = {
  title: "Database Pinjol - SIKAT JP",
  description: "Daftar entitas legal dan ilegal yang diverifikasi oleh otoritas",
};

export default function PinjolPage() {
  return (
    <main>
      <DataPinjol />
    </main>
  );
}
