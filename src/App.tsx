import Records from "./Components/ Records/Records";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import { Contract } from "./Components/Contract/Contract";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import HireMe from "./Components/HireMe/HireMe";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Records />
      <Blog />
      <Testimonials />
      <Contract />
      <HireMe />
      <Footer />
    </div>
  );
}

export default App;
