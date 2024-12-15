"use client"

import { motion } from "framer-motion"
import { LayoutDashboard, BookOpen, Briefcase, MessageSquare, Settings, LogOut, Users, Layout, Lightbulb, Send } from 'lucide-react'
import Image from "next/image"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: BookOpen, label: "Learning Path" },
  { icon: Briefcase, label: "Business" },
  { icon: MessageSquare, label: "Chatbot" },
]

const features = [
  {
    title: "Your 24/7 Mentor",
    description: "Get expert guidance and answers to complex business questions anytime.",
    icon: Users
  },
  {
    title: "Navigate The Platform",
    description: "Easily learn and navigate our platform with Kairos as your guide.",
    icon: Layout
  },
  {
    title: "Creative Inspiration",
    description: "Generate ideas for logos, names, and more, all licensed for your use.",
    icon: Lightbulb
  }
]

export function Chatbot() {
  return (
    <div className="bg-[#1C1C1C] rounded-2xl overflow-hidden flex w-full aspect-[16/9] text-[4px] shadow-lg">
      {/* Sidebar */}
      <div className="w-1/5 bg-[#141414] p-1.5 flex flex-col">
        <div className="flex items-center mb-3">
          <div className="w-2.5 h-2.5 mr-1">
            <Image
              src="/krowelogo.png"
              alt="Krowe Logo"
              width={10}
              height={10}
              className="opacity-80"
            />
          </div>
          <span className="text-[#FF4800] font-bold text-[0.5rem]">KROWE</span>
        </div>
        <nav className="flex-1">
          <ul className="space-y-1.5">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                  <item.icon className="w-1.5 h-1.5 mr-1" />
                  <span className="truncate text-[0.4rem]">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto space-y-1.5">
          <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
            <Settings className="w-1.5 h-1.5 mr-1" />
            <span className="truncate text-[0.4rem]">Settings</span>
          </a>
          <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
            <LogOut className="w-1.5 h-1.5 mr-1" />
            <span className="truncate text-[0.4rem]">Log Out</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-2.5 bg-gradient-to-br from-[#1C1C1C] to-[#2C2C2C]">
        <div className="max-w-full mx-auto">
          <div className="flex justify-end mb-4">
            <div className="w-5 h-5 relative opacity-30">
              <Image
                src="/krowelogo.png"
                alt="Krowe Bird"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center space-y-2 mb-6">
            <h1 className="text-[0.8rem] font-bold text-white tracking-tight">
              How may Kairos help you Today?
            </h1>
            <p className="text-[0.4rem] text-gray-300 max-w-[80%] mx-auto leading-relaxed">
              Ask any questions regarding your business or idea to get instant feedback. Kairos knows all your completed lessons and every aspect of your business so give it a try!
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="bg-[#252525] rounded-lg p-1.5 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-3 h-3 mx-auto mb-1.5 text-[#FF4800]">
                  <feature.icon className="w-full h-full" />
                </div>
                <h3 className="text-[#FF4800] font-semibold mb-1 text-[0.45rem]">
                  {feature.title}
                </h3>
                <p className="text-[0.35rem] text-gray-300 leading-snug">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Ask Kairos anything..."
              className="w-full bg-[#2C2C2C] rounded-lg px-5 py-1.5 text-[0.45rem] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4800] transition-shadow duration-200"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 text-[#FF4800]">
              <Send className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

