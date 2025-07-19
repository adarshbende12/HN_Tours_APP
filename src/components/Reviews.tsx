import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviewsData } from '../config/reviewsConfig';
import { siteConfig } from '../config/siteConfig';

const Reviews: React.FC = () => {
  const { reviews } = siteConfig;
  const displayedReviews = reviewsData.slice(0, reviews.displayCount);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-3 w-3 md:h-4 md:w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experiences.
          </p>
          
          <div className="flex items-center justify-center mt-4 md:mt-6 space-x-2">
            <div className="flex items-center space-x-1">
              {renderStars(Math.round(reviews.overallRating))}
            </div>
            <span className="text-base md:text-lg font-semibold text-gray-900">{reviews.overallRating}/5</span>
            <span className="text-sm md:text-base text-gray-600">({reviews.totalReviews} reviews)</span>
          </div>
        </div>

        {/* Mobile: Horizontal Scroll, Desktop: Grid */}
        <div className="md:hidden">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {displayedReviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-80 bg-gray-50 rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-600">{review.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1 mr-2">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-xs text-gray-600">{review.date}</span>
                </div>

                <div className="relative">
                  <Quote className="h-6 w-6 text-blue-200 absolute -top-1 -left-1" />
                  <p className="text-sm text-gray-700 leading-relaxed pl-5">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                <p className="text-sm text-gray-600">{review.location}</p>
              </div>

              <div className="relative">
                <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl md:rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              Join Thousands of Happy Travelers
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
              Experience the difference with {siteConfig.company.name} {siteConfig.company.tagline}. Book your dream vacation today.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;