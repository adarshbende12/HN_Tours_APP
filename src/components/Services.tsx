import React from 'react';
import { servicesData } from '../config/servicesConfig';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Our Services
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Complete travel solutions for your perfect journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-3 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="text-blue-600 mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center md:justify-start">
                  <IconComponent className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-3 text-center md:text-left">{service.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-center md:text-left hidden md:block">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;