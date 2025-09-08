import Banner from "./_components/Banner";
import BannerSlider from "./_components/BannerSlider";
import Billboard from "./_components/Billboard";
import Products from "./_components/Card";
import Collection from "./_components/Collection";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Collection />
      <Billboard />
      <BannerSlider />
      <Products />
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
