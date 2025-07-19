import React from 'react';
import { MapPin, Camera, Heart, Users, Award, Star } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const FounderSection: React.FC = () => {
  const { company } = siteConfig;

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            About The Founder
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the visionary behind your unforgettable travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Founder Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://andhrapachallu.com/cdn/shop/files/IMG_8108.jpg?v=1714669941&width=1500" 
                  alt="Hari - Founder & Travel Enthusiast" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-orange-400 text-white p-3 rounded-full animate-float">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-3 rounded-full animate-float-delayed">
                <Heart className="h-6 w-6" />
              </div>
            </div>
          </div>

          {/* Founder Story */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Hey there!
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Meet <strong>Hari</strong>, the passionate traveler and YouTuber who founded {company.name}. 
                    His love for exploring new destinations and sharing authentic travel experiences led him to create 
                    something truly special in the travel industry.
                  </p>
                  <p>
                    As Hari traveled across India, he discovered that many travelers faced challenges finding 
                    authentic experiences and comfortable accommodations that felt like home. The food, hospitality, 
                    and overall travel experience often didn't meet the expectations of fellow travelers.
                  </p>
                  <p>
                    So, Hari decided to do something about it. He created <strong>{company.name}</strong>! 
                    It's all about bringing authentic travel experiences to everyone, no matter where they want to explore. 
                    From serene backwaters of Kerala to the majestic mountains of Kashmir, every tour is crafted with love, 
                    keeping the true essence of travel alive.
                  </p>
                  <p>
                    What sets us apart is our commitment to <strong>homely food</strong> and genuine hospitality. 
                    We ensure that every traveler feels at home, with delicious meals that remind you of your own kitchen 
                    and warm service that makes you feel like family.
                  </p>
                  <p className="font-semibold text-blue-600">
                    Join us in celebrating Hari's love for adventure and authentic travel experiences. 
                    Let's explore the incredible beauty of India together!
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    Thanks for choosing {company.name}! 🚂
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{company.experience}</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{company.customers}</div>
                  <div className="text-sm text-gray-600">Happy Travelers</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{company.destinations}</div>
                  <div className="text-sm text-gray-600">Destinations</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">5.0</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience Hari's Vision?
            </h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of travelers who have experienced the warmth of authentic Indian hospitality 
              and the joy of perfectly planned adventures.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('tours');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Explore Our Tours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;