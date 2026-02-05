import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Check } from 'lucide-react';
import { CTAButton } from './CTAButton';

export function Pricing() {
  const [ref, isInView] = useInView();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Free Forever',
      description: 'Track progress and understand your child profile',
      monthlyPrice: '£0',
      yearlyPrice: '£0',
      period: '/year',
      features: [
        '2 Perspectives (SALT, OT)',
        'Weekly voice notes',
        '1 child profile',
        'ATEC Tracking & Personalized insights',
      ],
      cta: 'Get Started Free',
      highlighted: false,
      buttonVariant: 'secondary' as const,
    },
    {
      name: 'Standard',
      description: 'The Multi-discipline Companion you can rely on',
      monthlyPrice: '£19.99',
      yearlyPrice: '£204',
      originalYearlyPrice: '£240',
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      discount: '(15% discount)',
      features: [
        '4 Perspectives (OT, SALT, ABA, PRI)',
        'Daily voice notes',
        'Up to 3 child profiles',
        'ATEC Tracking & Personalized insights',
        'Professional reports',
      ],
      cta: 'Start 14-Day Free Trial',
      highlighted: true,
      buttonVariant: 'primary' as const,
    },
    {
      name: 'Premium',
      description: 'Your Parent intelligence system all in one place. Centralize and manage your entire care team at your finger tip',
      monthlyPrice: '£29.99',
      yearlyPrice: '£306',
      originalYearlyPrice: '£360',
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      discount: '(15% discount)',
      features: [
        'All Perspectives included in Standard + PSY, PT, BIOMED',
        'Unlimited voice notes',
        'Unlimited child profiles',
        'ATEC Tracking & Personalized insights',
        'Multi-discipline professional reports',
      ],
      cta: 'Start 14-Day Free Trial',
      highlighted: false,
      buttonVariant: 'primary' as const,
    },
  ];

  return (
    <section id="pricing" ref={ref} className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900">
            Premium Plans
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Select the plan that works for you
          </p>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto mb-6">
            Each plan matches where you are in your journey. Add new perspectives as you gather more information about your child and improve your decision making process with professional insights based on real-data.
          </p>
          <p className="text-sm text-gray-600 mb-8">
            Trial period unlocks all premium features for 14 days
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1 mb-12">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md text-sm transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-md text-sm transition-all ${
                billingPeriod === 'yearly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              Yearly billing
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-[#FFF8F0] to-[#FFFBF5] border-2 border-[#F57D48] shadow-xl scale-105'
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-[#F57D48] text-white text-center py-2 text-sm">
                  Most Popular
                </div>
              )}

              <div className={`p-6 ${plan.highlighted ? 'pt-12' : ''}`}>
                {/* Plan Header */}
                <h3 className="text-2xl mb-2 text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-6 min-h-[60px]">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl text-gray-900">
                      {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-lg text-gray-600">{plan.period}</span>
                  </div>
                  {billingPeriod === 'yearly' && plan.discount && (
                    <p className="text-sm text-[#F57D48] mt-1">{plan.discount}</p>
                  )}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-sm text-gray-900 mb-3">What's included</p>
                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? 'text-[#F57D48]' : 'text-[#14B8A6]'
                        }`} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <CTAButton 
                  variant={plan.buttonVariant} 
                  size="md"
                  className="w-full"
                >
                  {plan.cta}
                </CTAButton>

                {plan.buttonVariant === 'primary' && (
                  <p className="text-xs text-gray-500 text-center mt-2">
                    No credit card required
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-gray-600 max-w-4xl mx-auto"
        >
          <p className="mb-2">
            All plans include 256-bit encryption and bank-grade security
          </p>
          <p>
            The platform is hosted on secure infrastructure compliant with SOC 2 Type II, ISO 27001, and GDPR. Stringent data privacy protocols.
          </p>
        </motion.div>
      </div>
    </section>
  );
}