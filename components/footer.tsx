"use client"
import { useState } from 'react'
import { ArrowRight, Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram, ChevronUp } from 'lucide-react'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission logic here
    console.log('Submitted email:', email)
    setEmail('')
  }

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 relative z-10">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Join the New Age of Business with Krowe
            </h2>
            <p className="text-gray-400 mb-8">
              Transform your business journey with AI-powered insights and structured learning paths. Stay updated with our latest features and tips.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4800] flex-grow"
                required
              />
              <button
                type="submit"
                className="bg-[#FF4800] text-white px-6 py-3 rounded-md hover:bg-[#FF4800]/90 transition-colors flex items-center justify-center whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
          <div className="relative w-full h-64 md:h-80 lg:h-96">
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF4800" />
                  <stop offset="100%" stopColor="#FF8E53" />
                </linearGradient>
                <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF4800" />
                  <stop offset="100%" stopColor="#FF8E53" />
                </linearGradient>
              </defs>
              <path
                d="M201.7,50.9c70.8,0,135.1,28.7,181.4,75c46.3,46.3,75,110.6,75,181.4s-28.7,135.1-75,181.4 c-46.3,46.3-110.6,75-181.4,75s-135.1-28.7-181.4-75c-46.3-46.3-75-110.6-75-181.4s28.7-135.1,75-181.4 C66.6,79.6,130.9,50.9,201.7,50.9z"
                fill="url(#grad1)"
                opacity="0.3"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 200 200"
                  to="360 200 200"
                  dur="60s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M201.7,75.9c62.8,0,119.8,25.4,161,66.6c41.2,41.2,66.6,98.2,66.6,161s-25.4,119.8-66.6,161 c-41.2,41.2-98.2,66.6-161,66.6s-119.8-25.4-161-66.6c-41.2-41.2-66.6-98.2-66.6-161s25.4-119.8,66.6-161 C81.9,101.3,138.9,75.9,201.7,75.9z"
                fill="url(#grad2)"
                opacity="0.5"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 200 200"
                  to="0 200 200"
                  dur="30s"
                  repeatCount="indefinite"
                />
              </path>
              <circle cx="200" cy="200" r="100" fill="#FF4800" opacity="0.8">
                <animate
                  attributeName="r"
                  values="100;110;100"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </circle>
              <text x="200" y="220" textAnchor="middle" fill="white" fontSize="48" fontWeight="bold">
                KROWE
              </text>
            </svg>
          </div>
        </div>
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">{Icon.name}</span>
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              © 2024 Krowe. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-[#FF4800]/20 to-transparent pointer-events-none" />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </footer>
  )
}

