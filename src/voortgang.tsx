import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useHeaderScrolled, useReveal } from "@/hooks";
import { ContactModalProvider } from "@/context/ContactModalProvider";
import { Header } from "./components/Header";
import { ContactModal } from "./components/ContactModal";
import { Footer } from "./components/Footer";
import { VoortgangPage } from "./components/Voortgang";
import { boot } from "./boot";
import "./index.css";

boot();

/** Tweede pagina van de site: het logboek met de voortgang van het project. */
function VoortgangApp() {
  const { sentinelRef, scrolled } = useHeaderScrolled();
  useReveal();

  return (
    <ContactModalProvider>
      <a className="skip-link" href="#hoofdinhoud">
        Naar de inhoud
      </a>
      <div ref={sentinelRef} aria-hidden="true" style={{ position: "absolute", top: 0, height: 1, width: 1 }} />

      <Header scrolled={scrolled} page="voortgang" />

      <main id="hoofdinhoud">
        <span id="top" />
        <VoortgangPage />
      </main>

      <Footer />
      <ContactModal />
    </ContactModalProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VoortgangApp />
  </StrictMode>
);
