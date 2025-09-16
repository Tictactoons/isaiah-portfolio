"use client"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Services() {
  const router = useRouter()

  const services = [
    { title: "Frontend Development", link: "/services/frontend" },
    { title: "Automation", link: "/services/automation" },
    { title: "CRM Integration", link: "/services/crm" },
  ]

  return (
    <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 20,
            damping: 15,
            duration: 0.8,
          }} className="px-4 md:px-32 py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center font-space-grotesk">
        My Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}      // start slightly left and transparent
            whileInView={{ x: 0, opacity: 1 }}  // slide in when visible
            viewport={{ once: true, amount: 0.3 }} // triggers once when 30% visible
            transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
          >
            <Card
              className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-white/30"
              onClick={() => router.push(service.link)}
            >
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-500 mt-2">Explore →</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
