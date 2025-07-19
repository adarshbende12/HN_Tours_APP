import React, { useEffect, useRef } from 'react';
import { siteConfig } from '../config/siteConfig';

const InstagramEmbeds: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    const loadInstagramScript = () => {
      // Check if script already exists
      if (document.querySelector('script[src*="instagram.com/embed.js"]')) {
        processEmbeds();
        return;
      }

      // Create and load Instagram script
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        setIsLoaded(true);
        processEmbeds();
      };
      document.body.appendChild(script);
    };

    const processEmbeds = () => {
      // Wait a bit for the DOM to be ready
      setTimeout(() => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      }, 100);
    };

    // Load script after component mounts
    const timer = setTimeout(loadInstagramScript, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Re-process embeds when container content changes
  useEffect(() => {
    if (isLoaded && window.instgrm) {
      const timer = setTimeout(() => {
        window.instgrm.Embeds.process();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <div className="w-full" ref={containerRef}>
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Latest Adventures
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Follow our journey through stunning destinations and exciting adventures. 
          See what our travelers are experiencing in real-time.
        </p>
      </div>

      {/* Mobile: Horizontal scroll */}
      <div className="md:hidden">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {siteConfig.instagramEmbeds.map((embed, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 instagram-embed-container"
              dangerouslySetInnerHTML={{ __html: embed }}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Responsive grid */}
      <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
        {siteConfig.instagramEmbeds.map((embed, index) => (
          <div
            key={index}
            className="w-full max-w-lg instagram-embed-container"
            dangerouslySetInnerHTML={{ __html: embed }}
          />
        ))}
      </div>

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="text-center py-8">
          <div className="inline-flex items-center space-x-2">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <span className="text-gray-600">Loading Instagram content...</span>
          </div>
        </div>
      )}

      {/* Call to action */}
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          Want to see more? Follow us on Instagram for daily updates!
        </p>
        <button
          onClick={() => window.open(siteConfig.social.instagram, '_blank')}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span>Follow @haricharanhn</span>
        </button>
      </div>
    </div>
  );
};

// Extend window interface for Instagram embed script
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default InstagramEmbeds;