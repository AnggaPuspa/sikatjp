import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Data | Arsip Dataset Intelijen',
  description: 'Akses dataset publik dari PPATK, OJK, Satgas PASTI, dan Komdigi tentang judi online dan pinjol ilegal. Termasuk data proprietary hasil crawling 2.1 juta komentar korban.',
  keywords: ['open data', 'dataset judol', 'PPATK data', 'OJK dataset', 'satgas pasti', 'data pinjol', 'crawling sosmed', 'NLP analysis'],
  openGraph: {
    title: 'Open Data | Arsip Dataset Intelijen',
    description: 'Database komprehensif tentang judi online dan pinjol ilegal dari sumber resmi dan riset independen.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Data | SIKAT JP',
    description: 'Akses dataset publik tentang judi online dan pinjol ilegal dari berbagai sumber resmi.',
  },
};

export default function OpenDataLayout({ children }: { children: React.ReactNode }) {
  return children;
}
