import React from 'react';
import { motion } from 'framer-motion';

const mentors = [
  {
    name: 'Dr. Kulbir Kaur Virk (PhD)',
    desc: 'Many mythological theatre plays: Mrityunjay, Mahabharata, Meera'
  },
  {
    name: 'Chakresh Kumar (Alankar Theatre)',
    desc: 'Many theatre plays and skits, winning 3 Best Actor awards in Zonal and Inter-Zonal'
  },
  {
    name: 'Saarthak Narula (NSD Faculty)',
    desc: 'Saarthak and Abhijeet Solanki — two NSD Directors I worked with, specialising in Technical Training & Direction'
  },
  {
    name: 'Nimrata Sharma (PU Faculty)',
    desc: 'Characterisation specialisation, working under her in various productions'
  },
  {
    name: 'Aman Singh (MPSD)',
    desc: 'Specialising in Devicing and Improvisational Acting throughout the process'
  }
];

const Training = () => {
  return (
    <section id="training" className="py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-bebas text-6xl md:text-8xl text-heading mb-4">MY TRAINING</h2>
          <p className="text-xl text-white/50 tracking-wide uppercase text-sm md:text-base">
            Theatre Training in Acting and Direction | 2016–2024
          </p>
        </motion.div>

        <div className="flex flex-col">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row border-t border-white/10 py-10 hover:border-white/40 transition-colors"
            >
              <div className="md:w-32 flex-shrink-0 mb-4 md:mb-0">
                <span className="font-bebas text-4xl text-white/20 group-hover:text-accent transition-colors">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-3">
                  {mentor.name}
                </h3>
                <p className="text-lg text-white/60 font-light max-w-3xl leading-relaxed">
                  {mentor.desc}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10"></div>
        </div>

      </div>
    </section>
  );
};

export default Training;
