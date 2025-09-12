import { ChartNoAxesCombined, CodeXml, Cog } from "lucide-react";
import CardItem from "@/components/CardItem";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/project";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      

      <div className="flex flex-wrap justify-center gap-6">
        <CardItem
          icon={CodeXml}
          title={`Front-End \n Development`}
          projectCount={projects.frontend.length}
        />
        <CardItem
          icon={Cog}
          title="Automation"
          projectCount={projects.automation.length}
        />
        <CardItem
          icon={ChartNoAxesCombined}
          title="CRM"
          projectCount={projects.crm.length}
        />
      </div>
    </div>
  );
}
