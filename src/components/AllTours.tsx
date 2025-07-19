import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { tourPackages } from '../data/tours';
import { siteConfig } from '../config/siteConfig';
import { MapPin, Clock, Users, Star, ArrowRight, Filter, Search, ArrowLeft, Package } from 'lucide-react';

// Helper function to get canonical destination names
const getCanonicalDestinationName = (location: string): string => {
  if (location.toLowerCase().includes('kerala') || 
      location.toLowerCase().includes('kochi') || 
      location.toLowerCase().includes('munnar') || 
      location.toLowerCase().includes('alleppey') ||
      location.toLowerCase().includes('kumarakom')) {
    return 'Kerala';
  }
  if (location.toLowerCase().includes('manali') || 
      location.toLowerCase().includes('kullu') || 
      location.toLowerCase().includes('solang') ||
      location.toLowerCase().includes('rohtang')) {
    return 'Manali';
  }
  if (location.toLowerCase().includes('kashmir') || 
      location.toLowerCase().includes('srinagar') || 
      location.toLowerCase().includes('gulmarg') ||
      location.toLowerCase().includes('pahalgam') ||
      location.toLowerCase().includes('sonamarg')) {
    return 'Kashmir';
  }
  return location; // fallback to original location
};

const AllTours: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('price'); // Default to price for "View All Packages"

  const destination = searchParams.get('destination');
  const showAllPackages = searchParams.get('showAllPackages') === 'true';

  // Extract unique destinations from tour packages
  const uniqueDestinations = useMemo(() => {
    const canonicalDestinations = Array.from(new Set(tourPackages.map(tour => getCanonicalDestinationName(tour.location))));
    return canonicalDestinations.map(canonicalName => {
      const toursInCanonicalLocation = tourPackages.filter(tour => getCanonicalDestinationName(tour.location) === canonicalName);
      const minPrice = Math.min(...toursInCanonicalLocation.map(tour => 
        parseInt(tour.discountedPrice.replace(/[₹,]/g, ''))
      ));
      const tourCount = toursInCanonicalLocation.length;
      const sampleImage = toursInCanonicalLocation[0].image;
      
      return {
        name: canonicalName,
        tourCount,
        minPrice: `₹${minPrice.toLocaleString()}`,
        image: sampleImage
      };
    });
  }, []);

  const categories = ['All', ...Array.from(new Set(tourPackages.map(tour => tour.category)))];

  // Filter tours based on current view
  const filteredTours = useMemo(() => {
    let tours = tourPackages;

    // Filter by destination if specified
    if (destination) {
      tours = tours.filter(tour => getCanonicalDestinationName(tour.location) === destination);
    }

    // Apply search and category filters
    tours = tours.filter(tour => {
      const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tour.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || tour.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort tours
    tours = tours.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return parseInt(a.discountedPrice.replace(/[₹,]/g, '')) - parseInt(b.discountedPrice.replace(/[₹,]/g, ''));
        case 'duration':
          return parseInt(a.duration.split(' ')[0]) - parseInt(b.duration.split(' ')[0]);
        default:
          return 0;
      }
    });

    return tours;
  }, [destination, searchTerm, selectedCategory, sortBy]);

  const handleTourClick = (tourId: string) => {
    navigate(`/tour/${tourId}`);
  };

  const handleDestinationClick = (destinationName: string) => {
    navigate(`/tours?destination=${encodeURIComponent(destinationName)}`);
  };

  const handleViewAllPackages = () => {
    navigate('/tours?showAllPackages=true');
  };

  const handleBackToDestinations = () => {
    navigate('/tours');
  };

  const handleBackHome = () => {
    navigate('/');
  };

  // Render destinations view
  if (!destination && !showAllPackages) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Choose Your Destination
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Explore our handpicked destinations across India. Select a destination to view available tour packages, or browse all packages sorted by price.
              </p>
              <button
                onClick={handleBackHome}
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* View All Packages Button */}
          <div className="text-center mb-12">
            <button
              onClick={handleViewAllPackages}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto shadow-lg"
            >
              <Package className="h-6 w-6" />
              <span>View All Packages ({tourPackages.length}) - Sorted by Price</span>
            </button>
            <p className="text-gray-600 mt-2">See all tour packages sorted from lowest to highest price</p>
          </div>

          {/* Destinations Grid */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Browse by Destination
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uniqueDestinations.map((dest, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                  onClick={() => handleDestinationClick(dest.name)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{dest.name}</h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <span>{dest.tourCount} packages</span>
                        <span>From {dest.minPrice}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">Explore {dest.name}</h4>
                        <p className="text-sm text-gray-600">{dest.tourCount} tour packages available</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600">{tourPackages.length}</div>
                <div className="text-gray-600">Total Packages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">{uniqueDestinations.length}</div>
                <div className="text-gray-600">Destinations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">{siteConfig.reviews.overallRating}</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render tours view (filtered by destination or all packages)
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {destination ? `Tours in ${destination}` : 'All Tour Packages'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              {destination 
                ? `Discover amazing tour packages in ${destination}. Each package is carefully crafted for an unforgettable experience.`
                : 'Browse our complete collection of tour packages, sorted by price from lowest to highest.'
              }
            </p>
            <button
              onClick={handleBackToDestinations}
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              ← Back to Destinations
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search tours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="price">Sort by Price (Low to High)</option>
                <option value="rating">Sort by Rating</option>
                <option value="duration">Sort by Duration</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-gray-600">
              Showing {filteredTours.length} of {tourPackages.length} tours
              {destination && ` in ${destination}`}
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Total Reviews:</span>
              <span className="font-semibold text-blue-600">{siteConfig.reviews.totalReviews}</span>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="font-semibold">{siteConfig.reviews.overallRating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
              onClick={() => handleTourClick(tour.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save {Math.round(((parseInt(tour.originalPrice.replace('₹', '').replace(',', '')) - parseInt(tour.discountedPrice.replace('₹', '').replace(',', ''))) / parseInt(tour.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                </div>
                <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-2 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{tour.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                
                <div className="flex items-center text-gray-600 mb-4 space-x-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{tour.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.slice(0, 3).map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                    {tour.highlights.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                        +{tour.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-lg text-gray-400 line-through">{tour.originalPrice}</span>
                    <span className="text-2xl font-bold text-blue-600 ml-2">{tour.discountedPrice}</span>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No tours found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTours;