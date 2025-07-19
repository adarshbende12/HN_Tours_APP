import React from 'react';

const MarqueeText: React.FC = () => {
  return (
    <div className="marquee-container bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-2 fixed top-0 left-0 right-0 z-50 overflow-hidden shadow-lg whitespace-nowrap">
      <div className="marquee-inner font-bold text-lg drop-shadow-md">
        ✨ 🚂 Special Discounts on All Packages | Premium Tours at Unbeatable Prices 🚃 ✨     
        ✨ 🚂 Special Discounts on All Packages | Premium Tours at Unbeatable Prices 🚃 ✨     
        ✨ 🚂 Special Discounts on All Packages | Premium Tours at Unbeatable Prices 🚃 ✨
      </div>
    </div>
  );
};

export default MarqueeText;