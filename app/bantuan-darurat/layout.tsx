import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unit Mitigasi Darurat | Bantuan Krisis Finansial',
  description: 'Pusat mitigasi krisis finansial judol dan pinjol. Akses hotline darurat 119 (Sehat Jiwa), 157 (OJK), dan laporan Satgas PASTI secara anonim. Nyawa Anda lebih berharga.',
  keywords: ['bantuan darurat', 'hotline 119', 'OJK 157', 'satgas pasti', 'konseling hutang', 'krisis finansial', 'bunuh diri prevention', 'layanan sehat jiwa'],
  openGraph: {
    title: 'Unit Mitigasi Darurat | SIKAT JP',
    description: 'Akses bantuan darurat untuk korban judi online dan pinjol ilegal. Hotline 24/7 dan konseling gratis.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unit Mitigasi Darurat | SIKAT JP',
    description: 'Hotline darurat dan konseling untuk korban judi online dan pinjol ilegal.',
  },
};

export default function BantuanDaruratLayout({ children }: { children: React.ReactNode }) {
  return children;
}
