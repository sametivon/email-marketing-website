"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, TrendingUp } from "lucide-react"

const stats = [
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Users, value: "200+", label: "Clients Served" },
  { icon: TrendingUp, value: "300%", label: "Average ROI Increase" },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                EmailPro
              </span>
            </h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                With over 5 years of experience in email marketing, I've helped hundreds of businesses transform their
                email strategies and achieve remarkable growth.
              </p>
              <p>
                My data-driven approach combines creative storytelling with technical expertise to create email
                campaigns that not only engage your audience but drive real business results.
              </p>
              <p>
                From small startups to established enterprises, I've consistently delivered campaigns that exceed
                expectations and generate substantial ROI for my clients.
              </p>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={statsVariants}>
                <Card className="bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.04] transition-all duration-300">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-white/60">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
