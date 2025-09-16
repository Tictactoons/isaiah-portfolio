"use client"

import { Github, LinkedinIcon, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-6 mt-10 bg-white dark:bg-gray-900 text-gray-500">
      <div className="max-w-7xl mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side */}
        <p className="text-sm order-2 md:order-1 text-black dark:text-white font-inter">
          © {new Date().getFullYear()} Isaiah Onanubi. All rights reserved.
        </p>

        {/* Right side - Social links */}
        <div className="flex gap-6 order-1 md:order-2">
          <a
            href="https://github.com/tictactoons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-gray-900 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/isaiah-onanubi-b23197223/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-gray-900 transition"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="https://twitter.com/tictactoons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-gray-900 transition"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
