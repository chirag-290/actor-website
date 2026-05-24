import React from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiExternalLink } from 'react-icons/fi';

const Upcoming = () => {
  return (
    <section id="upcoming" className="py-24 px-6 lg:px-12 bg-[#050505] relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.03] pointer-events-none">
        <span className="font-bebas text-[25vw] text-white whitespace-nowrap">
          UPCOMING
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-bebas text-6xl md:text-8xl text-heading mb-4">UPCOMING</h2>
          <p className="text-white/50 tracking-wider uppercase text-sm md:text-base">
            What's next
          </p>
        </motion.div>

        {/* Featured Upcoming Project */}
        <motion.a
          href="https://youtu.be/6Pr9weNJUws?si=BglGZdiMUz4DgLQx"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
          className="block group cursor-pointer"
        >
          <div className="border border-white/10 bg-white/[0.02] rounded-sm overflow-hidden">
            {/* Video Thumbnail */}
            <div className="relative w-full h-[40vh] md:h-[50vh] bg-black border-b border-white/10 flex items-center justify-center overflow-hidden">
              {/* Background image */}
              <img src="/images/upcoming.jpg" alt="Adarsh Baal Vidyalaya" className="absolute inset-0 w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>

              {/* Play button */}
              <div className="relative z-10 flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-white/30 group-hover:border-white/80 group-hover:bg-white/10 transition-all duration-500">
                <FiPlay className="text-white text-2xl md:text-4xl ml-1 group-hover:scale-110 transition-transform" />
              </div>
              
              {/* Animated ring */}
              <div className="absolute w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/20 animate-ping opacity-10"></div>

              {/* Corner tag */}
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded text-xs uppercase tracking-widest text-white/70 z-10">
                Watch Trailer
              </div>
            </div>

            {/* Details */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div>
                  <h3 className="font-bebas text-4xl md:text-6xl text-white group-hover:text-accent transition-colors mb-3">
                    Adarsh Baal Vidyalaya
                  </h3>
                  <p className="text-white/60 text-lg font-light">
                    Directed by <span className="text-white/90">Himank Gaur</span> & <span className="text-white/90">Biswapati Sarkar</span>
                  </p>
                </div>
                <div className="flex flex-row items-center gap-3 mt-2 md:mt-0">
                  <span className="text-xs uppercase tracking-widest text-black bg-white px-4 py-2 rounded font-semibold">
                    Prime Video
                  </span>
                  <FiExternalLink className="text-white/30 group-hover:text-white transition-colors text-xl" />
                </div>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Upcoming;
