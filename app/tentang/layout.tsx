import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manifesto Gerakan',
  description: 'Kenali misi, visi, dan metodologi SIKAT JP dalam memberantas judi online dan pinjol ilegal melalui edukasi berbasis data dan advokasi digital.',
  keywords: ['tentang sikat jp', 'manifesto', 'metodologi', 'kredibilitas', 'validasi institusional', 'advokasi digital'],
  openGraph: {
    title: 'Manifesto Gerakan | SIKAT JP',
    description: 'Platform independen berbasis data untuk edukasi dan advokasi anti judi online & pinjol ilegal.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manifesto Gerakan | SIKAT JP',
    description: 'Kenali misi dan metodologi SIKAT JP dalam memberantas judi online dan pinjol ilegal.',
  },
};

export default function TentangLayout({ children }: { children: React.ReactNode }) {
  return children;
}
