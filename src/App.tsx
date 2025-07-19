import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TourPackages from './components/TourPackages';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import FounderSection from './components/FounderSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import TourDetail from './components/TourDetail';
import AllTours from './components/AllTours';
import AllGallery from './components/AllGallery';
import MarqueeText from './components/MarqueeText';

function HomePage() {
  return (
    <>
      <Hero />
      <TourPackages />
      <About />
      <Services />
      <Reviews />
      <Gallery />
      <FounderSection />
      <Contact />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen pt-8">
        <MarqueeText />
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tours" element={<AllTours />} />
          <Route path="/tour/:id" element={<TourDetail />} />
          <Route path="/all-gallery" element={<AllGallery />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;