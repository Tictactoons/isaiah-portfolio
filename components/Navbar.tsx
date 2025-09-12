import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-around py-4 px-8 bg-white shadow-md font-space-grotesk">
      <div className="text-2xl font-bold font-sans tracking-tighter">
        <Link href="#home">Isaiah.</Link>
      </div>

      
      <div className="hidden md:flex items-center space-x-1 pl-8">
        <Button className="text-lg" variant="ghost" asChild>
          <a href="#home">About me</a>
        </Button>

        <Button className="text-lg" variant="ghost" asChild>
          <a href="#home">Services</a>
        </Button>

        <Button className="text-lg" variant="ghost" asChild>
          <a href="#home">Projects</a>
        </Button>

        <Button className="text-lg" variant="ghost" asChild>
          <a href="#contact">Contact me</a>
        </Button>
      </div>

      
      <div className="md:hidden flex justify-between">
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex flex-col items-center justify-center space-y-.5 p-3 h-auto w-auto"
            >
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            <DropdownMenuItem>
              <a href="#home">About me</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#home">Services</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#project1">Projects</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#contact">Contact me</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
