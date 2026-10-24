import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
