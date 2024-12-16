"use client"

import { motion } from "framer-motion"
import { Code2, Megaphone, Lightbulb, MoreVertical, ChevronRight } from 'lucide-react'

interface CategoryCard {
  title: string;
  icon: React.ReactNode;
  color: string;
  progress: number;
  tasksLeft: number;
  suggestedTask: string;
}

const categories: CategoryCard[] = [
  {
    title: "Development",
    icon: <Code2 className="w-5 h-5" />,
    color: "bg-[#9747FF]",
    progress: 87,
    tasksLeft: 32,
    suggestedTask: "Finish Figma Designs"
  },
  {
    title: "Marketing",
    icon: <Megaphone className="w-5 h-5" />,
    color: "bg-[#FF4800]",
    progress: 65,
    tasksLeft: 45,
    suggestedTask: "New Content Ideas"
  },
  {
    title: "Idea",
    icon: <Lightbulb className="w-5 h-5" />,
    color: "bg-[#47C9A5]",
    progress: 23,
    tasksLeft: 12,
    suggestedTask: "Gather Idea Feedback"
  }
]

const deadlines = [
  {
    date: "10/25",
    title: "Next Social Media Post",
    progress: 56,
    color: "bg-[#FF4800]"
  },
  {
    date: "10/25",
    title: "Frontend Development Completion",
    progress: 56,
    color: "bg-[#9747FF]"
  },
  {
    date: "10/25",
    title: "Competitive Research",
    progress: 56,
    color: "bg-[#47C9A5]"
  }
]

export function Dashboard() {
  return (
    <div className="h-full overflow-y-auto bg-[#F5F5F5] p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Welcome Back, Steven</h1>
          <button className="text-gray-500 hover:text-gray-700">See All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${category.color} rounded-lg p-4 text-white`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  {category.icon}
                  <h2 className="font-semibold">{category.title}</h2>
                </div>
                <button className="text-white/80 hover:text-white">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div className="text-sm">Suggested Task</div>
                <div className="font-medium">{category.suggestedTask}</div>
                <div className="relative h-2 bg-black/20 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-white"
                    style={{ width: `${category.progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span>{category.progress}% Complete</span>
                  <span>{category.tasksLeft} Tasks Left</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Urgent Tasks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <motion.div
                key={`urgent-${category.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className="space-y-2">
                  <div className={`text-sm ${category.color.replace('bg-', 'text-')}`}>
                    {category.title}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{category.suggestedTask}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Up Coming Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deadlines.map((deadline) => (
              <motion.div
                key={deadline.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg overflow-hidden"
              >
                <div className={`${deadline.color} px-4 py-2 text-white`}>
                  {deadline.date}
                </div>
                <div className="p-4 space-y-4">
                  <h3 className="font-medium">{deadline.title}</h3>
                  <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full ${deadline.color}`}
                      style={{ width: `${deadline.progress}%` }}
                    />
                  </div>
                  <div className="text-sm text-gray-500">
                    {deadline.progress}% Complete
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg p-6 text-center"
        >
          <p className="text-lg">
            Product Launch is{" "}
            <span className="text-[#47C9A5]">9 Days 31 Minutes</span> away
          </p>
          <p className="text-gray-500 mt-1">Keep Going!</p>
        </motion.div>
      </div>
    </div>
  )
}

