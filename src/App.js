import About from "./components/about/About";
import Baking from "./components/baking/Baking";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Location from "./components/location/Location";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <About/>
  <Location/>
  <Baking/>
  <Contact/>
  </>
  );
}

export default App;
