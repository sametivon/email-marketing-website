"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    content:
      "Working with EmailPro transformed our email marketing completely. Our open rates increased by 150% and revenue from email campaigns tripled within 3 months.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "E-commerce Plus",
    content:
      "The automation sequences created for us are incredible. We now have a system that nurtures leads and converts them into customers while we sleep.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Creative Agency",
    content:
      "Professional, knowledgeable, and results-driven. The email strategy developed for our agency helped us land 5 new clients in the first month alone.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-[#030303]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Clients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Say</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-white/60 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about their results.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.04] transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/70 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-white/50 text-sm">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
