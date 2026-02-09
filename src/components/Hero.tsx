import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { ImprovedRadarSection } from './ImprovedRadarSection';
import { CTAButton } from './CTAButton';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#FFF8F0] to-[#FFFBF5] pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight">
              Never guess which therapy is helping your child again.
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
              AI turns your daily observations into OT, PT, ABA, Biomedical guidance in days not months — so you can change course without constant £400 specialist follow‑ups
            </p>

            {/* CTAs - Now with device-aware routing */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <CTAButton variant="primary" size="md">
                Activate Your Early Access
              </CTAButton>
              
              <button className="flex items-center justify-center gap-2 text-[#F57D48] hover:text-[#FF9C7A] px-6 py-4 transition-colors">
                <Play className="w-5 h-5" />
                <span className="text-lg">Watch 2-min Demo</span>
              </button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#14B8A6]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Bank-level encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#14B8A6]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Your data, your control</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#14B8A6]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Trusted by 1,000+ families</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#14B8A6]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Earn £2-3/month per referral</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual - Improved Section */}
          <ImprovedRadarSection />
        </div>
      </div>
    </section>
  );
}
