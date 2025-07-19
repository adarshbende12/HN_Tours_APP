import React from 'react';
import { Plane, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { company, contact, social } = siteConfig;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openSocialMedia = (platform: string) => {
    const urls = {
      instagram: social.instagram,
      youtube: social.youtube,
      facebook: social.facebook,
      twitter: social.twitter
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">{company.name}</h1>
                <p className="text-sm text-gray-400">{company.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {company.description}
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => openSocialMedia('facebook')}
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button
                onClick={() => openSocialMedia('instagram')}
                className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button
                onClick={() => openSocialMedia('twitter')}
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button
                onClick={() => openSocialMedia('youtube')}
                className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                <Youtube className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tours')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Tours & Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Golden Triangle
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Kerala Backwaters
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Goa Beaches
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Himalayan Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Rajasthan Heritage
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  South India Temples
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  {contact.phones.map((phone, index) => (
                    <p key={index} className="text-gray-400">{phone}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  {contact.emails.map((email, index) => (
                    <p key={index} className="text-gray-400">{email}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">
                    {contact.address.street}<br />
                    {contact.address.city} - {contact.address.pincode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Follow Our Journey</h3>
            <p className="text-gray-400 mb-6">Stay updated with our latest adventures and travel tips</p>
            <div className="flex justify-center space-x-6">
              <button
                onClick={() => openSocialMedia('instagram')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Instagram className="h-5 w-5" />
                <span>Follow on Instagram</span>
              </button>
              <button
                onClick={() => openSocialMedia('youtube')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Youtube className="h-5 w-5" />
                <span>Subscribe YouTube</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} {company.name} {company.tagline}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;