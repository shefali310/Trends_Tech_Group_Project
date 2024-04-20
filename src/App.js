import "./App.css";
import About from "./components/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";

// Created by Shefali Rajnikant Panchal (8832606)
function App() {
  return (
    <div className="container-fluid bg_image">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
