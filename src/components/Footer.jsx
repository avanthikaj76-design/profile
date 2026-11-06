import React from 'react'
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/avanthika-j',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/avanthika-j',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:avanthika.j@example.com',
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-white border-t border-slate-200/80 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          {/* Brand & Designation */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-royal-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
              A
            </div>
            <div>
              <span className="font-display font-bold text-slate-900 tracking-tight text-base block">
                Avanthika J
              </span>
              <span className="text-xs text-slate-500 font-medium">
                BTech Computer Science & Engineering
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-600 hover:text-royal-600 hover:border-royal-200 hover:bg-royal-50/50 flex items-center justify-center transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>

          {/* Back to Top Button */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-semibold hover:text-royal-600 transition-all shadow-2xs group"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>
            Designed and built by <span className="font-semibold text-slate-900">Avanthika J</span>
          </p>
          <p>
            &copy; {currentYear} Avanthika J. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

