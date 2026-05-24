import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiArrowUpRight } from 'react-icons/fi';

const instagramPosts = [
  { label: 'Post 1' },
  { label: 'Post 2' },
  { label: 'Post 3' },
  { label: 'Post 4' },
  { label: 'Post 5' },
  { label: 'Post 6' },
];

const Instagram = () => {
  return (
    <section id="instagram" className="py-24 px-6 lg:px-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="font-bebas text-6xl md:text-8xl text-heading mb-4">INSTAGRAM</h2>
            <p className="text-white/50 tracking-wider uppercase text-sm md:text-base">
              Follow the journey
            </p>
          </div>
          <a
            href="https://www.instagram.com/kaartikaymukul?igsh=d29sMGlxemRnYW95"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors text-lg"
          >
            <FiInstagram className="text-2xl" />
            <span className="relative">
              @kaartikaymukul
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
            <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/kaartikaymukul?igsh=d29sMGlxemRnYW95"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="aspect-square border border-white/10 bg-black relative overflow-hidden group cursor-pointer"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FiInstagram className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="italic text-white/15 text-xs tracking-wider">
                  {post.label}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Instagram;
