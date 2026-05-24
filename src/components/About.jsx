import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h2 className="font-bebas text-5xl md:text-7xl text-heading mb-8 leading-[0.9]">
            HELLO, I'M <br /> KAARTIKAY MUKUL MEHTA
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-white/70 font-light leading-relaxed">
            <p>
              I'm Kaartikay Mukul Mehta, a Mumbai-based actor with over five years of theatre experience, where I've built a strong foundation in performance and character work.
            </p>
            <p>
              I'm deeply passionate about acting and constantly strive to grow, bringing honesty and authenticity to every role I take on.
            </p>
          </div>
        </motion.div>

        {/* Right Images (Placeholders) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 w-full flex gap-4 md:gap-8 h-[60vh] lg:h-[70vh]"
        >
          <div className="w-1/2 h-full border border-white/20 bg-black flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img src="/images/headshot1.JPG" alt="Headshot 1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="w-1/2 h-full border border-white/20 bg-black flex items-center justify-center relative overflow-hidden group mt-12">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img src="/images/headshot2.jpg" alt="Headshot 2" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
