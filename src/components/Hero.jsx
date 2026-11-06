import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Send, Sparkles, Code2, Cpu, Globe, CheckCircle } from 'lucide-react'
import ResumeModal from './ResumeModal'

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  const scrollTo = (href) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section
        id="home"
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-subtle-grid"
      >
        {/* Subtle royal blue ambient gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-royal-400/15 rounded-full blur-3xl opacity-70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 -right-20 w-80 h-80 bg-royal-600/10 rounded-full blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 -left-20 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Text & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 text-center lg:text-left space-y-6"
            >
              {/* Badge Label */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-50 border border-royal-200/80 text-royal-700 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-xs"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-royal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-royal-600" />
                </span>
                <span>BTECH CSE STUDENT | ASPIRING DEVELOPER</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
              >
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 via-royal-700 to-blue-500">
                  Avanthika J.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
              >
                Passionate Computer Science student interested in AI, web development, and innovative technologies.
                I enjoy exploring ideas, solving problems, and creating meaningful digital experiences.
              </motion.p>

              {/* Quick Info Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs text-slate-500 font-medium"
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg border border-slate-200/80 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Amal Jyothi College of Engg
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg border border-slate-200/80 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-500" /> CGPA: 9.1
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg border border-slate-200/80 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Kerala, India
                </span>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4"
              >
                {/* Explore My Projects */}
                <button
                  type="button"
                  onClick={() => scrollTo('#projects')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-royal-600 text-white font-semibold text-sm shadow-md shadow-royal-600/20 hover:bg-royal-700 hover:shadow-lg hover:shadow-royal-600/30 active:scale-[0.98] transition-all group"
                >
                  <span>Explore My Projects</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </button>

                {/* Download Resume */}
                <button
                  type="button"
                  onClick={() => setIsResumeOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-slate-700 font-semibold text-sm border border-slate-200 shadow-xs hover:border-royal-300 hover:text-royal-600 hover:bg-royal-50/40 active:scale-[0.98] transition-all group"
                >
                  <Download className="w-4 h-4 text-slate-500 group-hover:text-royal-600 group-hover:translate-y-0.5 transition-all" />
                  <span>Download Resume</span>
                </button>

                {/* Let's Connect */}
                <button
                  type="button"
                  onClick={() => scrollTo('#contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-100/80 text-slate-700 font-semibold text-sm border border-transparent hover:bg-slate-200/80 hover:text-slate-900 active:scale-[0.98] transition-all group"
                >
                  <Send className="w-4 h-4 text-royal-600 group-hover:translate-x-0.5 transition-transform" />
                  <span>Let's Connect</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column: Premium Profile Picture / Visual Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative w-72 sm:w-80 md:w-96">
                
                {/* Decorative Layered Card Backdrop */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-royal-600 to-blue-400 opacity-20 blur-xl animate-pulse" />

                {/* Main Profile Card Container */}
                <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-5 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300">
                  
                  {/* Profile Picture Placeholder Visual */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-b from-royal-50 to-slate-100 border border-royal-100 flex flex-col items-center justify-center p-6 text-center group">
                    
                    {/* Subtle Circular Tech Glow */}
                    <div className="absolute inset-0 bg-radial-gradient opacity-60" />

                    {/* Developer Avatar Silhouette / Monogram Illustration */}
                    <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-royal-600 via-royal-500 to-blue-400 p-1 shadow-lg shadow-royal-500/25">
                      <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center overflow-hidden relative">
                        {/* Abstract Tech Lines */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:12px_12px]" />
                        
                        {/* Sleek SVG Minimalist Developer Avatar */}
                        <svg
                          className="w-24 h-24 sm:w-28 sm:h-28 text-royal-600 drop-shadow-sm"
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="50" cy="38" r="22" fill="#DBEAFE" />
                          <circle cx="50" cy="36" r="18" fill="#2563EB" />
                          {/* Modern stylized hair / silhouette */}
                          <path
                            d="M32 35 C32 24, 40 18, 50 18 C60 18, 68 24, 68 35 C68 40, 66 45, 62 46 C60 40, 56 36, 50 36 C44 36, 40 40, 38 46 C34 45, 32 40, 32 35 Z"
                            fill="#1E3A8A"
                          />
                          <path
                            d="M20 86 C20 68, 33 60, 50 60 C67 60, 80 68, 80 86"
                            stroke="#2563EB"
                            strokeWidth="8"
                            strokeLinecap="round"
                          />
                        </svg>

                        {/* Monogram tag */}
                        <span className="absolute bottom-2 text-[11px] font-bold tracking-widest text-royal-700 uppercase bg-royal-50 px-2 py-0.5 rounded-full border border-royal-200">
                          Avanthika J
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 mt-4">
                      <span className="text-xs font-semibold text-slate-800">
                        Profile Picture Placeholder
                      </span>
                      <p className="text-[11px] text-slate-600">
                        Computer Science & Engineering
                      </p>
                    </div>
                  </div>

                  {/* Floating Badges */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-card border border-slate-200/80 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-800">CSE @ AJCE</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute -bottom-4 -left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-card border border-slate-200/80 flex items-center gap-2"
                  >
                    <Cpu className="w-4 h-4 text-royal-600" />
                    <span className="text-xs font-semibold text-slate-800">
                      IoT & Web Dev Explorer
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  )
}

