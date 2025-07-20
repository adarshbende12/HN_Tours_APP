import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Package, MessageCircle, Clock, ArrowLeft } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const ComingSoon: React.FC = () => {
  const navigate = useNavigate();
  const { contact, company } = siteConfig;

  const handleWhatsAppContact = () => {
    const message = `Hi! I'm interested in upcoming tour packages from ${company.name}. Could you please notify me when new destinations are available?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const goHome = () => {
    navigate('/');
  };

  const goToAllTours = () => {
    navigate('/tours');
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Clock className="h-16 w-16 mx-auto mb-4 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Coming Soon!
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We're working hard to bring you amazing new destinations and experiences.
            </p>
          </div>
          
          <button
            onClick={goBack}
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center space-x-2 mx-auto"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Go Back</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center mb-8">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="h-12 w-12 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Exciting New Packages in Development
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our travel experts are carefully crafting incredible tour packages for amazing new destinations. 
              We're working around the clock to bring you the best experiences, authentic local culture, 
              and unforgettable memories.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Carefully curated itineraries</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Best value for money</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Authentic local experiences</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">24/7 customer support</span>
                </div>
              </div>
            </div>

            <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text mb-8">
              Stay Tuned for Amazing Adventures! 🌟
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={goHome}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg"
          >
            <Home className="h-6 w-6" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={goToAllTours}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg"
          >
            <Package className="h-6 w-6" />
            <span>View All Tours</span>
          </button>

          <button
            onClick={handleWhatsAppContact}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mt-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Be the First to Know!</h3>
          <p className="text-gray-300 mb-6">
            Want to be notified when these exciting new packages are ready? Contact us on WhatsApp and we'll keep you updated!
          </p>
          <button
            onClick={handleWhatsAppContact}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Get Notified via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;