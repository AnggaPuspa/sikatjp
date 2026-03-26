import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lab Simulasi | Kalkulator Realita Judol & Pinjol',
  description: 'Simulasikan probabilitas asli judi online dan hitung pelunasan pinjol dengan kalkulator berbasis algoritma matematis. Buktikan sendiri bagaimana sistem bandar selalu menang.',
  keywords: ['kalkulator judol', 'simulasi aviator', 'kalkulator pinjol', 'house edge', 'debt snowball', 'simulasi hutang', 'pelunasan pinjol'],
  openGraph: {
    title: 'Lab Simulasi | Kalkulator Realita Judol & Pinjol',
    description: 'Lihat uang Anda dihancurkan jadi Rp 0 secara matematis. Hitung rute pelunasan pinjol tanpa gali lubang tutup lubang.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lab Simulasi | Kalkulator Judol & Pinjol',
    description: 'Simulasi interaktif untuk membuktikan matematika di balik judi online dan pinjol ilegal.',
  },
};

export default function KalkulatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
