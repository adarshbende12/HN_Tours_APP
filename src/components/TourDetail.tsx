import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tourPackages } from '../data/tours';
import { siteConfig } from '../config/siteConfig';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Download, 
  MessageCircle,
  Check,
  X,
  Calendar,
  Camera,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const TourDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const tour = tourPackages.find(t => t.id === id);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsAppBooking = () => {
    const { contact, company } = siteConfig;
    const message = `Hi! I'm interested in booking the "${tour.title}" package with ${company.name} ${company.tagline}. Could you please provide more details and help me with the booking process?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBrochureDownload = () => {
    // In a real implementation, this would download the actual brochure
    alert(`Downloading brochure for ${tour.title}...`);
    // You can implement actual file download here
    // window.open(tour.brochureUrl, '_blank');
  };

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % tour.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + tour.gallery.length) % tour.gallery.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Tours</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{tour.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-lg">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span>{tour.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Tour Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="text-center">
                  <Clock className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-sm md:text-base">{tour.duration}</div>
                  <div className="text-xs md:text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-sm md:text-base">{tour.groupSize}</div>
                  <div className="text-xs md:text-sm text-gray-600">Group Size</div>
                </div>
                <div className="text-center">
                  <MapPin className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-sm md:text-base">{tour.category}</div>
                  <div className="text-xs md:text-sm text-gray-600">Category</div>
                </div>
                <div className="text-center">
                  <Star className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-sm md:text-base">{tour.rating}/5</div>
                  <div className="text-xs md:text-sm text-gray-600">Rating</div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Highlights</h3>
                {/* Mobile: Horizontal scroll, Desktop: Flex wrap */}
                <div className="flex md:flex-wrap overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-hide space-x-3 md:space-x-0 md:gap-3">
                  {tour.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="flex-shrink-0 bg-blue-100 text-blue-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Detailed Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4 md:pl-6 pb-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-blue-600 text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm">
                        {day.day}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">{day.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 mb-4">{day.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {day.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-center space-x-2">
                          <Check className="h-3 w-3 md:h-4 md:w-4 text-green-600 flex-shrink-0" />
                          <span className="text-xs md:text-sm text-gray-700">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <Check className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                  <span>Inclusions</span>
                </h3>
                <ul className="space-y-3">
                  {tour.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <X className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
                  <span>Exclusions</span>
                </h3>
                <ul className="space-y-3">
                  {tour.exclusions.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <X className="h-4 w-4 md:h-5 md:w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center space-x-2">
                <Camera className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                <span>Photo Gallery</span>
              </h2>
              
              {/* Mobile: Horizontal scroll */}
              <div className="md:hidden flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
                {tour.gallery.map((image, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-64 relative overflow-hidden rounded-xl group cursor-pointer"
                    onClick={() => openModal(index)}
                  >
                    <img
                      src={image}
                      alt={`${tour.title} gallery ${index + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Camera className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: 2 rows with horizontal scroll */}
              <div className="hidden md:block">
                <div className="grid grid-flow-col auto-cols-[300px] grid-rows-2 gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {tour.gallery.map((image, index) => (
                    <div 
                      key={index} 
                      className="relative overflow-hidden rounded-xl group cursor-pointer"
                      onClick={() => openModal(index)}
                    >
                      <img
                        src={image}
                        alt={`${tour.title} gallery ${index + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Camera className="w-8 h-8" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Booking Card - Sticky */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg lg:sticky lg:top-24 lg:self-start">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-xl md:text-2xl text-gray-400 line-through">{tour.originalPrice}</span>
                    <span className="text-2xl md:text-3xl font-bold text-blue-600">{tour.discountedPrice}</span>
                  </div>
                  <div className="text-sm text-gray-600">per person</div>
                </div>

                <div className="space-y-4 mb-8">
                  <button
                    onClick={handleWhatsAppBooking}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 md:py-4 px-6 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Book via WhatsApp</span>
                  </button>

                  <button
                    onClick={handleBrochureDownload}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 md:py-4 px-6 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download Brochure</span>
                  </button>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Quick Info</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{tour.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Group Size:</span>
                      <span className="font-medium">{tour.groupSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium">{tour.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{tour.rating}/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info - Regular flow, not sticky */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Need Help?</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4 text-blue-600" />
                    <span>WhatsApp: {siteConfig.contact.phones[0]}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span>Available 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full p-2"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Previous button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full p-2"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full p-2"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Main image */}
            <img
              src={tour.gallery[currentImageIndex]}
              alt={`${tour.title} gallery ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {tour.gallery.length}
            </div>

            {/* Thumbnail strip */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 overflow-x-auto max-w-full px-4">
              {tour.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentImageIndex ? 'border-white' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourDetail;