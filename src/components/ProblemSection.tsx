import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Split, Search, Clock } from 'lucide-react';

export function ProblemSection() {
  const [ref, isInView] = useInView();

  const problems = [
    {
      icon: Split,
      title: 'Fragmented Care',
      description:
        "Your child's story scattered across therapists, teachers, and doctors—none see the full picture",
    },
    {
      icon: Search,
      title: 'Lost Patterns',
      description:
        'Critical developmental patterns disappear in forgotten notes and vague memories',
    },
    {
      icon: Clock,
      title: 'Delayed Action',
      description: 'Without clear data, early interventions are delayed and resources wasted',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 bg-[#FFFBF5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Problem Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-[#FFF8F0] rounded-lg p-3 w-fit mb-4">
                <problem.icon className="w-8 h-8 text-[#F57D48]" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stat Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gradient-to-r from-[#F57D48] to-[#FF9C7A] rounded-2xl p-8 text-center text-white shadow-xl"
        >
          <p className="text-5xl md:text-6xl mb-4">$461B</p>
          <p className="text-xl md:text-2xl opacity-95">
            The cost of fragmented autism care annually in the US alone
          </p>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto border-l-4 border-[#F57D48]"
        >
          <p className="text-lg text-gray-700 italic mb-4">
            {
              "Before AID UP, I couldn't tell you what therapy worked and what didn’t or why my child had a meltdown all the time. Now I can see patterns, share real data with practitioners, and actually make informed decisions. It's like finally having a memory that works and all cards on hands."
            }
          </p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-[#FFF8F0] flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                alt="Sarah M."
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-gray-900">Sarah M.</p>
              <p className="text-sm text-gray-500">Parent of 6-year-old with ASD</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
