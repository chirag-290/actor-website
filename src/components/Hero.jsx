import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';

const Hero = () => {
  const nameVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.33, 1, 0.68, 1],
        staggerChildren: 0.08 
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  const line1 = "KAARTIKAY".split('');
  const line2 = "MEHTA.".split('');

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-20 overflow-hidden">
      {/* Top Right Date */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-28 right-6 lg:right-12 text-xs md:text-sm uppercase tracking-widest text-white/50 text-right z-20"
      >
        Actor Portfolio <br className="md:hidden" /><span className="hidden md:inline"> | </span>2026
      </motion.div>

      {/* Main Content — Text Left + Image Right */}
      <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-0 z-10">

        {/* Left — Name + CTAs */}
        <div className="flex flex-col flex-1 w-full">
          {/* Main Text */}
          <div className="flex flex-col select-none pointer-events-none mt-10 md:mt-0">
            <motion.div
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              className="flex overflow-hidden font-bebas leading-[0.8] tracking-tight"
            >
              {line1.map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="text-[14vw] lg:text-[9vw] text-heading">
                  {char}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              className="flex overflow-hidden font-bebas leading-[0.8] tracking-tight ml-2 md:ml-8"
            >
              {line2.map((char, index) => {
                if (char === '.') {
                  return (
                    <motion.span key={index} variants={letterVariants} className="text-[14vw] lg:text-[9vw] text-accent relative">
                      <span className="absolute bottom-[10%] left-0 w-[3vw] lg:w-[2vw] h-[3vw] lg:h-[2vw] bg-accent rounded-full"></span>
                      <span className="opacity-0">.</span>
                    </motion.span>
                  );
                }
                return (
                  <motion.span key={index} variants={letterVariants} className="text-[14vw] lg:text-[9vw] text-heading">
                    {char}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl text-white/50 font-light tracking-widest uppercase"
          >
            Theatre Trained Actor · 6 Years
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-6"
          >
            <a 
              href="https://youtu.be/6Pr9weNJUws?si=BglGZdiMUz4DgLQx" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold text-sm tracking-widest uppercase hover:bg-white/90 transition-all rounded-sm w-fit"
            >
              Watch Upcoming
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://www.imdb.com/name/nm18254881/?ref_=ext_shr_lnk" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-white/30 text-white font-semibold text-sm tracking-widest uppercase hover:bg-white/5 transition-all rounded-sm w-fit"
            >
              IMDB Profile
              <FiExternalLink className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right — Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="w-full lg:w-[38%] flex-shrink-0 flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <div className="relative w-[70vw] sm:w-[50vw] md:w-[40vw] lg:w-full aspect-[3/4] max-w-[420px]">
            {/* Image container */}
            <div className="w-full h-full bg-black border border-white/15 overflow-hidden relative group">
              {/* Subtle shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/[0.04] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Portrait image */}
              <img 
                src="/images/hero-portrait.JPG" 
                alt="Kaartikay Mehta" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative border offset */}
            <div className="absolute -top-3 -right-3 w-full h-full border border-white/10 -z-10"></div>
            
            {/* Accent corner lines */}
            <div className="absolute -bottom-2 -left-2 w-12 h-[1px] bg-white/30"></div>
            <div className="absolute -bottom-2 -left-2 w-[1px] h-12 bg-white/30"></div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-6 lg:left-12 right-6 lg:right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 text-xs md:text-sm tracking-wider text-white/50 border-t border-white/10 pt-6"
      >
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <a href="https://instagram.com/kaartikay_mehta" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">@kaartikay_mehta</a>
          <span>Mumbai, India</span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 text-right">
          <span>+91 99969 96063</span>
          <span>Chandigarh / Sirsa, Haryana</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
