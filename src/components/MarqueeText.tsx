import React from 'react';

const MarqueeText: React.FC = () => {
  return (
    <div className="marquee-container bg-orange-500 text-white py-2 fixed top-0 left-0 right-0 z-50 overflow-hidden">
      <div className="marquee-text whitespace-nowrap">
        <span className="inline-block px-8">
          🚂 Discount on all the packages | Best tours in lower price 🚃 
        </span>
        <span className="inline-block px-8">
          🚂 Discount on all the packages | Best tours in lower price 🚃 
        </span>
        <span className="inline-block px-8">
          🚂 Discount on all the packages | Best tours in lower price 🚃 
        </span>
        <span className="inline-block px-8">
          🚂 Discount on all the packages | Best tours in lower price 🚃 
        </span>
      </div>
    </div>
  );
};

export default MarqueeText;