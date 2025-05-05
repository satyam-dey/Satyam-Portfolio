"use client"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Fire Fighting Robot",
      description:
        "An IoT-enabled fire-fighting robot detects and extinguishes fires autonomously using flame and temperature sensors.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ji.jpg-fNvR3iOJ99LApteUP2RReJ5ldWmHv5.jpeg",
      tags: ["IoT", "Arduino", "Circuit", "Flame Sensor"],
      codeUrl: "https://github.com/satyam-dey/Fire-Fighting-Robot/blob/main/GPS_GSM.ino",
    },
    {
      id: 2,
      title: "Travista - A Travel Friendly Application",
      description:
        "An application which helps tourists during their travel with map support to identify roads and reach destinations.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t-oB15AoaZxF2dhZzbmh09RA0OysWdgj.png",
      tags: ["Next.js", "React", "SQL"],
      liveUrl: "https://travista-swart.vercel.app/",
      codeUrl: "https://github.com/satyam-dey/TraVista",
    },
    {
      id: 3,
      title: "Tic Tac Toe Game",
      description:
        "A simple Tic Tac Toe game using html, CSS, Java Script",
      image: "https://cdnapisec.kaltura.com/p/2172211/thumbnail/entry_id/1_sx7dj5fl/def_height/500/def_width/500/",
      tags: ["Next.js", "React", "SQL"],
      liveUrl: "https://tic-tac-toe-murex-gamma.vercel.app/",
      codeUrl: "https://github.com/satyam-dey/tic-tac-toe",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is built with a focus on performance, user experience, and
            clean code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/satyam-dey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-300 text-white border border-slate-700"
          >
            View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group h-full flex flex-col"
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
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-slate-700 text-purple-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
