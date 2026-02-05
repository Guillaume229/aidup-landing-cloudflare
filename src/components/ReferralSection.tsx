import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Users, TrendingUp, Heart } from 'lucide-react';
import { CTAButton } from './CTAButton';

export function ReferralSection() {
  const [ref, isInView] = useInView();
  const [referrals, setReferrals] = useState(10);

  const monthlyEarnings = referrals * 2;
  const yearlyEarnings = monthlyEarnings * 12;

  return (
    <section ref={ref} className="py-16 md:py-20 bg-gradient-to-br from-[#FFF8F0] to-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900">
            Help Another Family, Earn Recurring Income
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Know a parent struggling to track their child's progress? Share AID UP and earn 10% of their subscription—every month, for as long as they stay.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-[#F0D9C9]"
          >
            <div className="bg-[#FFF8F0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-[#F57D48]" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900">Share the Tool</h3>
            <p className="text-gray-600">
              Get your unique referral link and share it with other parents in your community, support groups, or therapy sessions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-[#F57D48]"
          >
            <div className="bg-gradient-to-br from-[#F57D48] to-[#FF9C7A] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900">Earn 10% Monthly</h3>
            <p className="text-gray-600">
              For every family that subscribes through your link, earn £2-3/month recurring revenue. It adds up fast!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-[#F0D9C9]"
          >
            <div className="bg-[#E6F7F5] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#14B8A6]" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900">Build Your Network</h3>
            <p className="text-gray-600">
              Help 5 families and earn £10-15/month. Help 20 families and earn £40-60/month—passively.
            </p>
          </motion.div>
        </div>

        {/* Social Proof Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-[#F57D48] to-[#FF9C7A] rounded-2xl p-8 text-center text-white mb-8"
        >
          <p className="text-2xl mb-2">
            "You've earned <span className="font-bold">£55</span> so far helping <span className="font-bold">4 families</span> get organized."
          </p>
          <p className="text-lg opacity-90">
            This is what your dashboard could say in 30 days
          </p>
        </motion.div>

        {/* Earnings Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#F57D48] mb-8"
        >
          <h3 className="text-2xl text-center mb-6 text-gray-900">Preview Your Earnings</h3>
          
          <div className="max-w-md mx-auto">
            <label className="block text-center mb-4 text-gray-700">
              How much could you earn?
            </label>
            
            {/* Slider */}
            <div className="mb-6">
              <input
                type="range"
                min="1"
                max="50"
                value={referrals}
                onChange={(e) => setReferrals(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #F57D48 0%, #F57D48 ${(referrals / 50) * 100}%, #E5E7EB ${(referrals / 50) * 100}%, #E5E7EB 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>1 referral</span>
                <span>50 referrals</span>
              </div>
            </div>

            {/* Earnings Display */}
            <div className="bg-gradient-to-br from-[#FFF8F0] to-white rounded-xl p-6 border border-[#F0D9C9] text-center">
              <p className="text-lg text-gray-700 mb-3">
                With <span className="text-[#F57D48] font-bold text-2xl">{referrals}</span> referrals earning £20/month each
              </p>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-gray-600">You'd receive</span>
                <span className="text-4xl text-[#F57D48] font-bold">£{monthlyEarnings}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-500">
                (£{yearlyEarnings}/year recurring income)
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <CTAButton variant="primary" size="lg">
            Get My Referral Link Now
          </CTAButton>
          <p className="text-sm text-gray-500 mt-4">
            Sign up to access your personalized referral dashboard
          </p>
        </motion.div>

        <style>{`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #F57D48;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
          input[type="range"]::-moz-range-thumb {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #F57D48;
            cursor: pointer;
            border: none;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
        `}</style>
      </div>
    </section>
  );
}