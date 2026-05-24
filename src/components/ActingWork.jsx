import React from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiExternalLink } from 'react-icons/fi';

const ActingWork = () => {
  const independentFilms = [
    {
      title: "Vakh Vakh Sansaar",
      language: "Punjabi",
      link: "https://shorted.in/short-films/vakh-vakh-sansaar/",
      description: "A Punjabi short film that explores the emotional struggles of a dysfunctional family, where each character lives in their own emotional world. The film beautifully portrays themes of communication, silence, dreams, and vulnerability through a sensitive and realistic narrative.",
      platform: "Shorted.in",
      year: "2022",
      image: "/images/vakh-vakh-sansaar.png",
      imageLabel: "Vakh Vakh Sansaar Still"
    },
    {
      title: "Do Sadkaan",
      link: "https://youtu.be/NvCjY4egvRk?si=_q2Ursn49vaKni6q",
      description: "A compelling short film exploring crossroads in life — the choices we make and the paths we leave behind.",
      platform: "YouTube",
      year: "",
      image: "/images/do-sadkaan.png",
      imageLabel: "Do Sadkaan Still"
    },
  ];


  const advertisements = [
    {
      title: "Air India",
      director: "Akshay Sundher",
      link: "https://youtu.be/zJtCb629Mtc?si=abEu78suK0CrjAdY",
      description: "National commercial for Air India, directed by Akshay Sundher.",
      image: "/images/air-india.png",
      imageLabel: "Air India Ad Still"
    },
    {
      title: "ACCA India",
      link: "https://youtu.be/g5XeNwuqjuE?si=d6wh8_l6Mb5RPJzT",
      description: "Brand campaign for ACCA India, a global professional accounting body.",
      image: "/images/ASSC.png",
      imageLabel: "ACCA India Ad Still"
    },
  ];

  const FilmCard = ({ film, index }) => (
    <motion.a
      href={film.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="block border border-white/10 bg-white/[0.02] rounded-sm overflow-hidden group cursor-pointer hover:border-white/30 transition-colors duration-300"
    >
      {/* Image placeholder */}
      <div className="relative w-full aspect-video bg-black border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-white/[0.03] group-hover:bg-white/[0.06] transition-colors duration-500"></div>
        
        {/* Play icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <FiPlay className="text-white text-xl ml-0.5" />
          </div>
        </div>

        {film.image ? (
          <img src={film.image} alt={film.title} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="italic text-white/15 text-sm tracking-wider">
              {film.imageLabel}
            </span>
          </div>
        )}

        {/* Platform badge */}
        {film.platform && (
          <div className="absolute bottom-3 left-3 z-20">
            <span className="text-[10px] uppercase tracking-widest text-white/70 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded">
              {film.platform}
            </span>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-4 gap-3">
          <div>
            <h4 className="font-bebas text-2xl md:text-3xl text-white group-hover:text-accent transition-colors leading-tight">
              {film.title}
            </h4>
            {film.language && (
              <span className="text-xs text-white/40 tracking-wider uppercase mt-1 inline-block">{film.language}</span>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 mt-1">
            {film.year && (
              <span className="text-xs uppercase tracking-wider text-white/40 bg-white/5 px-2 py-1 rounded">{film.year}</span>
            )}
            <FiExternalLink className="text-white/20 group-hover:text-white/70 transition-colors" />
          </div>
        </div>

        {film.description && (
          <p className="text-white/45 font-light leading-relaxed text-sm">
            {film.description}
          </p>
        )}

        {film.director && (
          <p className="text-white/40 font-light text-sm mt-3">
            Directed by <span className="text-white/60">{film.director}</span>
          </p>
        )}
      </div>
    </motion.a>
  );

  return (
    <section id="work" className="py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bebas text-6xl md:text-8xl text-heading mb-16 text-center md:text-left">
            WORK EXPERIENCE
          </h2>
        </motion.div>

        {/* Independent Films */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-medium text-white mb-10 uppercase tracking-widest border-b border-white/20 pb-4"
          >
            Independent Films
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {independentFilms.map((film, index) => (
              <FilmCard key={index} film={film} index={index} />
            ))}
          </div>
        </div>



        {/* Advertisements */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-medium text-white mb-10 uppercase tracking-widest border-b border-white/20 pb-4"
          >
            Advertisements
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {advertisements.map((ad, index) => (
              <FilmCard key={index} film={ad} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ActingWork;
