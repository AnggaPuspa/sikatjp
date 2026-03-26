import TentangHero from '@/components/sections/TentangHero/TentangHero';
import TentangTimeline from '@/components/sections/TentangTimeline/TentangTimeline';
import TentangMetode from '@/components/sections/TentangMetode/TentangMetode';
import CredibilitySection from '@/components/sections/CredibilitySection/CredibilitySection';

export default function TentangPage() {
  return (
    <main>
      <TentangHero />
      <TentangTimeline />
      <TentangMetode />
      <CredibilitySection />
    </main>
  );
}
