"use client"

import { motion } from "framer-motion"
import { Dashboard } from "./dashboard"

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-black">
              Your Start Here
            </h1>
            <p className="text-lg text-gray-600">
              Transform your business journey with AI-powered insights and structured learning paths
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://forms.gle/3Sp3RmyQ8u5TXn866" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#FF4800] text-white px-6 py-3 rounded-md hover:bg-black/90">
                  Join The Waitlist
                </button>
              </a>
              <a href="#contact">
                <button className="bg-black text-white px-6 py-3 rounded-md border border-black hover:bg-[#FF4800]">
                  Learn More
                </button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg border shadow-2xl bg-[#f5f5f5] h-[500px]">
              <Dashboard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

