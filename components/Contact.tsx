"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Paperclip } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="pt-30 pb-10 bg-muted/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left: headline / CTA */}
          <motion.div
            className="text-center md:text-left"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Got a project? Let&apos;s talk!
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-500">
              Tell me a bit about your project and which service you need — I&apos;ll get back to you shortly.
            </p>
          </motion.div>

          {/* Right: form */}
          <motion.form
            className="order-1 md:order-2 bg-white dark:bg-gray-900 shadow-sm rounded-lg p-6 sm:p-8 w-full"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Service buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <motion.button
                type="button"
                className="w-full sm:flex-1 py-2 px-3 rounded-md border text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Frontend Dev
              </motion.button>
              <motion.button
                type="button"
                className="w-full sm:flex-1 py-2 px-3 rounded-md border text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Automation
              </motion.button>
              <motion.button
                type="button"
                className="w-full sm:flex-1 py-2 px-3 rounded-md border text-sm"
                whileHover={{ scale: 1.05 }}
              >
                CRM
              </motion.button>
            </div>

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 font-sans">
              <Input className="w-full" placeholder="Your name" />
              <Input className="w-full" type="email" placeholder="Your email" />
            </div>

            {/* Message */}
            <Textarea className="w-full mb-4" placeholder="Your message" rows={5} />

            {/* File upload */}
            <div className="flex items-center justify-between mb-4 border rounded-md px-3 py-2 text-sm">
              <span>Attach file (optional)</span>
              <Paperclip className="w-4 h-4" />
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full" whileHover={{ scale: 1.05 }}>
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
