"use client"

import { motion } from "framer-motion"

export function SkillBadge({ name, delay = 0 }: { name: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-1.5 rounded-full border border-slate-200 dark:border-purple-500/30 hover:border-purple-500 transition-colors duration-300"
    >
      {name}
    </motion.div>
  )
}
