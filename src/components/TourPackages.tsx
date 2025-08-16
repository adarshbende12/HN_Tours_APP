import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { tourPackages } from '../data/tours';
import { siteConfig } from '../config/siteConfig';
import { getCanonicalDestinationName } from '../utils/tourUtils';
import { MapPin, Clock, Star, ArrowRight, MessageCircle } from 'lucide-react';

const TourPackages: React.FC = () => {
  const navigate = useNavigate();

  const handleTourClick = (tourId: string) => {
    navigate(`/tour/${tourId}`);
  };

  const handleViewAllTours = () => {
    navigate('/tours');
  };

  const handleWhatsAppBooking = (tourTitle: string) => {
    const { contact, company } = siteConfig;
    const message = `Hi! I'm interested in booking the "${tourTitle}" package with ${company.name}. Could you please provide more details and help me with the booking process?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDestinationFilter = (destination: string) => {
    navigate(`/tours?destination=${encodeURIComponent(destination)}`);
  };

  const handleComingSoonClick = () => {
    navigate('/coming-soon');
  };

  // Define destinations in specific order
  const allDestinations = useMemo(() => {
    return [
      {
        name: 'Thailand',
        type: 'package' as const,
        packageCount: tourPackages.filter(tour => getCanonicalDestinationName(tour.location) === 'Thailand').length,
        image: '/thailand-removebg-preview.png'
      },
      {
        name: 'Manali',
        type: 'package' as const,
        packageCount: tourPackages.filter(tour => getCanonicalDestinationName(tour.location) === 'Manali').length,
        image: '/manali-removebg-preview.png'
      },
      {
        name: 'Kerala',
        type: 'package' as const,
        packageCount: tourPackages.filter(tour => getCanonicalDestinationName(tour.location) === 'Kerala').length,
        image: '/Kerala-removebg-preview.png'
      },
      {
        name: 'Kashmir',
        type: 'package' as const,
        packageCount: tourPackages.filter(tour => getCanonicalDestinationName(tour.location) === 'Kashmir').length,
        image: '/Kashmir-removebg-preview.png'
      },
      {
        name: 'Dubai',
        type: 'comingSoon' as const,
        image: '/Dubai-removebg-preview.png'
      },
      {
        name: 'Singapore',
        type: 'comingSoon' as const,
        image: '/Singapore-removebg-preview.png'
      }
    ];
  }, []);

  // Show only top 4 tours on mobile, 6 on desktop
  const displayedTours = tourPackages.slice(0, siteConfig.tours.displayCount);

  return (
    <section id="tours" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Popular Tours
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked destinations showcasing India's best experiences.
          </p>
        </div>

        {/* Destination Filter Buttons */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
            Browse by Destination
          </h3>
          <div className="flex overflow-x-auto pb-4 space-x-4 md:space-x-6 scrollbar-hide">
            {allDestinations.map((destination, index) => {
              return (
                <button
                  key={index}
                  onClick={() => destination.type === 'comingSoon' ? handleComingSoonClick() : handleDestinationFilter(destination.name)}
                  className="flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-4 md:p-6 group"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 flex items-center justify-center">
                      <img
                        src={destination.image}
                        alt={`${destination.name} destination`}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base whitespace-nowrap">
                      {destination.name}
                    </h4>
                    {destination.type === 'package' && 'packageCount' in destination && (
                      <p className="text-xs text-gray-600 mt-1">
                        {destination.packageCount} packages
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex overflow-x-auto pb-4 space-x-4 md:space-x-6 scrollbar-hide">
          {displayedTours.map((tour) => (
            <div
              key={tour.id}
              className="flex-shrink-0 w-72 md:w-80 bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
              onClick={() => handleTourClick(tour.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Save {Math.round(((parseInt(tour.originalPrice.replace('₹', '').replace(',', '')) - parseInt(tour.discountedPrice.replace('₹', '').replace(',', ''))) / parseInt(tour.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                </div>
                <div className="absolute top-3 right-3 bg-white/90 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span>{tour.rating}</span>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs md:text-sm">{tour.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span className="text-xs md:text-sm">{tour.duration}</span>
                  </div>
                </div>

                {/* Mobile: Show only 2 highlights, Desktop: Show 3 */}
                <div className="mb-4 md:mb-6">
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {tour.highlights.slice(0, 2).map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                      +{tour.highlights.length - 2} more
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div>
                    <span className="text-sm md:text-lg text-gray-400 line-through">{tour.originalPrice}</span>
                    <span className="text-lg md:text-2xl font-bold text-blue-600 ml-2">{tour.discountedPrice}</span>
                    <div className="text-xs md:text-sm text-gray-600">per person</div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 md:py-3 px-4 md:px-6 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button 
                  onClick={() => handleWhatsAppBooking(tour.title)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 md:py-3 px-4 md:px-6 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mt-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Book via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <button 
            onClick={handleViewAllTours}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <span>View All Tours ({tourPackages.length})</span>
            <ArrowRight className="h-4 md:h-5 w-4 md:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;