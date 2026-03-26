import Hero from '@/components/sections/Hero/Hero';
import FeatureBanner from '@/components/sections/FeatureBanner/FeatureBanner';
import FeaturesSection from '@/components/sections/FeaturesSection/FeaturesSection';
import EmpathySection from '@/components/sections/EmpathySection/EmpathySection';
import AboutSection from '@/components/sections/AboutSection/AboutSection';
import ImpactSection from '@/components/sections/ImpactSection/ImpactSection';
import DataSource from '@/components/sections/DataSource/DataSource';
import CTASection from '@/components/sections/CTASection/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureBanner />
      <ImpactSection />
      <EmpathySection />
      <AboutSection />
      <FeaturesSection />
      <DataSource />
      <CTASection />
    </main>
  );
}
