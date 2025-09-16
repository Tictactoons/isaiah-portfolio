import { Mail } from "lucide-react"

export default function ContactInfo() {
  return (
    <section className="w-full px-4 md:px-16 pt-26">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center ">
        <div className="text-2xl font-bold font-sans tracking-tighter">
        <p>Isaiah.</p>
      </div>

        <div className="flex items-center gap-1 text-gray-500 justify-center md:justify-start">
          <Mail size={20} />
          <a
            href="mailto:tonanubi@gmail.com"
            className="text-sm text-gray-500 hover:text-gray-900 transition md:text-base"
          >
            tonanubi@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
