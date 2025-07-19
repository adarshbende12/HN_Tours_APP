import { getHeroImages } from './imageConfig';

export interface SiteConfig {
  company: {
    name: string;
    tagline: string;
    description: string;
    founded: string;
    experience: string;
    customers: string;
    destinations: string;
    packages: string;
  };
  contact: {
    phones: string[];
    emails: string[];
    address: {
      street: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
    };
    whatsapp: string;
    officeHours: {
      weekdays: string;
      weekend: string;
    };
  };
  social: {
    instagram: string;
    youtube: string;
    facebook: string;
    twitter: string;
  };
  reviews: {
    overallRating: number;
    totalReviews: string;
    displayCount: number;
  };
  hero: {
    autoSlideInterval: number; // in milliseconds
  };
  tours: {
    displayCount: number; // Number of tours to show initially
  };
  instagramEmbeds: string[];
}

export const siteConfig: SiteConfig = {
  company: {
    name: "HN Cottages and Tours",
    tagline: "",
    description: "Your trusted travel partner for over a decade. We create unforgettable experiences and help you discover the world's most beautiful destinations.",
    founded: "2014",
    experience: "7+",
    customers: "5000+",
    destinations: "6+",
    packages: "100+"
  },
  contact: {
    phones: ["+91 75691 87415", "+91 98166 15747"],
    emails: ["hntoursandtravels@gmail.com"],
    address: {
      street: "Manali, Hyderabad and Kerala",
      city: "",
      state: "",
      pincode: "",
      country: ""
    },
    whatsapp: "919876543210", // Format: country code + number (no spaces, no + sign)
    officeHours: {
      weekdays: "24/7",
      weekend: "24/7"
    }
  },
  social: {
    instagram: "https://www.instagram.com/haricharanhn/?hl=en",
    youtube: "https://www.youtube.com/@HNmotovlogs",
    facebook: "#", // Add your Facebook URL
    twitter: "#"  // Add your Twitter URL
  },
  reviews: {
    overallRating: 4.8,
    totalReviews: "6",
    displayCount: 6 // Number of reviews to display
  },
  hero: {
    autoSlideInterval: 5000, // 5 seconds
  },
  tours: {
    displayCount: 6 // Number of tours to show initially before "View All"
  }
};

// Get hero images from centralized image config
export const getHeroImagesForSite = () => getHeroImages();