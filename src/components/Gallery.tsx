import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram, Youtube, ExternalLink, Eye } from 'lucide-react';
import { galleryImages } from '../config/galleryConfig';
import { siteConfig } from '../config/siteConfig';
import InstagramEmbeds from './InstagramEmbeds';

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const [randomImages, setRandomImages] = useState<typeof galleryImages>([]);

  // Shuffle and select random images on component mount
  useEffect(() => {
    const shuffled = [...galleryImages].sort(() => 0.5 - Math.random());
    setRandomImages(shuffled.slice(0, 8)); // Show 8 random images
  }, []);

  const openSocialMedia = (platform: string) => {
    const urls = {
      instagram: siteConfig.social.instagram,
      youtube: siteConfig.social.youtube
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  const viewAllPhotos = () => {
    navigate('/all-gallery');
  };

  return (
    <section id="gallery" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Travel Gallery
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8">
            Immerse yourself in the beauty of destinations we've explored.
          </p>
          
          {/* Social Media Links */}
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6 md:mb-8">
            <button
              onClick={() => openSocialMedia('instagram')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm md:text-base"
            >
              <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              <span>Follow on Instagram</span>
              <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
            </button>
            <button
              onClick={() => openSocialMedia('youtube')}
              className="bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm md:text-base"
            >
              <Youtube className="h-4 w-4 md:h-5 md:w-5" />
              <span>Watch Videos</span>
              <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
            </button>
          </div>
        </div>

        {/* Instagram Embeds Section */}
        <div className="mb-12 md:mb-16">
          <InstagramEmbeds />
        </div>

        {/* Photo Gallery Section */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Photo Gallery
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our collection of stunning travel photography from various destinations.
            </p>
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide">
              {randomImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  onClick={viewAllPhotos}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="font-semibold text-sm">{image.title}</h3>
                      <p className="text-xs text-gray-300">{image.location}</p>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Eye className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: 2 rows with horizontal scroll */}
          <div className="hidden md:block">
            <div className="grid grid-flow-col auto-cols-[300px] grid-rows-2 gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {randomImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                  onClick={viewAllPhotos}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold text-sm">{image.title}</h3>
                      <p className="text-xs text-gray-300">{image.location}</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Eye className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-xl max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              Want to see more adventures?
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
              Explore our complete photo collection and follow us for daily updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={viewAllPhotos}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm md:text-base"
              >
                <Eye className="h-4 w-4 md:h-5 md:w-5" />
                <span>View All Photos ({galleryImages.length})</span>
              </button>
              <button
                onClick={() => openSocialMedia('instagram')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm md:text-base"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                <span>@haricharanhn</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;