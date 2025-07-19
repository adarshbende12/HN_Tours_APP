import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Calendar, Users, Play } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { hero, company, social } = siteConfig;
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hero.images.length);
    }, hero.autoSlideInterval);
    return () => clearInterval(timer);
  }, [hero.autoSlideInterval, hero.images.length]);

  const scrollToTours = () => {
    const element = document.getElementById('tours');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openYouTube = () => {
    window.open(social.youtube, '_blank');
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {hero.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-orange-400/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-white/5 rounded-full animate-float-delayed"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              {hero.images[currentSlide].title}
            </span>
          </h1>
          <p className="text-lg md:text-2xl mb-6 md:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delayed">
            {hero.images[currentSlide].subtitle}. Experience unforgettable journeys with {company.name} {company.tagline}.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 animate-fade-in-up-delayed">
          <button
            onClick={scrollToTours}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-2xl"
          >
            <span>Explore Tours</span>
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button 
            onClick={openYouTube}
            className="group bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-2xl"
          >
            <Play className="h-4 w-4 md:h-5 md:w-5" />
            <span>Watch Videos</span>
          </button>
        </div>

        {/* Stats - Simplified for mobile */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg md:max-w-2xl mx-auto animate-fade-in-up-delayed">
          <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
            <MapPin className="h-6 w-6 md:h-8 md:w-8 text-orange-400 mb-1 md:mb-2" />
            <div className="text-lg md:text-2xl font-bold">{company.destinations}</div>
            <div className="text-xs md:text-base text-gray-300">Places</div>
          </div>
          <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
            <Calendar className="h-6 w-6 md:h-8 md:w-8 text-orange-400 mb-1 md:mb-2" />
            <div className="text-lg md:text-2xl font-bold">{company.experience}</div>
            <div className="text-xs md:text-base text-gray-300">Years</div>
          </div>
          <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
            <Users className="h-6 w-6 md:h-8 md:w-8 text-orange-400 mb-1 md:mb-2" />
            <div className="text-lg md:text-2xl font-bold">{company.customers}</div>
            <div className="text-xs md:text-base text-gray-300">Travelers</div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {hero.images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:block">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;