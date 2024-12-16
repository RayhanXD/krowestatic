"use client"

import { motion } from "framer-motion"
import { MessageSquare, TreesIcon as Tree, Lightbulb, LayoutDashboard, BookOpen, Briefcase, Settings, LogOut } from 'lucide-react'
import Image from "next/image"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: BookOpen, label: "Learning Path" },
  { icon: Briefcase, label: "Business" },
  { icon: MessageSquare, label: "Chatbot" },
]

const features = [
  {
    title: "Krowe Chatbot",
    description: "An answer to your questions is here! Our AI chatbot is able to address any of your business needs and provide you with detailed and tailored advice on any lesson",
    icon: MessageSquare,
    component: (
      <div className="bg-white text-black flex w-full aspect-[16/9] text-[4px] shadow-lg rounded-2xl overflow-hidden">
        <div className="w-1/5 bg-[#141414] p-1.5 flex flex-col">
          <div className="flex items-center mb-3">
            <div className="w-2.5 h-2.5 mr-1 bg-[#FF4800] rounded-full" />
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
        <div className="flex-1 p-2.5 bg-white">
          <div className="h-full flex flex-col">
            <h2 className="text-[0.8rem] font-bold mb-2 text-black">How may Kairos help you today?</h2>
            <div className="flex-1 bg-gray-100 rounded-lg p-2 mb-2 overflow-y-auto">
              <div className="space-y-2">
                <div className="bg-gray-200 rounded-lg p-1 max-w-[80%]">
                  <p className="text-[0.35rem]">Hello! How can I assist you with your business today?</p>
                </div>
                <div className="bg-[#FF4800] text-white rounded-lg p-1 max-w-[80%] ml-auto">
                  <p className="text-[0.35rem]">I need help with my marketing strategy.</p>
                </div>
                <div className="bg-gray-200 rounded-lg p-1 max-w-[80%]">
                  <p className="text-[0.35rem]">Certainly! Let's start by analyzing your target audience. Can you tell me more about your ideal customer?</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <input type="text" placeholder="Ask Kairos anything..." className="flex-1 bg-gray-200 rounded-l-lg px-2 py-1 text-[0.4rem] text-black" />
              <button className="bg-[#FF4800] text-white rounded-r-lg px-2 py-1 text-[0.4rem]">Send</button>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Lesson Tree",
    description: "The most efficient learning path to level up a business never before. Krowe has a structured lesson tree to guide you through lessons as you grow, allowing you to expand on different categories",
    icon: Tree,
    component: (
      <div className="bg-white text-black flex w-full aspect-[16/9] text-[4px] shadow-lg rounded-2xl overflow-hidden">
        <div className="w-1/5 bg-[#141414] p-1.5 flex flex-col">
          <div className="flex items-center mb-3">
            <div className="w-2.5 h-2.5 mr-1 bg-[#FF4800] rounded-full" />
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
        <div className="flex-1 p-2.5 bg-white">
          <div className="h-full flex flex-col">
            <h2 className="text-[0.8rem] font-bold mb-2 text-black">Your Learning Path</h2>
            <div className="flex-1 bg-gray-100 rounded-lg p-2 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 border-2 border-[#FF4800] rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-[#FF4800] rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#FF4800] rounded-full flex items-center justify-center text-white text-[0.4rem] font-bold">Start</div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gray-300 rounded-lg -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-[0.3rem] font-medium">Basics</div>
                <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-gray-300 rounded-lg translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-[0.3rem] font-medium">Growth</div>
                <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-gray-300 rounded-lg -translate-x-1/2 translate-y-1/2 flex items-center justify-center text-[0.3rem] font-medium">Scale</div>
                <div className="absolute bottom-1/3 right-1/5 w-8 h-8 bg-gray-300 rounded-lg translate-x-1/2 translate-y-1/2 flex items-center justify-center text-[0.3rem] font-medium">Expert</div>
                <svg className="absolute inset-0" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <line x1="50%" y1="50%" x2="25%" y2="50%" stroke="#FF4800" strokeWidth="0.5" />
                  <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#FF4800" strokeWidth="0.5" />
                  <line x1="50%" y1="50%" x2="33%" y2="75%" stroke="#FF4800" strokeWidth="0.5" />
                  <line x1="50%" y1="50%" x2="80%" y2="66%" stroke="#FF4800" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Idea Analyzer",
    description: "Get instant feedback on your new ideas with Krowe like uniqueness and market potential. Get constructive feedback on ways to change the idea to fit better or what could be different",
    icon: Lightbulb,
    component: (
      <div className="bg-white text-black flex w-full aspect-[16/9] text-[4px] shadow-lg rounded-2xl overflow-hidden">
        <div className="w-1/5 bg-[#141414] p-1.5 flex flex-col">
          <div className="flex items-center mb-3">
            <div className="w-2.5 h-2.5 mr-1 bg-[#FF4800] rounded-full" />
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
        <div className="flex-1 p-2.5 bg-white">
          <div className="h-full flex flex-col">
            <h2 className="text-[0.8rem] font-bold mb-2 text-black">What's Your Big Thing?</h2>
            <div className="flex-1 bg-gray-100 rounded-lg p-2 mb-2 overflow-y-auto">
              <div className="space-y-1">
                <label className="block text-[0.4rem] font-medium text-gray-700">Business Idea</label>
                <textarea className="w-full bg-white rounded border border-gray-300 p-1 text-[0.35rem] resize-none text-black" rows={3} placeholder="Describe your business idea..." />
              </div>
              <div className="space-y-1 mt-2">
                <label className="block text-[0.4rem] font-medium text-gray-700">Target Market</label>
                <input type="text" className="w-full bg-white rounded border border-gray-300 p-1 text-[0.35rem] text-black" placeholder="Who is your target audience?" />
              </div>
              <div className="space-y-1 mt-2">
                <label className="block text-[0.4rem] font-medium text-gray-700">Unique Selling Proposition</label>
                <input type="text" className="w-full bg-white rounded border border-gray-300 p-1 text-[0.35rem] text-black" placeholder="What makes your idea unique?" />
              </div>
            </div>
            <button className="bg-[#FF4800] text-white rounded-lg px-2 py-1 text-[0.4rem]">Analyze Idea</button>
          </div>
        </div>
      </div>
    )
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black">
            Powerful Features for Modern Business
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to grow and manage your business effectively
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <feature.icon className="h-10 w-10 text-[#FF4800] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                {feature.component}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

