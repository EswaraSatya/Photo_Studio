import CurtainIntro from "./components/CurtainIntro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <CurtainIntro />
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <Showcase />
        <About />
        <Services />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

