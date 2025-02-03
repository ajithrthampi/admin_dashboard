"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import logo from "../../../public/images/logo/logo.svg"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-[#fffcf3]80 backdrop-blur-sm" : "bg-[fffcf3]"}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Left side - Brand */}
          <Link href="/" className="text-sm font-medium tracking-wider hover:opacity-70 transition-opacity">
            <Image
            className="md:w-16 w-12"
             src={logo}
             width={200}
             height={200}
             alt="logo"
             priority="true"
            />
          </Link>

          {/* Center - Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/work" className="text-sm hover:opacity-70 transition-opacity">
              WORK
            </Link>
            <Link href="/about" className="text-sm hover:opacity-70 transition-opacity">
              ABOUT
            </Link>
            <Link href="/resume" className="text-sm hover:opacity-70 transition-opacity">
              RESUME
            </Link>
            <Link href="/contact" className="text-sm hover:opacity-70 transition-opacity">
              CONTACT
            </Link>
          </div>

          {/* Right side - Social Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-70 transition-opacity"
            >
              INSTAGRAM
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-70 transition-opacity"
            >
              LINKEDIN
            </Link>
          </div>

          {/* Mobile menu button - Only shown on mobile */}
          <button className="md:hidden p-2" aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}

