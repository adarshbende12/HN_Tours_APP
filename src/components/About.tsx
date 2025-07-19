import React from 'react';
import { Award, Globe, Heart, Shield } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const About: React.FC = () => {
  const { company } = siteConfig;
  
  const features = [
    {
      icon: <Award className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Expert Guides",
      description: "Professional local guides"
    },
    {
      icon: <Globe className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Global Network",
      description: "Trusted partners worldwide"
    },
    {
      icon: <Heart className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Personalized",
      description: "Tailored experiences"
    },
    {
      icon: <Shield className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Safety First",
      description: "24/7 support & security"
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="text-center p-3 md:p-4 bg-gray-50 rounded-xl">
            <div className="text-xl md:text-3xl font-bold text-blue-600 mb-1">{company.experience}</div>
            <div className="text-xs md:text-base text-gray-600">Years</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-gray-50 rounded-xl">
            <div className="text-xl md:text-3xl font-bold text-blue-600 mb-1">{company.customers}</div>
            <div className="text-xs md:text-base text-gray-600">Customers</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-gray-50 rounded-xl">
            <div className="text-xl md:text-3xl font-bold text-blue-600 mb-1">{company.destinations}</div>
            <div className="text-xs md:text-base text-gray-600">Places</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-gray-50 rounded-xl">
            <div className="text-xl md:text-3xl font-bold text-blue-600 mb-1">{company.packages}</div>
            <div className="text-xs md:text-base text-gray-600">Packages</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-3 md:p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group"
            >
              <div className="text-blue-600 mb-2 md:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-3">{feature.title}</h4>
              <p className="text-xs md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;