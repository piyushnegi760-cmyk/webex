import { useState } from "react";

import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import OurWork from "./sections/OurWork";
import Contact from "./sections/Contact";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState("home");

  const navigate = (target) => {
    setPage(target);
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showIntro && (
        <Intro
          onComplete={() => setShowIntro(false)}
        />
      )}

      {!showIntro && (
        <>
          <Navbar
            onMenu={() => setMenuOpen(true)}
          />

          {menuOpen && (
            <Menu
              currentPage={page}
              onNavigate={navigate}
              onClose={() => setMenuOpen(false)}
            />
          )}

          <main>
            {page === "home" && (
              <Home onNavigate={navigate} />
            )}

            {page === "about" && <About />}

            {page === "services" && <Services />}

            {page === "work" && <OurWork />}

            {page === "contact" && <Contact />}
          </main>
        </>
      )}
    </>
  );
}