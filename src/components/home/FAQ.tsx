'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How does Vata work with Vision Pro?',
    answer: `Vata seamlessly integrates with Apple Vision Pro's spatial computing capabilities:

    • Your AI companion appears naturally in your space
    • They can walk around your room, sit on furniture, and interact with your environment
    • Natural eye contact and gesture recognition enable intuitive interaction
    • Real-time processing of visual, spatial, and conversational data creates immersive experiences`,
  },
  {
    question: 'What kind of interactions can I have with my AI companion?',
    answer: `Vata offers a wide range of meaningful interactions:

    • Professional Support: Practice presentations, get real-time feedback
    • Personal Organization: Schedule management, task prioritization
    • Creative Collaboration: Brainstorming, design feedback
    • Learning Partner: Language practice, skill development
    • Casual Conversation: Context-aware, natural dialogue`,
  },
  {
    question: 'How does environmental awareness work?',
    answer: `Environmental awareness is powered by advanced spatial computing:

    • Smart Navigation: Natural movement around furniture and obstacles
    • Context Recognition: Adapts behavior based on room type and function
    • Space Utilization: Optimizes positioning for different activities
    • Multi-room Awareness: Maintains continuity across different spaces
    • Real-time Adaptation: Responds to changes in your environment`,
  },
  {
    question: "Can I customize my AI companion's appearance?",
    answer: `Yes, Vata offers extensive customization options:

    • Physical Appearance: Height, build, facial features
    • Clothing Options: Professional, casual, activity-specific outfits
    • Style Preferences: Personality-matching aesthetics
    • Dynamic Adaptation: Context-appropriate appearance changes
    • Accessory Selection: Comprehensive wardrobe customization`,
  },
  {
    question: 'What about privacy and data security?',
    answer: `We prioritize your privacy and security:

    • Local Processing: Core interactions processed on-device
    • End-to-end Encryption: Secure data transmission
    • User Control: Granular privacy settings
    • No Recording: Environmental data isn't stored
    • Regular Audits: Continuous security monitoring`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-orange-400 clip-text">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about Vata and spatial AI companions
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 bg-gradient-to-b from-white/[0.08] to-transparent rounded-2xl backdrop-blur-sm border border-white/[0.1] hover:border-orange-500/50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-orange-400 text-2xl"
                  >
                    +
                  </motion.span>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-400 whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 