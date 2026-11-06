import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Terminal, 
  Globe, 
  GitBranch, 
  Palette, 
  Lightbulb, 
  MessageSquare, 
  Users, 
  Sparkles,
  Layers,
  Wrench,
  Cpu
} from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming',
      description: 'Core procedural and object-oriented foundations',
      icon: Terminal,
      skills: [
        { name: 'C', icon: Code2, desc: 'Systems & procedural programming' },
        { name: 'C++', icon: Terminal, desc: 'Object-oriented programming & algorithms' },
      ],
    },
    {
      category: 'Web Development',
      description: 'Foundational markup for modern web experiences',
      icon: Globe,
      skills: [
        { name: 'HTML', icon: Globe, desc: 'Semantic web structure & standards' },
      ],
    },
    {
      category: 'Tools',
      description: 'Collaboration, source control & workflow',
      icon: Wrench,
      skills: [
        { name: 'GitHub', icon: GitBranch, desc: 'Version control & project management' },
      ],
    },
    {
      category: 'Design',
      description: 'User-centered digital interface principles',
      icon: Palette,
      skills: [
        { name: 'UI/UX', icon: Palette, desc: 'Wireframing, prototyping & user experience' },
      ],
    },
    {
      category: 'Soft Skills',
      description: 'Interpersonal strengths & engineering mindset',
      icon: Users,
      skills: [
        { name: 'Problem Solving', icon: Lightbulb, desc: 'Analytical thinking & logical breakdown' },
        { name: 'Communication', icon: MessageSquare, desc: 'Clear idea articulation & active listening' },
        { name: 'Leadership', icon: Users, desc: 'Team coordination & shared accountability' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#F8FAFC] relative">
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
            <Layers className="w-3.5 h-3.5 text-royal-600" />
            <span>Skills & Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Technical & Professional Foundation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-600 text-base max-w-xl mx-auto"
          >
            A solid toolkit spanning systems programming, web essentials, modern developer tools, design principles, and collaborative soft skills.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, groupIdx) => {
            const GroupIcon = group.icon
            const isFullSpan = group.category === 'Soft Skills'

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
                className={`${
                  isFullSpan ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                } bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-royal-200 transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-lg text-slate-900">
                      {group.category}
                    </h3>
                    <div className="w-9 h-9 rounded-xl bg-royal-50 text-royal-600 flex items-center justify-center">
                      <GroupIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-600">{group.description}</p>
                </div>

                {/* Skills list inside category */}
                <div
                  className={`grid ${
                    isFullSpan ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'
                  } gap-3`}
                >
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -3, scale: 1.01 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-royal-300 hover:bg-white hover:shadow-subtle transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-3 mb-1.5">
                          <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 group-hover:text-royal-600 group-hover:border-royal-200 transition-colors shadow-xs">
                            <SkillIcon className="w-4 h-4" />
                          </div>
                          <span className="font-semibold text-slate-900 text-sm group-hover:text-royal-600 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 pl-1">
                          {skill.desc}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

