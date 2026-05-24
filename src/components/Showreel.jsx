import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const Showreel = () => {
  return (
    <section id="showreel" className="relative py-32 bg-[#111111] overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h2 className="font-bebas text-6xl md:text-9xl text-heading/20 tracking-[0.2em] mb-12 select-none pointer-events-none">
          SHOWREEL
        </h2>
        
        <a 
          href="https://youtu.be/6Pr9weNJUws?si=BglGZdiMUz4DgLQx" 
          target="_blank" 
          rel="noreferrer"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white rounded-full group cursor-pointer"
        >
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full border border-white animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="absolute -inset-4 rounded-full border border-white/50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20"></div>
          
          <FaPlay className="text-black text-3xl md:text-4xl ml-2 group-hover:scale-110 transition-transform" />
        </a>
      </motion.div>
      
      {/* Background large text outline */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-5 pointer-events-none">
        <span className="font-bebas text-[30vw] text-transparent stroke-white whitespace-nowrap" style={{ WebkitTextStroke: '2px white' }}>
          PLAY REEL
        </span>
      </div>
    </section>
  );
};

export default Showreel;
