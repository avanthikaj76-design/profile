import React from 'react'
import { motion } from 'framer-motion'
import { Globe, ShieldCheck, Brain, Rocket, Compass, ArrowUpRight } from 'lucide-react'

export default function Interests() {
  const interests = [
    {
      title: 'Web Development',
      icon: Globe,
      description:
        'Building responsive, accessible, and elegant web experiences that connect users to meaningful digital platforms.',
      tag: 'Frontend & Architecture',
    },
    {
      title: 'Cybersecurity',
      icon: ShieldCheck,
      description:
        'Understanding system security principles, data integrity, secure computing practices, and digital protection.',
      tag: 'Systems & Security',
    },
    {
      title: 'Artificial Intelligence',
      icon: Brain,
      description:
        'Exploring machine learning, intelligent problem solving, data modeling, and automated decision making.',
      tag: 'Intelligent Systems',
    },
    {
      title: 'Innovative Technologies',
      icon: Rocket,
      description:
        'Experimenting with emerging tech paradigms, smart sensor networks, IoT integrations, and future hardware innovations.',
      tag: 'Emerging & IoT',
    },
  ]

  return (
    <section id="interests" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-50 text-royal-700 text-xs font-semibold tracking-wider uppercase mb-3 border border-royal-200/60"
          >
            <Compass className="w-3.5 h-3.5 text-royal-600" />
            <span>Tech Exploration</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Passions & Areas of Interest
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-600 text-base max-w-xl mx-auto"
          >
            Domains that ignite curiosity, drive independent learning, and shape future engineering pursuits.
          </motion.p>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-slate-50/60 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-royal-300 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 text-royal-600 group-hover:bg-royal-600 group-hover:text-white flex items-center justify-center transition-colors shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200/80">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2.5 group-hover:text-royal-600 transition-colors font-display">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom micro indicator */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-600 group-hover:text-royal-600 transition-colors">
                  <span>Explore Domain</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

