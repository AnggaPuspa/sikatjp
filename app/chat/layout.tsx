import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SIKAT AI Console | Asisten Digital Anti Judol & Pinjol',
  description: 'Konsultasi langsung dengan SIKAT AI untuk mendapatkan informasi, strategi pelunasan hutang, dan panduan keluar dari jerat judi online dan pinjol ilegal.',
  keywords: ['sikat ai', 'chatbot judol', 'konsultasi pinjol', 'ai assistant', 'konseling online'],
  openGraph: {
    title: 'SIKAT AI Console | Asisten Digital',
    description: 'Tanya apa saja tentang judi online, pinjol ilegal, dan strategi keluar dari jerat finansial.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIKAT AI Console',
    description: 'Asisten digital untuk konsultasi masalah judi online dan pinjol ilegal.',
  },
};

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return children;
}
