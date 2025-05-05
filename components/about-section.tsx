"use client"
import { motion } from "framer-motion"

export function AboutSection() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "C",
    "JAVA",
    "C++",
    "Python",
    "Tailwind CSS",
    "Git",
    "Responsive Design",
  ]

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              I am an Electronics and Communication Engineer with expertise in photography, video editing, and Frontend
              Development. My unique blend of technical knowledge and creative skills allows me to tackle challenges
              with innovative solutions. Passionate about technology and design, I aim to create impactful projects that
              merge functionality with aesthetics.
            </p>
            <p className="text-gray-300 mb-4">
              I specialize in creating responsive, user-friendly web applications using modern frameworks and libraries.
              My goal is to build digital experiences that are not only visually appealing but also functional and
              accessible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-800 text-white px-3 py-1.5 rounded-full border border-purple-500/30 hover:border-purple-500 transition-colors duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
