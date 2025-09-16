"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  { title: "Portfolio Website", link: "https://yourportfolio.com" },
  { title: "CRM Automation", link: "https://yourcrmautomation.com" },
  { title: "E-commerce Frontend", link: "https://yourstore.com" },
  { title: "Marketing Dashboard", link: "https://yourdashboard.com" },
];

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col items-center justify-center text-center pt-20 px-4"
    >
      <section className="max-w-6xl w-full">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 font-space-grotesk tracking-tight text-black dark:text-white">
            My Projects
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-sans tracking-tight text-blue-900 dark:text-blue-300">
            A showcase of my work
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto mb-8 font-inter dark:text-gray-400">
            Here are some of the projects I&apos;ve worked on recently. Enjoy!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
            >
              <Card
                className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-white/30"
                onClick={() => window.open(project.link, "_blank")}
              >
                <CardContent className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">View Project →</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: projects.length * 0.2, duration: 0.5 }}
          className="flex justify-center mt-10"
        >
          <Button
            variant="outline"
            className="rounded-full !px-6 py-6 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
            Show More
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </motion.div>
      </section>
    </motion.div>
  );
}
