import "./App.css";
import About from "./components/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
