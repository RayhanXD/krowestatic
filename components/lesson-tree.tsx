"use client"

import { motion } from "framer-motion"
import { LayoutDashboard, BookOpen, Briefcase, MessageSquare, Settings, LogOut } from 'lucide-react'
import Image from 'next/image'

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: BookOpen, label: "Learning Path" },
  { icon: Briefcase, label: "Business" },
  { icon: MessageSquare, label: "Chatbot" },
]

interface LessonCardProps {
  position: "center" | "top" | "right" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

function LessonCard({ position }: LessonCardProps) {
  return (
    <div className="bg-[#E8E8E8] rounded-[0.1rem] overflow-hidden w-[2.5rem] shadow-sm text-[2px]">
      <div className="bg-[#F4844A] text-white font-medium py-[0.05rem] px-[0.1rem]">
        1,000 Instagram Followers
      </div>
      <div className="p-[0.1rem] space-y-[0.05rem]">
        <p className="text-center text-[#333333] leading-tight">
          Increase awareness and sales through one platform of social media outreach.
        </p>
        
        <div className="space-y-[0.05rem]">
          <p className="font-semibold text-[#333333]">Tactics</p>
          <div className="space-y-[0.05rem]">
            <label className="flex items-center gap-[0.05rem]">
              <div className="w-[0.1rem] h-[0.1rem] rounded-full border border-gray-400 flex items-center justify-center">
                <div className="w-[0.05rem] h-[0.05rem] rounded-full bg-transparent" />
              </div>
              <span className="text-[#333333]">Create a Paid Ad</span>
            </label>
            <label className="flex items-center gap-[0.05rem]">
              <div className="w-[0.1rem] h-[0.1rem] rounded-full border border-gray-400 flex items-center justify-center">
                <div className="w-[0.05rem] h-[0.05rem] rounded-full bg-transparent" />
              </div>
              <span className="text-[#333333]">Add Instagram Links to Website</span>
            </label>
            <label className="flex items-center gap-[0.05rem]">
              <div className="w-[0.1rem] h-[0.1rem] rounded-full border border-gray-400 flex items-center justify-center">
                <div className="w-[0.05rem] h-[0.05rem] rounded-full bg-transparent" />
              </div>
              <span className="text-[#333333]">Tell Customers to interact with Instagram</span>
            </label>
          </div>
        </div>

        <div className="text-center">
          <a href="#" className="text-[#F4844A] hover:underline font-medium">
            Lessons On How
          </a>
        </div>

        <div className="space-y-[0.05rem]">
          <div className="flex justify-between text-[#666666]">
            <span>Est: 1 Hour</span>
            <span>3 Tasks Left</span>
          </div>
          <div className="h-[0.1rem] bg-[#E0E0E0] rounded-full overflow-hidden">
            <div className="h-full w-[87%] bg-[#9747FF]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function LessonTree() {
  return (
    <div className="bg-[#1C1C1C] text-white flex w-full aspect-[16/9] text-[4px] shadow-lg rounded-2xl overflow-hidden">
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
      <div className="flex-1 p-2.5 bg-gradient-to-br from-[#1C1C1C] to-[#2C2C2C] relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-[repeat(80,minmax(0,1fr))] gap-[0.1rem]">
            {Array.from({ length: 3200 }).map((_, i) => (
              <div key={i} className="w-[0.05rem] h-[0.05rem] bg-[#333333] rounded-full" />
            ))}
          </div>
        </div>

        <div className="relative h-full">
          {/* Center Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <LessonCard position="center" />
            {/* Connecting Lines */}
            <div className="absolute top-1/2 -right-[0.5rem] w-[0.5rem] h-[0.05rem] bg-white" />
            <div className="absolute top-1/2 -left-[0.5rem] w-[0.5rem] h-[0.05rem] bg-white" />
            <div className="absolute left-1/2 -top-[0.5rem] w-[0.05rem] h-[0.5rem] bg-white" />
            <div className="absolute left-1/2 -bottom-[0.5rem] w-[0.05rem] h-[0.5rem] bg-white" />
            <div className="absolute top-1/2 right-[-0.35rem] w-[0.5rem] h-[0.05rem] bg-white transform rotate-45 origin-left" />
            <div className="absolute top-1/2 right-[-0.35rem] w-[0.5rem] h-[0.05rem] bg-white transform -rotate-45 origin-left" />
            <div className="absolute top-1/2 left-[-0.35rem] w-[0.5rem] h-[0.05rem] bg-white transform -rotate-45 origin-right" />
            <div className="absolute top-1/2 left-[-0.35rem] w-[0.5rem] h-[0.05rem] bg-white transform rotate-45 origin-right" />
          </motion.div>

          {/* Surrounding Cards */}
          {["top", "right", "bottom", "top-left", "top-right", "bottom-left", "bottom-right"].map((position) => (
            <motion.div
              key={position}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`absolute ${
                position === "top" ? "left-1/2 top-[0.5rem] -translate-x-1/2" :
                position === "right" ? "right-[0.5rem] top-1/2 -translate-y-1/2" :
                position === "bottom" ? "left-1/2 bottom-[0.5rem] -translate-x-1/2" :
                position === "top-left" ? "left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2" :
                position === "top-right" ? "right-1/4 top-1/4 translate-x-1/2 -translate-y-1/2" :
                position === "bottom-left" ? "left-1/4 bottom-1/4 -translate-x-1/2 translate-y-1/2" :
                "right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2"
              }`}
            >
              <LessonCard position={position as LessonCardProps['position']} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

