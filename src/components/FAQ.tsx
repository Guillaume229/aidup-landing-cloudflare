import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from './useInView';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [ref, isInView] = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How is this different from ChatGPT or general AI tools?',
      answer: 'AID UP is the first structured data layer for neurodevelopmental care. It remembers your child\'s unique history, not generic information. Unlike ChatGPT, this is not a chatbot, AID UP builds a comprehensive longitudinal record that tracks developmental patterns, correlates symptoms with interventions, and provides insights based on your child\'s specific journey.',
    },
    {
      question: 'Is my data secure and private?',
      answer: 'All data is encrypted end-to-end with AES-256 encryption, stored on secure infrastructure with regular backups. We never sell or share your data, and you maintain complete ownership of all information about your child. You can request to delete your data at any time.',
    },
    {
      question: 'What if I\'m not tech-savvy?',
      answer: 'AID UP is designed for overwhelmed parents—simply record 30-second voice notes about your observations, and we handle the rest. The AI automatically extracts developmental data, organizes it by clinical domains, and presents insights in clear, actionable language. No technical knowledge required.',
    },
    {
      question: 'Can I export data for doctors/schools?',
      answer: 'Yes. Generate PDF reports optimized for IEPs, medical appointments. Reports include severity tracking, progress trends, symptom correlations, and clinical-grade summaries that professionals can use immediately.',
    },
  ];

  return (
    <section id="faq" ref={ref} className="py-16 md:py-20 bg-[#FFFBF5]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl lg:text-5xl text-center mb-12 text-gray-900"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FFFBF5] transition-colors"
              >
                <span className="text-lg text-gray-900 pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-[#F57D48]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}