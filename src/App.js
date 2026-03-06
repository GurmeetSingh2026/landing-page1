// import "./Style.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
// import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Features from "./components/Features";
import AboutVasitum from "./components/AboutVasitum";
import ImpactCards from "./components/ImpactCards";

function App() {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="bg-blur blur1"></div>
        <div className="bg-blur blur2"></div>
        <div className="bg-blur blur3"></div>

        <div className="container">
          <Navbar />
        </div>
      </div>

     <Hero />

      <section className="features">
        <div className="container">
          <Features />
        </div>
      </section>

      <section className="AboutVasitum">
        <div className="container">
          <AboutVasitum />
        </div>
      </section>

      <section className="impactCard">
        <div className="container">
          <ImpactCards />
        </div>
      </section>
      <section className="Testimonials">
        <div className="container">
          <Testimonials />
        </div>
      </section>
      
      <Footer />
    </>
  );
}

export default App;
