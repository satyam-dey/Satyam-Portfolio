"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, Facebook } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const textOptions = ["Web Developer", "Photographer", "Video Editor"]
  const typingSpeed = 150
  const deletingSpeed = 75
  const pauseDuration = 1500

  useEffect(() => {
    let timer
    let currentText = textOptions[currentTextIndex]
    let isDeleting = false
    let charIndex = 0

    const type = () => {
      currentText = textOptions[currentTextIndex]

      if (isDeleting) {
        charIndex--
        setTypedText(currentText.substring(0, charIndex))
      } else {
        charIndex++
        setTypedText(currentText.substring(0, charIndex))
      }

      if (!isDeleting && charIndex === currentText.length) {
        timer = setTimeout(() => {
          isDeleting = true
          type()
        }, pauseDuration)
        return
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length)
      }

      const typingInterval = isDeleting ? deletingSpeed : typingSpeed
      timer = setTimeout(type, typingInterval)
    }

    timer = setTimeout(type, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentTextIndex, textOptions])

  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Satyam</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 flex items-center text-slate-200">
              I am a{" "}
              <span className="ml-2 text-purple-400 min-w-[12rem]">
                {typedText}
                <span className="animate-blink">|</span>
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Passionate about creating beautiful, responsive, and user-friendly web applications with modern
              technologies and best practices.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <a
                  href="https://drive.google.com/file/d/1BV89rXCFysOmwG1BeCBiMhJf3yYDcWoJ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
              <SocialIcon icon={<Github />} href="https://github.com/satyam-dey" />
              <SocialIcon icon={<Linkedin />} href="https://www.linkedin.com/in/satyam-dey-975571227" />
              <SocialIcon icon={<Mail />} href="mailto:satyamdey4651@gmail.com" />
              <SocialIcon icon={<Facebook />} href="https://www.facebook.com/profile.php?id=100023405660683" />
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-2 rounded-lg">
                <div
                  className="w-full h-[500px] rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NMP_2192.JPG-ts3lrtGN8vX0S3y1kSnzhXcPIz6BCT.jpeg')`,
                  }}
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SocialIcon({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300"
    >
      {icon}
    </a>
  )
}
