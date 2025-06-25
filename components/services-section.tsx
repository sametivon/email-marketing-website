"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, BarChart3, Users, Zap, Target, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Mail,
    title: "Campaign Strategy",
    description: "Develop comprehensive email marketing strategies tailored to your business goals and audience.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Deep dive into your email metrics to optimize open rates, click-through rates, and conversions.",
  },
  {
    icon: Users,
    title: "List Building",
    description: "Grow your subscriber base with proven lead magnets and opt-in strategies that convert.",
  },
  {
    icon: Zap,
    title: "Automation Setup",
    description: "Create powerful email sequences that nurture leads and drive sales on autopilot.",
  },
  {
    icon: Target,
    title: "Segmentation",
    description: "Segment your audience for personalized messaging that resonates with each subscriber.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Maximize your email ROI with advanced techniques and conversion optimization.",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="services" className="py-20 bg-gradient-to-b from-[#030303] to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Drive Results
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-white/60 max-w-2xl mx-auto">
            Comprehensive email marketing solutions designed to grow your business and maximize ROI.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.04] transition-all duration-300 group h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
