import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { label: 'Portrait 1', span: 'col-span-1 row-span-2', image: '/images/profile1.PNG' },
  { label: 'Action Shot', span: 'col-span-1 row-span-1', image: '/images/profile2.PNG' },
  { label: 'On Set', span: 'col-span-1 row-span-1', image: '/images/profile3.JPG' },
  { label: 'Headshot', span: 'col-span-1 row-span-2', image: '/images/profile4.JPG' },
];

const Profile = () => {
  return (
    <section id="profile" className="py-24 px-6 lg:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-bebas text-6xl md:text-8xl text-heading mb-4">PROFILE</h2>
          <p className="text-white/50 tracking-wider uppercase text-sm md:text-base">
            A glimpse behind the craft
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className={`${img.span} relative border border-white/10 bg-black overflow-hidden group cursor-pointer`}
            >
              {/* Hover shimmer */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

              {/* Corner accents on hover */}
              <div className="absolute top-0 left-0 w-8 h-[1px] bg-white/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>
              <div className="absolute top-0 left-0 h-8 w-[1px] bg-white/60 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-10"></div>
              <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-white/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right z-10"></div>
              <div className="absolute bottom-0 right-0 h-8 w-[1px] bg-white/60 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-10"></div>

              {/* Image */}
              <img
                src={img.image}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
