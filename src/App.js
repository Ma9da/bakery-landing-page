import About from "./components/about/About";
import Baking from "./components/baking/Baking";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Location from "./components/location/Location";
import Navbar from "./components/navbar/Navbar";

function App() {
  const about = {
    title: "Who We Are?",
    color: "#8e7754"
  }
  const location = {
    title: "Our Location",
    color: "#876445"
  }
  const baking = {
    title: "Our baking",
    color: "#51050F"
  }
  const contact = {
    title: "Contact Information",
    color: "#7E370C"
  }
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
      <About about={about} />
      <Location location={location} />
      <Baking baking={baking} />
      <Contact contact={contact} />
      <Footer footerTitle={footerTitles} />
    </>
  );
}

export default App;
