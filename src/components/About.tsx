import React from 'react';
import { siteConfig } from '../config/siteConfig';

const About: React.FC = () => {
  const { company } = siteConfig;

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About section content can be added here in the future */}
      </div>
    </section>
  );
};

export default About;