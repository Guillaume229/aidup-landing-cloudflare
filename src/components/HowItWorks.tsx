import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Mic, Cpu, BarChart3, Share2 } from 'lucide-react';

export function HowItWorks() {
  const [ref, isInView] = useInView();

  const steps = [
    {
      icon: Mic,
      title: 'Log in 30 seconds—voice or text',
      description: 'Capture observations within 2 minutes',
      example: '"I logged \'meltdown before dinner\' while cooking"',
      color: '#F57D48',
    },
    {
      icon: Cpu,
      title: 'AI extracts 7 data points automatically',
      description: 'Structured across developmental domains',
      example: '"It tagged: sensory trigger, time of day, hunger cue"',
      color: '#14B8A6',
    },
    {
      icon: BarChart3,
      title: 'Get weekly insights from OT, PT, ABA perspectives',
      description: 'See trends, severity levels, and progress',
      example: '"I learned his meltdowns peak before meals—try protein snack 30 min earlier"',
      color: '#F57D48',
    },
    {
      icon: Share2,
      title: 'Share with therapists in one tap',
      description: 'Professional reports ready to use',
      example: '"Sent report to his OT—she adjusted our sensory diet plan"',
      color: '#14B8A6',
    },
  ];

  return (
    <section id="how-it-works" ref={ref} className="py-16 md:py-20 bg-gradient-to-b from-[#FFF8F0] to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl lg:text-5xl text-center mb-16 text-gray-900"
        >
          How It Works
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#F57D48] via-[#14B8A6] to-[#F57D48] opacity-20" />

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative"
              >
                {/* Step Number */}
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm z-10"
                  style={{ backgroundColor: step.color }}
                >
                  {index + 1}
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center pt-12 border border-gray-100">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <step.icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>
                  <h3 className="text-lg mb-2 text-gray-900 leading-snug">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                  <p className="text-sm text-gray-500 italic bg-gray-50 rounded-lg p-3 border-l-2 border-gray-300">
                    {step.example}
                  </p>
                </div>

                {/* Arrow (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 -right-4 text-gray-300 z-20">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M5 16h22m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="bg-[#F57D48] hover:bg-[#FF9C7A] text-white px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105">
            Activate Your Early Access
          </button>
        </motion.div>
      </div>
    </section>
  );
}
