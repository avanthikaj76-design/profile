import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, School, Calendar, Award, MapPin, Sparkles, BookOpen, User } from 'lucide-react'

export default function About() {
  const academicDetails = [
    {
      title: 'College',
      value: 'Amal Jyothi College of Engineering',
      icon: School,
      highlight: false,
      detail: 'Autonomous Engineering Institution',
    },
    {
      title: 'Degree',
      value: 'BTech Computer Science and Engineering',
      icon: GraduationCap,
      highlight: true,
      detail: 'Core Engineering Program',
    },
    {
      title: 'Graduation',
      value: '2026 – 2030',
      icon: Calendar,
      highlight: false,
      detail: 'Undergraduate Program',
    },
    {
      title: 'CGPA',
      value: '9.1',
      icon: Award,
      highlight: true,
      detail: 'Outstanding Academic Performance',
    },
    {
      title: 'Location',
      value: 'Kerala, India',
      icon: MapPin,
      highlight: false,
      detail: 'God\'s Own Country',
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative">
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
            <User className="w-3.5 h-3.5 text-royal-600" />
            <span>About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Engineering Curiosity & Purpose
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between bg-slate-50/70 border border-slate-200/80 rounded-3xl p-7 sm:p-9 shadow-subtle hover:shadow-card transition-shadow"
          >
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-royal-600/10 flex items-center justify-center text-royal-600 mb-2">
                <BookOpen className="w-6 h-6 text-royal-600" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Computer Science and Engineering Student
              </h3>

              {/* Exact user-provided introduction */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                I’m Avanthika J, a Computer Science and Engineering student at Amal Jyothi College of Engineering, Kerala, India. I’m passionate about technology, programming, and exploring innovative solutions. My interests include web development, cybersecurity, artificial intelligence, and emerging technologies. I enjoy learning new skills, collaborating with others, and developing practical solutions through technology.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600 font-medium">
              <span>BTech CSE · 2026–2030</span>
              <span className="text-royal-600 font-semibold">Amal Jyothi College of Engineering</span>
            </div>
          </motion.div>

          {/* Academic Information Modern Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {academicDetails.map((item, idx) => {
              const IconComponent = item.icon
              const isFullWidth = idx === 0 // College card can take full width for clean layout

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`${
                    isFullWidth ? 'sm:col-span-2' : 'sm:col-span-1'
                  } p-5 sm:p-6 rounded-2xl bg-white border ${
                    item.highlight
                      ? 'border-royal-200 bg-gradient-to-br from-white via-royal-50/30 to-royal-50/60 shadow-sm'
                      : 'border-slate-200/90 shadow-subtle'
                  } hover:border-royal-300 hover:shadow-card transition-all duration-200 group flex flex-col justify-between`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                      {item.title}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        item.highlight
                          ? 'bg-royal-600 text-white'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-royal-50 group-hover:text-royal-600'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <div
                      className={`font-display font-bold tracking-tight text-slate-900 ${
                        item.title === 'CGPA'
                          ? 'text-3xl text-royal-600'
                          : 'text-lg sm:text-xl'
                      }`}
                    >
                      {item.value}
                    </div>
                    <div className="text-xs text-slate-600 mt-1 font-medium">
                      {item.detail}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

