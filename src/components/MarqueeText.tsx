import React from 'react';

const MarqueeText: React.FC = () => {
  return (
    <div className="marquee-container bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-3 fixed top-0 left-0 right-0 z-50 overflow-hidden shadow-lg">
      <div className="marquee-text whitespace-nowrap font-bold text-lg drop-shadow-md">
        <span className="inline-block px-8">
          ✨ 🚂 Special Discounts on All Packages | Premium Tours at Unbeatable Prices 🚃 ✨
        </span>
        <span className="inline-block px-8">
          ✨ 🚂 Special Discounts on All Packages | Premium Tours at Unbeatable Prices 🚃 ✨
        </span>
        <span className="inline-block px-8">
          ✨ 🚂 Special Discounts on All Packages | Premium Tours at Unbeatable Prices 🚃 ✨
        </span>
        <span className="inline-block px-8">
          ✨ 🚂 Special Discounts on All Packages | Premium Tours at Unbeatable Prices 🚃 ✨
        </span>
      </div>
    </div>
  );
};

export default MarqueeText;