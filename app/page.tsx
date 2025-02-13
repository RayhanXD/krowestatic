import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Timeline } from "@/components/timeline"
import { Footer } from "@/components/footer"
import { SignupAnnouncement } from "@/components/signup-announcement"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SignupAnnouncement />
      <Features />
      <Timeline />
      <Footer />
    </main>
  )
}

