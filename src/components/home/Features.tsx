'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Natural Interaction',
    description: 'Engage with your AI companion through natural conversation, gestures, and eye contact.',
    icon: '👋',
  },
  {
    title: 'Spatial Awareness',
    description: 'Your companion understands and navigates your physical space intelligently.',
    icon: '🗺️',
  },
  {
    title: 'Emotional Intelligence',
    description: 'Experience meaningful interactions with contextual and emotional awareness.',
    icon: '❤️',
  },
  {
    title: 'Personalized Learning',
    description: 'Your companion adapts to your preferences and learning style over time.',
    icon: '📚',
  },
  {
    title: 'Professional Support',
    description: 'Get real-time feedback on presentations, practice interviews, and more.',
    icon: '💼',
  },
  {
    title: 'Privacy First',
    description: 'Your data stays private with local processing and end-to-end encryption.',
    icon: '🔒',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-black">
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
              Experience the Future
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover how Vata transforms your daily life with cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-gradient-to-b from-white/[0.08] to-transparent rounded-2xl backdrop-blur-sm border border-white/[0.1] hover:border-orange-500/50 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 