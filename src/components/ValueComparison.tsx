import { motion } from 'motion/react';
import { useInView } from './useInView';

export function ValueComparison() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-12 bg-gradient-to-br from-[#FFF8F0] to-[#FFFBF5]">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#F57D48]"
        >
          <div className="bg-gradient-to-r from-[#F57D48] to-[#FF9C7A] text-white text-center py-4">
            <h3 className="text-2xl">See What You're Actually Saving</h3>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* What You'd Normally Pay */}
              <div>
                <h4 className="text-xl mb-6 text-gray-900 pb-2 border-b-2 border-gray-200">
                  What you'd normally pay
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">One time Private OT assessment</span>
                    <span className="text-gray-900 font-semibold">£300</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">One time Private PT assessment</span>
                    <span className="text-gray-900 font-semibold">£110</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">Kinesiologist (PRI) assessment</span>
                    <span className="text-gray-900 font-semibold">£150</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">10 hours of ABA therapy per week</span>
                    <span className="text-gray-900 font-semibold">£1,200/month</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">Biomedical appointments</span>
                    <span className="text-gray-900 font-semibold">£400</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">Manual journaling</span>
                    <span className="text-gray-900 font-semibold">3 hrs/week</span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-gray-50 rounded-lg px-4 mt-4">
                    <span className="text-gray-900 font-semibold">Total annual cost</span>
                    <span className="text-2xl text-[#F57D48] font-bold">£2,750+</span>
                  </div>
                </div>
              </div>

              {/* What You Pay with AID UP */}
              <div>
                <h4 className="text-xl mb-6 text-gray-900 pb-2 border-b-2 border-[#F57D48]">
                  What you pay with AID UP
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">Personalized real time OT insights</span>
                    <span className="text-[#14B8A6] font-semibold">Included ✓</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">Personalized real time PT insights</span>
                    <span className="text-[#14B8A6] font-semibold">Included ✓</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">Personalized real time PRI insights</span>
                    <span className="text-[#14B8A6] font-semibold">Included ✓</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">Personalized real time ABA/BCBA insights</span>
                    <span className="text-[#14B8A6] font-semibold">Included ✓</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">Personalized real time Biomedical insights</span>
                    <span className="text-[#14B8A6] font-semibold">Included ✓</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">Auto journaling</span>
                    <span className="text-[#14B8A6] font-semibold">2 min/day ✓</span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-gradient-to-br from-[#F57D48] to-[#FF9C7A] text-white rounded-lg px-4 mt-4">
                    <span className="font-semibold">Standard plan</span>
                    <span className="text-2xl font-bold">£204/year</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center bg-[#FFF8F0] rounded-xl p-6 border border-[#F0D9C9]"
            >
              <p className="text-lg text-gray-700 mb-4">
                Start your 14-day trial—<span className="font-semibold">no credit card required</span>. Join 1,000+ families who've saved an average of <span className="text-[#F57D48] font-bold">£2,200 in specialist fees</span> this year.
              </p>
              <button className="bg-[#F57D48] hover:bg-[#FF9C7A] text-white px-8 py-3 rounded-xl transition-all shadow-md hover:shadow-lg">
                Activate Your Early Access
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
