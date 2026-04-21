import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-[#2f2a26]">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Reservation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;