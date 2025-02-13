"use client"


import { motion } from "framer-motion"
import { Building2, Briefcase, LineChart, Users2, Lightbulb, Rocket } from "lucide-react"
import Link from "next/link"


const leftIcons = [
 { Icon: Building2, delay: 0, x: -220, y: -200 },
 { Icon: Briefcase, delay: 0.1, x: -90, y: -43 },
 { Icon: LineChart, delay: 0.2, x: -220, y: 120 },
]


const rightIcons = [
 { Icon: Users2,    delay: 0.3, x: 132, y: -200 },
 { Icon: Lightbulb, delay: 0.4, x: 20,  y: -43  },
 { Icon: Rocket,    delay: 0.5, x: 132, y: 120  },
];




export function SignupAnnouncement() {
 return (
   <section className="w-full py-24 relative overflow-hidden">
     {/* Background Pattern */}
     <div
       className="absolute inset-0"
       style={{
         backgroundImage: `radial-gradient(circle at 1px 1px, #FF4800 1px, transparent 0)`,
         backgroundSize: "40px 40px",
         opacity: 0.05,
       }}
     />


     <div className="max-w-[1200px] mx-auto px-4 relative flex items-center justify-center">
       {/* Left Floating Icons Container */}
       <div className="relative h-full w-1/4">
         {leftIcons.map(({ Icon, delay, x, y }, index) => (
           <motion.div
             key={`left-${index}`}
             initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
             animate={{
               opacity: 1,
               scale: 1,
               x: x,
               y: y,
             }}
             transition={{
               type: "spring",
               stiffness: 100,
               delay: delay,
             }}
             className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
           >
             <div className="w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center">
               <Icon className="w-10 h-10 text-[#FF4800]" />
             </div>
           </motion.div>
         ))}
       </div>


       {/* Main Content */}
       <div className="text-center space-y-6 w-1/2">
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5 }}
           className="inline-block px-4 py-1 rounded-full bg-[#FF4800]/10 text-[#FF4800] text-sm font-medium mb-4"
         >
           Sign up is now open!
         </motion.div>


         <motion.h2
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
         >
           Join hundreds of businesses in our waitlist!
         </motion.h2>


         <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="text-xl text-gray-600 max-w-2xl"
         >
           Be among the first to experience our AI-powered business insights platform
         </motion.p>


         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.3 }}
           className="pt-6"
         >
           <Link
             href="https://platform.krowehub.com/"
             className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-black rounded-lg hover:bg-black/90 transition-all duration-200 transform hover:-translate-y-1"
           >
             Get started today
           </Link>
         </motion.div>
       </div>


       {/* Right Floating Icons Container */}
       <div className="relative h-full w-1/4">
         {rightIcons.map(({ Icon, delay, x, y }, index) => (
           <motion.div
             key={`right-${index}`}
             initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
             animate={{
               opacity: 1,
               scale: 1,
               x: x,
               y: y,
             }}
             transition={{
               type: "spring",
               stiffness: 100,
               delay: delay,
             }}
             className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
           >
             <div className="w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center">
               <Icon className="w-10 h-10 text-[#FF4800]" />
             </div>
           </motion.div>
         ))}
       </div>
     </div>


     {/* Connecting Lines */}
     <svg
       className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 pointer-events-none"
       style={{ opacity: 0.1 }}
     >
       <line x1="25%" y1="50%" x2="75%" y2="50%" stroke="#FF4800" strokeWidth="1" />
       <line x1="25%" y1="50%" x2="35%" y2="30%" stroke="#FF4800" strokeWidth="1" />
       <line x1="25%" y1="50%" x2="35%" y2="70%" stroke="#FF4800" strokeWidth="1" />
       <line x1="75%" y1="50%" x2="65%" y2="30%" stroke="#FF4800" strokeWidth="1" />
       <line x1="75%" y1="50%" x2="65%" y2="70%" stroke="#FF4800" strokeWidth="1" />
     </svg>
   </section>
 )
}

