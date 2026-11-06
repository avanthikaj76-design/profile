import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Droplets, 
  Cpu, 
  Activity, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Sliders, 
  Waves,
  ShieldCheck,
  FolderGit2,
  Info,
  X
} from 'lucide-react'

export default function Projects() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const project = {
    title: 'Smart Water Purification System',
    category: 'IoT & Embedded Systems',
    description:
      'An innovative water purification project that integrates ESP sensors to monitor water quality and support efficient purification processes. The project focuses on smart water management and improving water quality monitoring through sensor-based technology.',
    tags: ['ESP Sensors', 'Embedded Systems', 'Water Quality Monitoring'],
    githubUrl: 'https://github.com/avanthika-j/smart-water-purification',
  }

  return (
    <>
      <section id="projects" className="py-20 sm:py-28 bg-white relative">
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
              <FolderGit2 className="w-3.5 h-3.5 text-royal-600" />
              <span>Featured Project</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              Hardware & Software Innovation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 text-slate-600 text-base max-w-xl mx-auto"
            >
              Building practical technological solutions through embedded hardware and real-time monitoring.
            </motion.p>
          </div>

          {/* Prominent Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto bg-gradient-to-b from-white to-slate-50/70 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Project Details & Actions */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  
                  {/* Category Pill */}
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-50 text-royal-700 font-semibold text-xs border border-royal-200">
                      <Droplets className="w-3.5 h-3.5 text-royal-600" />
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-600 font-medium">
                      Sensor-Based Architecture
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-display">
                    {project.title}
                  </h3>

                  {/* Exact description from prompt */}
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="pt-2">
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-600 block mb-2.5">
                      Core Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs hover:border-royal-300 hover:text-royal-600 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-royal-500" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Buttons */}
                <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => setIsDetailsOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-royal-600 text-white font-semibold text-sm hover:bg-royal-700 active:scale-95 shadow-sm transition-all group"
                  >
                    <span>View Project Overview</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-700 font-semibold text-sm border border-slate-200 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50 active:scale-95 transition-all shadow-2xs"
                  >
                    <Github className="w-4 h-4 text-slate-800" />
                    <span>GitHub Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual System Illustration */}
              <div className="lg:col-span-5 bg-gradient-to-br from-royal-600/5 via-blue-50/50 to-slate-100/70 p-8 sm:p-10 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-center items-center relative overflow-hidden">
                
                {/* Decorative background circles */}
                <div className="absolute w-64 h-64 rounded-full bg-royal-400/10 blur-2xl pointer-events-none" />

                {/* System Monitoring Visualization Card */}
                <div className="w-full max-w-sm bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-card p-5 space-y-4 relative z-10">
                  
                  {/* Visual Title Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-royal-50 flex items-center justify-center text-royal-600">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-800">
                        ESP Sensor Monitor
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active
                    </span>
                  </div>

                  {/* Monitoring Metrics UI Graphic */}
                  <div className="space-y-2.5">
                    
                    {/* Water Quality Metric */}
                    <div className="bg-slate-50/90 rounded-xl p-3 border border-slate-100">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-slate-500 font-medium flex items-center gap-1.5">
                          <Droplets className="w-3.5 h-3.5 text-royal-500" /> Water Quality Status
                        </span>
                        <span className="font-bold text-royal-700">Sensor-Based</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-royal-600 h-2 rounded-full w-4/5" />
                      </div>
                    </div>

                    {/* Purification Process Metric */}
                    <div className="bg-slate-50/90 rounded-xl p-3 border border-slate-100">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-slate-500 font-medium flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-blue-500" /> Purification Cycle
                        </span>
                        <span className="font-bold text-slate-800">Operational</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-blue-500 h-2 rounded-full w-3/4" />
                      </div>
                    </div>

                    {/* Sensor Telemetry */}
                    <div className="bg-slate-50/90 rounded-xl p-3 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Waves className="w-4 h-4 text-royal-600" />
                        <span className="text-xs font-medium text-slate-600">Smart Water Management</span>
                      </div>
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    </div>

                  </div>

                  {/* Footnote */}
                  <div className="pt-2 text-center">
                    <span className="text-[10px] text-slate-500">
                      Embedded Systems & Sensor Integration Architecture
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* Project Overview Modal */}
      <AnimatePresence>
        {isDetailsOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDetailsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-royal-600" />
                  <h3 className="font-bold text-slate-900 text-lg">Project Overview</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDetailsOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{project.title}</h4>
                  <p className="text-xs text-royal-600 font-semibold mt-0.5">Amal Jyothi College of Engineering · CSE</p>
                </div>

                <div className="p-4 rounded-2xl bg-royal-50/50 border border-royal-100 text-slate-700 text-sm leading-relaxed">
                  {project.description}
                </div>

                <div>
                  <span className="text-xs uppercase font-bold text-slate-600 tracking-wider block mb-2">
                    Key Project Focus
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0 mt-0.5" />
                      <span>Integration of ESP sensors for real-time water quality monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0 mt-0.5" />
                      <span>Supporting efficient, sensor-guided purification processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0 mt-0.5" />
                      <span>Smart water management through embedded systems technology</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsDetailsOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Close
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-royal-600 hover:bg-royal-700 rounded-xl"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

