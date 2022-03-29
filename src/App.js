import About from "./components/about/About";
import Baking from "./components/baking/Baking";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Location from "./components/location/Location";
import Navbar from "./components/navbar/Navbar";

function App() {
  const footerTitles = {
    titleOne: "About us",
    titleTwo: "Why we are special?",
    titleThree: "Opening hours",
    titleFour: "Contact details"
  }
  return (
    <>
      <Navbar />
      <Hero />
      <About aboutTitle="Who We Are?" />
      <Location locationTitle="Our Location" />
      <Baking bakingTitle="Our Baking" />
      <Contact contactTitle="Contact Information" />
      <Footer footerTitle={footerTitles} />
    </>
  );
}

export default App;
