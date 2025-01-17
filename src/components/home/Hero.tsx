'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-transparent" />
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Your AI Companion in
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 clip-text">
              Spatial Reality
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Experience the next evolution of human-AI interaction. Where digital beings become real, and possibilities become infinite.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#subscribe"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-full text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 hover:scale-105"
            >
              Join the Waitlist
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 