"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

export function ProjectCard({
  project,
  index,
}: {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    demoUrl?: string
    codeUrl: string
    liveUrl?: string
    id: number
  }
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/50 dark:bg-slate-800/50 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all duration-300 group h-full flex flex-col"
    >
      <div className="relative overflow-hidden h-48">
        <div className="w-full h-full relative">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image || "/placeholder.svg"})` }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex gap-3 justify-center">
            {(project.demoUrl || project.liveUrl) && (
              <a
                href={project.demoUrl || project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-colors"
              >
                <ExternalLink size={18} className="text-white" />
              </a>
            )}
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors"
            >
              <Github size={18} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="p-5 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
        <p className="text-slate-700 dark:text-gray-300 mb-4 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
