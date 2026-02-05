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
    <section ref={ref} className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900">
            View Your Child's Development Through the Lens of Experts—Within Your Phone
          </h2>
        </motion.div>

        {/* Mobile App Mockups - Side by Side */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
          {/* Left: Voice Journaling Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F57D48]/20 to-[#FF9C7A]/20 blur-3xl rounded-3xl scale-105" />
              
              {/* Mobile Frame */}
              <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                <img 
                  src={journalingInterfaceImage} 
                  alt="AID UP voice journaling interface" 
                  className="w-full h-auto rounded-[2rem]"
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-[#F57D48]/20 z-10">
                <p className="text-sm text-gray-700 whitespace-nowrap flex items-center gap-2">
                  <Mic className="w-4 h-4 text-[#F57D48]" />
                  Voice-to-text journaling
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Multi-therapist Insights Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/20 to-[#0D9488]/20 blur-3xl rounded-3xl scale-105" />
              
              {/* Mobile Frame */}
              <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl transform rotate-[3deg] hover:rotate-0 transition-transform duration-300">
                <img 
                  src={insightBottomSheetImage} 
                  alt="AID UP multi-therapist insights" 
                  className="w-full h-auto rounded-[2rem]"
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-[#14B8A6]/20 z-10">
                <p className="text-sm text-gray-700 whitespace-nowrap flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-[#14B8A6]" />
                  Multi-therapist insights
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
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
