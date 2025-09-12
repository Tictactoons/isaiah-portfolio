import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <main className="w-full flex flex-col items-center justify-center text-center mt-10 px-4">
      <section className="max-w-4xl">
        <div className="mb-2 items-center flex flex-col">
          <Image
            src="/profile.png"
            alt="my picture"
            height={200}
            width={200}
            className="rounded-full shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 font-space-grotesk tracking-tight">
            Hi, I&apos;m Isaiah.
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-sans tracking-tight text-blue-900">
            Frontend Engineer
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto mb-8 font-inter">
            I build fast, responsive, and scalable websites with React & Next.js,
            while <br className="hidden sm:block" /> also working with GHL, CRM,
            and automation tools to help businesses grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch sm:space-x-4 space-y-3 sm:space-y-0 mb-4">
            <Button variant="default" className="w-4/5 sm:w-40 pt-5 pb-5 font-inter">View Projects</Button>
            <Button variant="default" className="w-4/5 sm:w-40 pt-5 pb-5 font-inter">Contact Me</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
