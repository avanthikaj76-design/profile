import React from 'react'
import { motion } from 'framer-motion'
import { HeartHandshake, Users, Award, Sparkles, MessageSquare, Compass, CheckCircle2 } from 'lucide-react'

export default function Experience() {
  const developedSkills = [
    { name: 'Communication', icon: MessageSquare, desc: 'Expressing ideas clearly and actively listening' },
    { name: 'Teamwork', icon: Users, desc: 'Cooperating effectively towards shared objectives' },
    { name: 'Leadership', icon: Award, desc: 'Guiding initiatives and motivating peers' },
    { name: 'Collaboration', icon: Compass, desc: 'Partnering across diverse group activities' },
  ]

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#F8FAFC] relative">
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
            <HeartHandshake className="w-3.5 h-3.5 text-royal-600" />
            <span>Experience & Involvement</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Volunteering & Community Impact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-600 text-base max-w-xl mx-auto"
          >
            Contributing to initiatives beyond academics while developing key interpersonal and leadership qualities.
          </motion.p>
        </div>

        {/* Modern Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Subtle Vertical Timeline Line */}
          <div
            aria-hidden="true"
            className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2 hidden sm:block"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Center Timeline Node Marker */}
            <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-8 w-10 h-10 rounded-full bg-royal-600 text-white items-center justify-center shadow-md shadow-royal-600/30 z-10 border-4 border-[#F8FAFC]">
              <HeartHandshake className="w-5 h-5" />
            </div>

            {/* Main Volunteering Showcase Card */}
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="sm:hidden w-10 h-10 rounded-2xl bg-royal-50 text-royal-600 flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-royal-600">
                      Community & Campus Engagement
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      Volunteering Activities
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium self-start sm:self-auto">
                  <Sparkles className="w-3.5 h-3.5 text-royal-600" />
                  <span>Beyond Academics</span>
                </div>
              </div>

              {/* Exact user-provided experience description */}
              <div className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal mb-8">
                “Through volunteering activities, I developed communication, teamwork, leadership, and collaboration skills while contributing to activities beyond academics.”
              </div>

              {/* Developed Competencies Grid */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-600">
                  Key Strengths & Competencies Developed
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {developedSkills.map((item, idx) => {
                    const SkillIcon = item.icon
                    return (
                      <motion.div
                        key={item.name}
                        whileHover={{ y: -2 }}
                        className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/70 flex items-start gap-3 hover:bg-royal-50/30 hover:border-royal-200 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 text-royal-600 flex items-center justify-center shrink-0 shadow-2xs">
                          <SkillIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-semibold text-slate-900 text-sm block">
                            {item.name}
                          </span>
                          <span className="text-xs text-slate-600">
                            {item.desc}
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

