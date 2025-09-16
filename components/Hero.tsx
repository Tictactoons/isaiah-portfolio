"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

export default function Hero() {
  return (
    <main className="pt-10 w-full flex flex-col items-center justify-center text-center mt-10 px-4">
      <section className="max-w-4xl">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 20,
            damping: 15,
            duration: 0.8,
          }}
          className="mb-2 items-center flex flex-col"
        >
          <Image
            src="/profile.png"
            alt="my picture"
            height={200}
            width={200}
            className="rounded-full shadow-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 font-space-grotesk tracking-tight">
            Hi, I&apos;m Isaiah.
          </h1>
          <TypewriterText />
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 max-w-xl mx-auto mb-8 font-inter">
            I build fast, responsive, and scalable websites with React &
            Next.js, while <br className="hidden sm:block" /> also working with
            GHL, CRM, and automation tools to help businesses grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch sm:space-x-4 space-y-3 sm:space-y-0">
            <Button
              variant="default"
              className="w-4/5 sm:w-40 pt-6 pb-6 font-sans shadow-lg transform transition-transform duration-200 hover:scale-105 hover:text-base hover:shadow-xl dark:bg-white dark:text-gray-900"
            >
              View Projects
            </Button>
            <Button
              variant="default"
              className="w-4/5 sm:w-40 pt-6 pb-6 font-sans shadow-lg transform transition-transform duration-200 hover:scale-105 hover:text-base hover:shadow-x dark:bg-white dark:text-gray-900l"
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
