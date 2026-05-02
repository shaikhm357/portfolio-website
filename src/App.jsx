import "./../src/App.css";
import CursonrDot from "./components/layouts/CursonrDot";
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Skill from "./components/sections/Skill";
import YouTube from "./components/sections/YouTube";
import Contact from "./components/sections/Contact";
import Footer from "./components/layouts/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useCursorDot } from "./hooks/useCursorDot";
import { useActiveNav } from "./hooks/useActiveNAv";

const App = () => {
  const activeId = useActiveNav();
  useScrollReveal();
  useCursorDot();

  return (
    <>
      {/* Inject global styles */}
      {/* <style>{CSS}</style> */}

      <CursonrDot />
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Project />
        <Skill />
        <YouTube />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
