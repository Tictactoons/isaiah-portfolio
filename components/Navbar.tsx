import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="max-w-9xl mx-auto w-full flex items-center justify-between md:justify-around py-4 px-2 bg-white dark:bg-gray-900 text-black dark:text-white  font-inter sticky top-0">
      <div className="text-2xl font-bold font-sans tracking-tighter pl-7 sm:pl-0">
        <Link href="#home">Isaiah.</Link>
      </div>

      <div
        className="hidden md:flex flex-wrap justify-center 
                bg-gradient-to-r from-gray-50 via-gray-20 to-gray-50 border-none rounded-xl
                px-3 py-1 sm:px-2 sm:py-2 md:px-2 md:py-2
                space-x-2 sm:space-x-0.5 md:space-x-0.5 shadow-lg text-black dark:shadow-lg ml-25"
      >
        <Button
          className="text-sm sm:text-base md:text-sm hover:text-blue-900 dark:hover:text-white dark:hover:bg-gray-900"
          variant="ghost"
          asChild
        >
          <a href="#contact">Home</a>
        </Button>

        <Button
          className="text-sm sm:text-base md:text-sm hover:text-blue-900 dark:hover:text-white dark:hover:bg-gray-900"
          variant="ghost"
          asChild
        >
          <a href="#home">Services</a>
        </Button>

        <Button
          className="text-sm sm:text-base md:text-sm hover:text-blue-900 dark:hover:text-white dark:hover:bg-gray-900"
          variant="ghost"
          asChild
        >
          <a href="#home">Projects</a>
        </Button>
      </div>

      <div className="hidden md:flex items-center space-x-2">
        <DarkModeToggle />
        <Button
          variant="outline"
          className="rounded-full hidden md:flex !px-6 !py-5 
                    items-center gap-1 transform transition-transform duration-200 
                    hover:scale-105 hover:text-base"
        >
          Contact
          <ArrowUpRight />
        </Button>
      </div>

      <div className="md:hidden flex justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex flex-col items-center justify-center space-y-.5 p-3 h-auto w-auto"
            >
              <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
              <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
              <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44 font-inter">
            <DropdownMenuItem>
              <a href="#home">Services</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#project1">Projects</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#contact">Contact me</a>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-between items-center">
              <p>Dark Mode</p>
              <DarkModeToggle />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
