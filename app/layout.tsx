import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import FloatingAI from '@/components/ui/FloatingAI/FloatingAI';
import SmoothScroll from '@/components/ui/SmoothScroll/SmoothScroll';

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://sikatjp.vercel.app'),
  title: {
    default: 'SIKAT JP | Sistem Informasi, Konseling, dan Advokasi Terpadu Judi & Penipuan',
    template: '%s | SIKAT JP',
  },
  description: 'Platform intelejen data dan simulasi algoritma untuk membongkar ilusi kemenangan judi online dan jerat pinjol ilegal. Berbasis data PPATK, OJK, dan riset independen.',
  keywords: ['judi online', 'pinjol ilegal', 'kalkulator judol', 'simulasi pinjol', 'PPATK', 'OJK', 'bantuan darurat', 'literasi finansial'],
  authors: [{ name: 'SIKAT JP Team' }],
  creator: 'SIKAT JP',
  publisher: 'SIKAT JP',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'SIKAT JP',
    title: 'SIKAT JP | Keuanganmu Kendalimu, Bukan Sebaliknya',
    description: 'Posko darurat digital yang membongkar ilusi kemenangan judi online dan jerat pinjol ilegal — dengan data, bukan opini.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@sikatjp',
    title: 'SIKAT JP | Platform Advokasi Anti Judol & Pinjol Ilegal',
    description: 'Simulasi algoritma judi online palsu dan hotline darurat pencegahan krisis finansial.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={jakartaSans.className}>
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
        <FloatingAI />
      </body>
    </html>
  );
}
