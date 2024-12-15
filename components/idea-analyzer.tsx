"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { LayoutDashboard, BookOpen, Briefcase, MessageSquare, Settings, LogOut, Send } from 'lucide-react'
import Image from 'next/image'

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: BookOpen, label: "Learning Path" },
  { icon: Briefcase, label: "Business" },
  { icon: MessageSquare, label: "Chatbot" },
]

export function IdeaAnalyzer() {
  const [idea, setIdea] = useState('')
  const [analysis, setAnalysis] = useState<string | null>(null)

  const handleSubmit = () => {
    // Simulating API call for idea analysis
    setTimeout(() => {
      setAnalysis("Your idea has potential! Here's a breakdown:\n\n" +
        "• Market Viability: High\n" +
        "• Innovation Score: 8/10\n" +
        "• Scalability: Medium\n" +
        "• Potential Challenges: Funding, Competition\n\n" +
        "Next Steps: Conduct market research and develop a prototype.")
    }, 1000)
  }

  return (
    <div className="bg-[#1C1C1C] text-white flex w-full aspect-[16/9] text-[4px] shadow-lg rounded-2xl overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/5 bg-[#141414] p-1.5 flex flex-col">
        <div className="flex items-center mb-3">
          <div className="w-2.5 h-2.5 mr-1">
            <Image
              src="/placeholder.svg"
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
      <div className="flex-1 p-2.5 bg-[#E8E8E8] relative overflow-hidden">
        {/* Wave Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
            <path
              d="M0,100 C150,150 250,50 400,100 L400,0 L0,0 Z"
              fill="#F4844A"
              fillOpacity="0.1"
            >
              <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                values="
                  M0,100 C150,150 250,50 400,100 L400,0 L0,0 Z;
                  M0,100 C150,50 250,150 400,100 L400,0 L0,0 Z;
                  M0,100 C150,150 250,50 400,100 L400,0 L0,0 Z"
              />
            </path>
          </svg>
        </motion.div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-start max-w-[80%] mx-auto gap-2 pt-2">
          <motion.h1
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[0.8rem] font-bold text-black text-center"
          >
            What's Your Big Thing?
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <textarea
              className="w-full h-[3rem] rounded-lg bg-white p-[0.3rem] text-[0.4rem] text-black resize-none focus:outline-none focus:ring-1 focus:ring-[#F4844A]"
              placeholder="Tell us about your business idea..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            />
            <div className="flex justify-end mt-[0.3rem]">
              <button
                className="bg-[#1C1C1C] text-white px-[0.5rem] py-[0.25rem] rounded-md text-[0.4rem] hover:bg-[#2C2C2C] transition-colors flex items-center gap-[0.2rem]"
                onClick={handleSubmit}
              >
                <span>Send</span>
                <Send className="w-[0.4rem] h-[0.4rem]" />
              </button>
            </div>
          </motion.div>

          {analysis && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full mt-[0.5rem] bg-white rounded-lg p-[0.3rem] text-[0.35rem] text-black overflow-y-auto max-h-[5rem]"
            >
              <h2 className="font-bold mb-[0.2rem] text-[0.4rem]">Analysis Results:</h2>
              <pre className="whitespace-pre-wrap font-sans">{analysis}</pre>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

