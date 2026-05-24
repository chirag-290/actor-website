import React from 'react';
import { motion } from 'framer-motion';

const DirectionWork = () => {
  const categories = [
    {
      title: "Theatre Direction",
      items: [
        { name: "Modern Yamlok", year: "2022" },
        { name: "Baaki Itehaas", year: "2022" },
        { name: "Evam Indrajit", year: "2023" }
      ]
    },
    {
      title: "Direction Team at Films",
      items: [
        { name: "Actor Trainer — Hanere De Panchhi, Produced by Hansal Mehta", year: "2024" },
        { name: "Temp DA to Raam Reddy — Lavendar Fire", year: "2026" }
      ]
    },
    {
      title: "Directed Films",
      items: [
        { name: "Noise", year: "2023" },
        { name: "For Hire", year: "2025" },
        { name: "Noise 2", year: "2026" }
      ]
    }
  ];

  return (
    <section id="direction" className="py-24 px-6 lg:px-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-bebas text-6xl md:text-8xl text-heading mb-8">DIRECTION WORK</h2>
          
          <div className="pl-6 border-l-2 border-white/20 max-w-4xl">
            <p className="text-xl md:text-2xl text-white/80 font-light italic leading-relaxed">
              "I feel like story-telling is the ultimate form of art. And personally, it provides the most creative fulfillment in return. Not FINANCIAL tho."
            </p>
          </div>
        </motion.div>

        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 hide-scrollbar snap-x snap-mandatory">
          <div className="flex gap-8 lg:grid lg:grid-cols-3 lg:gap-12 min-w-max lg:min-w-0 w-full">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="w-[85vw] sm:w-[350px] lg:w-auto flex-shrink-0 snap-start"
              >
                <div className="h-full border-t border-white/20 pt-6">
                  <h3 className="text-2xl font-bebas tracking-wider text-white mb-8">
                    {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.items.map((item, i) => (
                      <div key={i} className="group">
                        <div className="flex justify-between items-start gap-4">
                          <p className="text-lg text-white/80 font-light group-hover:text-white transition-colors">
                            {item.name}
                          </p>
                          <span className="text-xs uppercase tracking-widest text-white/40 mt-1 flex-shrink-0">
                            {item.year}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DirectionWork;
