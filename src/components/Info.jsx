import React from 'react';
import { motion } from 'framer-motion';

const Info = () => {
  const stats = [
    { label: 'Name', value: 'Kaartikay Mukul Mehta' },
    { label: 'Age', value: '26 Years' },
    { label: 'Height', value: "5'10" },
    { label: 'Location', value: 'Mumbai' },
    { label: 'Hometown', value: 'Chandigarh / Sirsa, Haryana' },
    { label: 'Languages', value: 'Hindi, Punjabi, Haryanvi, Bagri, English' },
    { label: 'Training', value: 'Theatre Trained Actor (6 Years)' },
    { label: 'Skills', value: 'Cricket, Badminton, Mixed Martial Arts' },
  ];

  return (
    <section id="info" className="py-24 px-6 lg:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* Left Side: Bio */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex flex-col justify-center"
        >
          <h2 className="font-bebas text-7xl md:text-8xl text-heading mb-8">INFO.</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-white/80 font-light max-w-xl">
            "A Mumbai-based actor with over Six years of theatre experience, bringing honesty and authenticity to every role."
          </p>
        </motion.div>

        {/* Right Side: Stats Grid */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 self-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="flex flex-col border-t border-white/20 pt-4"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2 font-semibold">
                {stat.label}
              </span>
              <span className="text-lg text-white font-medium">
                {stat.value}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Info;
