import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Restaurant from "./components/Restaurant";
import FeaturedMenu from "./components/FeaturedMenu";
import Pickleball from "./components/Pickleball";
import Gallery from "./components/Gallery";
import Promotions from "./components/Promotions";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <PageLoader visible={loading} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Restaurant />
        <FeaturedMenu />
        <Pickleball />
        <Gallery />
        <Promotions />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
