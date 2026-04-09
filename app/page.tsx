import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <Process />
        <CTA />
      </main>
    </>
  );
}
