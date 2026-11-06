import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Printer, GraduationCap, Award, Cpu, HeartHandshake, CheckCircle2 } from 'lucide-react'

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Avanthika_J_Resume.pdf
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-royal-600 transition-colors shadow-xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
                aria-label="Close resume preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Sheet Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-slate-800">
            {/* Header */}
            <div className="border-b border-slate-200 pb-5">
              <h2 className="text-2xl font-bold text-slate-900 font-display">Avanthika J</h2>
              <p className="text-royal-600 font-medium text-sm mt-0.5">
                BTech Computer Science and Engineering Student · Aspiring Developer
              </p>
              <p className="text-xs text-slate-600 mt-2 flex flex-wrap gap-x-4 gap-y-1">
                <span>📍 Kerala, India</span>
                <span>🎓 Amal Jyothi College of Engineering</span>
                <span>📧 avanthika@example.com</span>
                <span>🔗 github.com/avanthika-j</span>
              </p>
            </div>

            {/* Profile Summary */}
            <div className="space-y-2">
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-royal-600"></span> Professional Summary
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Passionate Computer Science student interested in AI, web development, and innovative technologies.
                Enjoys exploring ideas, solving problems, and creating meaningful digital experiences. Strong academic foundation
                with hands-on project experience in embedded systems and water quality monitoring.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-600 flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-royal-600" /> Education
              </h3>
              <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">
                    BTech in Computer Science and Engineering
                  </h4>
                  <p className="text-xs text-slate-600">
                    Amal Jyothi College of Engineering · Kerala, India
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block text-xs font-semibold px-2 py-0.5 bg-royal-50 text-royal-700 rounded-md border border-royal-200">
                    CGPA: 9.1
                  </span>
                  <p className="text-xs text-slate-600 mt-1">2026 – 2030</p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-2">
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-600 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-royal-600" /> Featured Project
              </h3>
              <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-100 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-slate-900">
                    Smart Water Purification System
                  </h4>
                  <span className="text-xs text-royal-600 font-medium">IoT & Embedded Systems</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  An innovative water purification project that integrates ESP sensors to monitor water quality
                  and support efficient purification processes. The project focuses on smart water management
                  and improving water quality monitoring through sensor-based technology.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['ESP Sensors', 'Embedded Systems', 'Water Quality Monitoring'].map((tag) => (
                    <span key={tag} className="text-[10px] font-medium bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-600 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-royal-600" /> Technical & Soft Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                <div className="bg-slate-50/80 p-2.5 rounded-lg border border-slate-100">
                  <span className="font-semibold text-slate-900 block mb-1">Programming:</span>
                  <span>C, C++</span>
                </div>
                <div className="bg-slate-50/80 p-2.5 rounded-lg border border-slate-100">
                  <span className="font-semibold text-slate-900 block mb-1">Web Development & Tools:</span>
                  <span>HTML, GitHub</span>
                </div>
                <div className="bg-slate-50/80 p-2.5 rounded-lg border border-slate-100">
                  <span className="font-semibold text-slate-900 block mb-1">Design:</span>
                  <span>UI/UX Design</span>
                </div>
                <div className="bg-slate-50/80 p-2.5 rounded-lg border border-slate-100">
                  <span className="font-semibold text-slate-900 block mb-1">Soft Skills:</span>
                  <span>Problem Solving, Communication, Leadership</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-600 flex items-center gap-2">
                <HeartHandshake className="w-3.5 h-3.5 text-royal-600" /> Volunteering Experience
              </h3>
              <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-100 text-xs text-slate-700 leading-relaxed">
                Through volunteering activities, I developed communication, teamwork, leadership, and collaboration skills
                while contributing to activities beyond academics.
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Verified Student Resume Profile
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 rounded-xl hover:bg-slate-200/50 transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-royal-600 hover:bg-royal-700 rounded-xl shadow-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save / Download PDF</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

