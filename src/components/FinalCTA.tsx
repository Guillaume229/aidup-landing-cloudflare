import { motion } from 'motion/react';
import { useInView } from './useInView';
import { CTAButton } from './CTAButton';

export function FinalCTA() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-r from-[#F57D48] to-[#FF9C7A]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
            The assistant that remembers so you don't have to
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Join 1,000+ parents building a clear record of their child's progress
          </p>

          <CTAButton variant="white" size="lg" className="mb-6">
            Activate Your Early Access
          </CTAButton>

          <p className="text-white/80 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/20 text-white/60 text-sm"
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          <p className="mt-4">© 2026 AID UP. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}