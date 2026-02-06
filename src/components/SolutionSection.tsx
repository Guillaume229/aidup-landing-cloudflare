import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Mic, Activity, Users, Lightbulb, ArrowRight } from 'lucide-react';
import journalingInterfaceImage from '../assets/b3aa89eea6b92e34054889a1117fee192f1ffc5f.png';
import insightBottomSheetImage from '../assets/e655eeb53325343acafdb180b38ba00538e11e41.png';

export function SolutionSection() {
  const [ref, isInView] = useInView();

  const features = [
    {
      icon: Mic,
      title: 'Intelligent Journaling',
      description: 'Quick voice logging transforms into structured developmental data—AI extracts symptoms, treatments, and progress patterns you can track over time',
      link: 'See how it works →',
      bgColor: 'bg-[#FFF8F0]',
      iconColor: 'text-[#F57D48]',
    },
    {
      icon: Activity,
      title: 'Clinical-Grade Progress Tracking',
      description: 'Integrated ATEC assessments + daily observations create a living record validated by 30+ years of autism research',
      link: 'View sample dashboard →',
      bgColor: 'bg-[#E6F7F5]',
      iconColor: 'text-[#14B8A6]',
    },
    {
      icon: Users,
      title: 'Expert Perspectives',
      description: 'Your therapists, teachers, and caregivers contribute observations—all in one unified timeline your care team can actually use',
      link: 'Learn about collaboration →',
      bgColor: 'bg-[#FFF8F0]',
      iconColor: 'text-[#F57D48]',
    },
    {
      icon: Lightbulb,
      title: 'AI Insights (Not Chatbots)',
      description: 'Pre-configured prompts surface weekly patterns, correlations, and next steps—no guessing, no generic advice',
      link: 'See insight examples →',
      bgColor: 'bg-[#E6F7F5]',
      iconColor: 'text-[#14B8A6]',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900 leading-tight max-w-4xl mx-auto">
            View Your Child's Development Through the Lens of Experts—Within Your Phone
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple tools that fit into your daily routine, not another complicated app to learn
          </p>
        </motion.div>

        {/* NEW: Two Phones + Insight Cards Poker Spread */}
        <div className="relative max-w-6xl mx-auto my-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            
            {/* LEFT: Voice Journaling Phone */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="relative flex-shrink-0 lg:mr-8"
            >
              <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F57D48]/20 to-[#FF9C7A]/20 blur-3xl rounded-3xl scale-105" />
                
                {/* Phone */}
                <div className="relative bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl w-[240px]">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-xl z-10"></div>
                  
                  {/* Screen */}
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    <img 
                      src={journalingInterfaceImage} 
                      alt="AID UP voice journaling interface" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-full shadow-lg border border-gray-100 flex items-center gap-1.5 whitespace-nowrap z-20">
                  <Mic className="w-3.5 h-3.5 text-[#F57D48]" />
                  <span className="text-xs text-gray-700 font-medium">Voice-to-text journaling</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Insight Cards + Radar Phone (background) */}
            <div className="relative flex-1 min-h-[580px]">
              
              {/* Radar Phone (greyed, behind cards) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 0.9, scale: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 transform rotate-2 z-0"
              >
                <div className="relative bg-gray-700 rounded-[2.5rem] p-2 shadow-2xl w-[220px]">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-700 rounded-b-lg z-10"></div>
                  
                  {/* Screen with grey overlay */}
                  <div className="bg-white rounded-[2rem] overflow-hidden relative">
                    <div className="absolute inset-0 bg-gray-200/40 z-10 pointer-events-none"></div>
                    <img 
                      src={insightBottomSheetImage} 
                      alt="Developmental progress radar chart" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>

              {/* 5 Insight Cards - Poker Spread */}
              <div className="relative ml-[180px] flex items-center justify-center min-h-[500px]">
                
                {/* Card 1: PT */}
                <motion.div
                  initial={{ opacity: 0, rotate: -20, x: -140 }}
                  animate={isInView ? { opacity: 1, rotate: -15, x: -120 } : {}}
                  transition={{ delay: 0.6 }}
                  className="absolute bg-white rounded-2xl shadow-2xl w-[170px] translate-y-[30px] cursor-pointer hover:-translate-y-2 hover:scale-105 hover:z-50 transition-all duration-300"
                  style={{ zIndex: 10 }}
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <span className="text-white font-bold text-[10px]">PT</span>
                      </div>
                      <span className="text-[8px] text-gray-400">30 days</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-xs mb-2">Physiotherapist</h4>
                    <div className="space-y-1.5">
                      <div className="bg-blue-50 rounded-lg p-1.5">
                        <p className="text-[8px] font-semibold text-blue-800 mb-0.5">What Stands Out</p>
                        <p className="text-[7px] text-gray-600 leading-relaxed">
                          Significant gross motor improvements—9 consecutive basketball shots after a year of practice.
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5">
                      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-[8px] font-semibold text-blue-600">+40%</span>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: OT */}
                <motion.div
                  initial={{ opacity: 0, rotate: -10, x: -70 }}
                  animate={isInView ? { opacity: 1, rotate: -6, x: -50 } : {}}
                  transition={{ delay: 0.7 }}
                  className="absolute bg-white rounded-2xl shadow-2xl w-[170px] translate-y-[5px] cursor-pointer hover:-translate-y-2 hover:scale-105 hover:z-50 transition-all duration-300"
                  style={{ zIndex: 15 }}
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F57D48] to-[#FF9C7A] flex items-center justify-center">
                        <span className="text-white font-bold text-[10px]">OT</span>
                      </div>
                      <span className="text-[8px] text-gray-400">30 days</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-xs mb-2">Occupational Therapy</h4>
                    <div className="space-y-1.5">
                      <div className="bg-orange-50 rounded-lg p-1.5">
                        <p className="text-[8px] font-semibold text-orange-800 mb-0.5">What Stands Out</p>
                        <p className="text-[7px] text-gray-600 leading-relaxed">
                          Sensory seeking behaviors decreased. Michael tolerates different textures during meals.
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5">
                      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-3/5 bg-gradient-to-r from-[#F57D48] to-[#FF9C7A] rounded-full"></div>
                      </div>
                      <span className="text-[8px] font-semibold text-[#F57D48]">+35%</span>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3: SALT (center) */}
                <motion.div
                  initial={{ opacity: 0, rotate: 0, y: -30 }}
                  animate={isInView ? { opacity: 1, rotate: 1, y: -15 } : {}}
                  transition={{ delay: 0.8 }}
                  className="absolute bg-white rounded-2xl shadow-2xl w-[170px] translate-x-[20px] cursor-pointer hover:-translate-y-2 hover:scale-105 hover:z-50 transition-all duration-300"
                  style={{ zIndex: 20 }}
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#14B8A6] to-teal-400 flex items-center justify-center">
                        <span className="text-white font-bold text-[10px]">SALT</span>
                      </div>
                      <span className="text-[8px] text-gray-400">30 days</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-xs mb-2">Speech & Language</h4>
                    <div className="space-y-1.5">
                      <div className="bg-teal-50 rounded-lg p-1.5">
                        <p className="text-[8px] font-semibold text-teal-800 mb-0.5">What Stands Out</p>
                        <p className="text-[7px] text-gray-600 leading-relaxed">
                          23 new words this month. Michael initiated conversation with a peer unprompted.
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5">
                      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-gradient-to-r from-[#14B8A6] to-teal-400 rounded-full"></div>
                      </div>
                      <span className="text-[8px] font-semibold text-[#14B8A6]">+52%</span>
                    </div>
                  </div>
                </motion.div>

                {/* Card 4: ABA */}
                <motion.div
                  initial={{ opacity: 0, rotate: 12, x: 75 }}
                  animate={isInView ? { opacity: 1, rotate: 8, x: 95 } : {}}
                  transition={{ delay: 0.9 }}
                  className="absolute bg-white rounded-2xl shadow-2xl w-[170px] translate-y-[15px] cursor-pointer hover:-translate-y-2 hover:scale-105 hover:z-50 transition-all duration-300"
                  style={{ zIndex: 14 }}
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold text-[10px]">ABA</span>
                      </div>
                      <span className="text-[8px] text-gray-400">30 days</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-xs mb-2">Behavioral Analysis</h4>
                    <div className="space-y-1.5">
                      <div className="bg-purple-50 rounded-lg p-1.5">
                        <p className="text-[8px] font-semibold text-purple-800 mb-0.5">What Stands Out</p>
                        <p className="text-[7px] text-gray-600 leading-relaxed">
                          Morning routine compliance up 60%. Fewer transition difficulties with visual schedule.
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5">
                      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"></div>
                      </div>
                      <span className="text-[8px] font-semibold text-purple-600">+28%</span>
                    </div>
                  </div>
                </motion.div>

                {/* Card 5: BIOMED */}
                <motion.div
                  initial={{ opacity: 0, rotate: 20, x: 150 }}
                  animate={isInView ? { opacity: 1, rotate: 16, x: 170 } : {}}
                  transition={{ delay: 1.0 }}
                  className="absolute bg-white rounded-2xl shadow-2xl w-[170px] translate-y-[40px] cursor-pointer hover:-translate-y-2 hover:scale-105 hover:z-50 transition-all duration-300"
                  style={{ zIndex: 11 }}
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                        <span className="text-white font-bold text-[8px]">BIOMED</span>
                      </div>
                      <span className="text-[8px] text-gray-400">30 days</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-xs mb-2">Biomedical</h4>
                    <div className="space-y-1.5">
                      <div className="bg-emerald-50 rounded-lg p-1.5">
                        <p className="text-[8px] font-semibold text-emerald-800 mb-0.5">Patterns Emerging</p>
                        <p className="text-[7px] text-gray-600 leading-relaxed">
                          Energy improvements—stronger at basketball, exercises, and music retention.
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5">
                      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"></div>
                      </div>
                      <span className="text-[8px] font-semibold text-emerald-600">+22%</span>
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* Badge for insights */}
              <div className="absolute bottom-0 right-1/4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2 whitespace-nowrap z-30">
                <Lightbulb className="w-4 h-4 text-[#14B8A6]" />
                <span className="text-sm text-gray-700 font-medium">Multi-therapist insights</span>
              </div>

            </div>
          </div>
        </div>

        {/* Trust text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center text-gray-500 text-sm mt-8 max-w-xl mx-auto"
        >
          No complicated setup. Just speak naturally about your day, and let AI organize your observations into actionable insights.
        </motion.p>

        {/* Feature Cards (KEEP THESE) */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3 + index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:scale-[1.02]"
            >
              <div className={`${feature.bgColor} rounded-lg p-3 w-fit mb-4`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
              <button className="text-[#F57D48] hover:text-[#FF9C7A] flex items-center gap-2 group">
                {feature.link}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
