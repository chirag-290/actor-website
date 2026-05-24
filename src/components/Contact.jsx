import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiInstagram } from 'react-icons/fi';
import { SiImdb } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-bebas text-6xl md:text-[8vw] leading-none text-heading tracking-tight mb-6">
            LET'S WORK TOGETHER.
          </h2>
          <p className="text-xl text-white/50 uppercase tracking-widest">
            Available for new projects
          </p>
        </motion.div>

        <div className="flex flex-col space-y-8 md:space-y-12 items-center w-full max-w-3xl">
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href="tel:+919996996063"
            className="group flex items-center gap-6 text-2xl md:text-5xl font-light text-white/80 hover:text-white transition-colors"
          >
            <FiPhone className="text-accent text-3xl md:text-5xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="relative">
              99969 96063
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group flex items-center gap-6 text-2xl md:text-5xl font-light text-white/80"
          >
            <FiMapPin className="text-accent text-3xl md:text-5xl opacity-50" />
            <span>Mumbai</span>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-12 w-full border-t border-white/10 mt-12">
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="https://www.imdb.com/name/nm18254881/?ref_=ext_shr_lnk"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 text-xl md:text-3xl font-light text-white/80 hover:text-white transition-colors"
            >
              <SiImdb className="text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="relative">
                IMDB Profile
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </motion.a>

            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="https://instagram.com/kaartikay_mehta"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 text-xl md:text-3xl font-light text-white/80 hover:text-white transition-colors"
            >
              <FiInstagram className="text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="relative">
                @kaartikay_mehta
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </motion.a>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full py-8 text-center border-t border-white/5">
        <p className="text-sm text-white/30 tracking-widest uppercase">
          © 2026 Kaartikay Mehta. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
