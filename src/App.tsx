import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ValueComparison } from './components/ValueComparison';
import { Pricing } from './components/Pricing';
import { ReferralSection } from './components/ReferralSection';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <TestimonialsSection />
      <ValueComparison />
      <Pricing />
      <ReferralSection />
      <FAQ />
      <FinalCTA />
    </div>
  );
}