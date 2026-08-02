import { useHeaderScrolled, useReveal } from "@/hooks";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import {
  ActiveringKost,
  Uitdaging,
  Oplossing,
  Tijdlijn,
  Vertrouwen,
  Partners,
  Project,
  Aansluiten,
  Faq,
} from "./components/Sections";
import { Footer } from "./components/Footer";

export default function App() {
  const { sentinelRef, scrolled } = useHeaderScrolled();
  useReveal();

  return (
    <>
      <a className="skip-link" href="#hoofdinhoud">
        Naar de inhoud
      </a>
      <div ref={sentinelRef} aria-hidden="true" style={{ position: "absolute", top: 0, height: 1, width: 1 }} />

      <Header scrolled={scrolled} />

      <main id="hoofdinhoud">
        <span id="top" />
        <Hero />
        <ActiveringKost />
        <Uitdaging />
        <Oplossing />
        <Tijdlijn />
        <Vertrouwen />
        <Partners />
        <Project />
        <Aansluiten />
        <Faq />
      </main>

      <Footer />
    </>
  );
}
