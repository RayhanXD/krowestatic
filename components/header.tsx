import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="#home" className="flex items-center space-x-2">
            <div className="h-8 w-8">
              <Image
                src="/krowelogo.png"
                alt="Krowe Logo"
                width={32}
                height={32}
                className="rounded-full bg-[#FFFFFF]"
              />
            </div>
            <span className="text-xl font-bold text-black">Krowe Hub</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium text-black hover:text-[#FF4800]">
              Features
            </a>
            <a href="#contact" className="text-sm font-medium text-black hover:text-[#FF4800]">
              Contact Us
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScDZyg4ZXbwFoyQ62WcXL6RonKNlVsjdCbesFV4BkjcIUMWSQ/viewform" target="_blank" className="bg-[#FF4800] text-white px-4 py-2 rounded-md hover:bg-black/90 inline-block">
              Join Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}