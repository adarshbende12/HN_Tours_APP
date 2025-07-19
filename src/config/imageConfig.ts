// Central image configuration for the entire project
// All image URLs are managed from this single file

export interface ImageConfig {
  hero: {
    url: string;
    title: string;
    subtitle: string;
  }[];
  gallery: {
    url: string;
    title: string;
    location: string;
  }[];
  reviews: {
    avatars: string[];
  };
}

export const imageConfig: ImageConfig = {
  // Hero section slideshow images
  hero: [
    {
      url: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Discover Amazing Adventures",
      subtitle: "Experience the beauty of India"
    },
    {
      url: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Heritage & Culture",
      subtitle: "Explore ancient monuments and traditions"
    },
    {
      url: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Natural Wonders",
      subtitle: "From mountains to beaches"
    },
    {
      url: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Adventure Awaits",
      subtitle: "Thrilling experiences in the Himalayas"
    }
  ],

  // Gallery section images
  gallery: [
    {
      url: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Taj Mahal at Sunrise",
      location: "Agra"
    },
    {
      url: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Golden Triangle Heritage",
      location: "Delhi"
    },
    {
      url: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Kerala Backwaters",
      location: "Alleppey"
    },
    {
      url: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Goa Beach Paradise",
      location: "Goa"
    },
    {
      url: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Himalayan Adventure",
      location: "Manali"
    },
    {
      url: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Rajasthan Heritage",
      location: "Jaisalmer"
    },
    {
      url: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Mountain Landscapes",
      location: "Himachal Pradesh"
    },
    {
      url: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Temple Architecture",
      location: "South India"
    },
    {
      url: "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Coastal Beauty",
      location: "Kerala"
    },
    {
      url: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Cultural Heritage",
      location: "Rajasthan"
    },
    {
      url: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Desert Safari",
      location: "Thar Desert"
    },
    {
      url: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Snow Adventures",
      location: "Kashmir"
    }
  ],

  // Review avatars
  reviews: {
    avatars: [
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    ]
  }
};

// Helper functions to get images by category
export const getHeroImages = () => imageConfig.hero;
export const getGalleryImages = () => imageConfig.gallery;
export const getReviewAvatars = () => imageConfig.reviews.avatars;

// Helper function to get all image URLs (useful for preloading)
export const getAllImageUrls = (): string[] => {
  const urls: string[] = [];
  
  // Hero images
  imageConfig.hero.forEach(img => urls.push(img.url));
  
  // Gallery images
  imageConfig.gallery.forEach(img => urls.push(img.url));
  
  // Review avatars
  urls.push(...imageConfig.reviews.avatars);
  
  return [...new Set(urls)]; // Remove duplicates
};