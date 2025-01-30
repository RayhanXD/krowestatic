"use client"

import { motion } from "framer-motion"
import { Search, Users2, DollarSign, LineChart } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Idea & Research",
    description: "Validate your concept",
  },
  {
    icon: Users2,
    title: "Team & Value",
    description: "Build your foundation",
  },
  {
    icon: DollarSign,
    title: "Finance & Funding",
    description: "Secure your resources",
  },
  {
    icon: LineChart,
    title: "Marketing",
    description: "Grow your presence",
  },
]

export function Timeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black">Your Journey to Success</h2>
          <p className="mt-4 text-lg text-gray-600">Follow our proven path to build and launch your startup</p>
        </div>

        <div className="relative mt-20">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF4800]/20 via-[#FF4800] to-[#FF4800]/20 transform -translate-y-1/2" />

          {/* Steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#FF4800]/10 rounded-full animate-ping" />
                  <div className="relative z-10 w-20 h-20 rounded-full bg-white border-2 border-[#FF4800] flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-[#FF4800]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}