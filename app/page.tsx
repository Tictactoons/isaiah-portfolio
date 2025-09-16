
import CardItem from "@/components/CardItem";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Contact  from "@/components/Contact";
import Footer from "@/components/Footer";
import MailInfo from "@/components/MailInfo";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardItem />
      <Portfolio />
      <Contact />
      <MailInfo />
      <Footer />
    </div>
  );
}
