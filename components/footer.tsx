import Link from "next/link"
import { Github, Linkedin, Mail, Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 py-10 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
            >
              Satyam
            </Link>
            <p className="text-gray-400 mt-2">Creating beautiful web experiences</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <SocialIcon icon={<Github />} href="https://github.com/satyam-dey" />
              <SocialIcon icon={<Linkedin />} href="https://www.linkedin.com/in/satyam-dey-975571227" />
              <SocialIcon icon={<Mail />} href="mailto:satyamdey4651@gmail.com" />
              <SocialIcon icon={<Facebook />} href="https://www.facebook.com/profile.php?id=100023405660683" />
            </div>
            <p className="text-gray-400 text-sm">&copy; {currentYear} Satyam. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300 text-white"
    >
      {icon}
    </a>
  )
}
