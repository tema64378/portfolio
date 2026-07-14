import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Interlude from "@/components/Interlude";
import Work from "@/components/Work";
import Recognition from "@/components/Recognition";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Marquee />
        <About />
        <Experience />
        <Services />
        <Interlude />
        <Work />
        <Recognition />
        <Contact />
      </main>
    </>
  );
}
