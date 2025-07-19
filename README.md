# HN Tours & Travels Website

A modern, responsive travel website built with React, TypeScript, and React Router for showcasing tour packages and enabling easy booking through WhatsApp integration.

## 🌟 Features

- **Modern Design**: Beautiful, professional design with smooth animations and hover effects
- **Individual Tour Pages**: Detailed pages for each tour package with complete itineraries
- **WhatsApp Integration**: Direct booking through WhatsApp with contextual messages
- **Configurable Content**: Easy-to-modify configuration system for all content
- **Brochure Downloads**: Downloadable PDF brochures for each tour package
- **Social Media Integration**: Links to Instagram and YouTube channels
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Animated Hero Section**: Dynamic slideshow with floating elements
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## ⚙️ Easy Configuration System

This website is designed to be easily customizable through configuration files. All content can be modified without touching component code.

### 📁 Configuration Files

```
src/config/
├── siteConfig.ts        # Main site configuration (company info, contact, social media)
├── reviewsConfig.ts     # Customer reviews and ratings
├── servicesConfig.ts    # Services offered
├── galleryConfig.ts     # Gallery images
└── tours.ts            # Tour packages (in src/data/)
```

### 🔧 Main Configuration (src/config/siteConfig.ts)

**Company Information:**
```typescript
company: {
  name: "HN Tours",           // Company name
  tagline: "& Travels",       // Company tagline
  description: "...",         // Company description
  founded: "2014",            // Year founded
  experience: "10+",          // Years of experience
  customers: "5000+",         // Number of customers
  destinations: "50+",        // Number of destinations
  packages: "100+"            // Number of packages
}
```

**Contact Information:**
```typescript
contact: {
  phones: ["+91 98765 43210", "+91 87654 32109"],
  emails: ["info@hntoursandtravels.com", "bookings@hntoursandtravels.com"],
  whatsapp: "919876543210",   // Format: country code + number (no spaces, no + sign)
  address: {
    street: "123 Travel Street, Tourism District",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110001",
    country: "India"
  },
  officeHours: {
    weekdays: "Monday - Saturday: 9:00 AM - 8:00 PM",
    weekend: "Sunday: 10:00 AM - 6:00 PM"
  }
}
```

**Social Media Links:**
```typescript
social: {
  instagram: "https://www.instagram.com/haricharanhn/?hl=en",
  youtube: "https://www.youtube.com/@HNmotovlogs",
  facebook: "#",  // Add your Facebook URL
  twitter: "#"    // Add your Twitter URL
}
```

**Reviews Configuration:**
```typescript
reviews: {
  overallRating: 4.9,      // Overall rating (1-5)
  totalReviews: 500,       // Total number of reviews
  displayCount: 6          // Number of reviews to display
}
```

**Hero Section:**
```typescript
hero: {
  autoSlideInterval: 5000, // Slide change interval in milliseconds
  images: [
    {
      url: "image-url",
      title: "Slide Title",
      subtitle: "Slide Subtitle"
    }
    // Add more slides as needed
  ]
}
```

**Tours Display:**
```typescript
tours: {
  displayCount: 6  // Number of tours to show initially before "View All"
}
```

### 📝 Reviews Configuration (src/config/reviewsConfig.ts)

Add or modify customer reviews:
```typescript
export const reviewsData: Review[] = [
  {
    id: 1,
    name: "Customer Name",
    location: "City",
    rating: 5,                    // 1-5 stars
    text: "Review text...",
    date: "2 weeks ago",
    avatar: "avatar-image-url"
  }
  // Add more reviews as needed
];
```

### 🛠️ Services Configuration (src/config/servicesConfig.ts)

Modify or add services:
```typescript
export const servicesData: Service[] = [
  {
    icon: Plane,                  // Lucide React icon
    title: "Service Title",
    description: "Service description..."
  }
  // Add more services as needed
];
```

### 🖼️ Gallery Configuration (src/config/galleryConfig.ts)

Add or modify gallery images:
```typescript
export const galleryImages: GalleryImage[] = [
  {
    url: "image-url",
    title: "Image Title",
    location: "Location"
  }
  // Add more images as needed
];
```

### 🎯 Tour Packages (src/data/tours.ts)

**Adding a New Tour Package:**
```typescript
{
  id: "unique-tour-id",
  title: "Tour Name",
  location: "Destination",
  duration: "X Days / Y Nights",
  groupSize: "2-15 People",
  originalPrice: "₹35,000",
  discountedPrice: "₹25,000",
  rating: 4.8,
  image: "main-tour-image-url",
  category: "Heritage/Adventure/Beach/etc",
  highlights: ["Highlight 1", "Highlight 2", ...],
  brochureUrl: "/brochures/tour-brochure.pdf",
  gallery: ["image1-url", "image2-url", ...],
  itinerary: [
    {
      day: 1,
      title: "Day Title",
      description: "Day description",
      activities: ["Activity 1", "Activity 2", ...]
    }
    // Add more days as needed
  ],
  inclusions: ["Inclusion 1", "Inclusion 2", ...],
  exclusions: ["Exclusion 1", "Exclusion 2", ...]
}
```

## 🎨 Customization Examples

### Change Company Name and Contact
1. Open `src/config/siteConfig.ts`
2. Update the `company` and `contact` sections
3. Save the file - changes will reflect immediately

### Add New Review
1. Open `src/config/reviewsConfig.ts`
2. Add a new review object to the `reviewsData` array
3. Update the `displayCount` in `siteConfig.ts` if needed

### Modify Hero Slideshow
1. Open `src/config/siteConfig.ts`
2. Update the `hero.images` array with new images and text
3. Adjust `autoSlideInterval` to change slide timing

### Add New Service
1. Open `src/config/servicesConfig.ts`
2. Import a new icon from `lucide-react`
3. Add a new service object to the array

### Update Social Media Links
1. Open `src/config/siteConfig.ts`
2. Update the `social` section with your actual URLs

## 📱 WhatsApp Integration

The WhatsApp integration is automatically configured using the `contact.whatsapp` field in `siteConfig.ts`. 

**Format**: Country code + phone number (no spaces, no + sign)
- Example: `"919876543210"` for +91 98765 43210

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Hostinger
1. Upload the `dist` folder contents to `public_html`
2. Create `.htaccess` file for React Router support:

```apache
RewriteEngine On
RewriteBase /

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## 📄 File Structure

```
src/
├── config/              # Configuration files
│   ├── siteConfig.ts   # Main site configuration
│   ├── reviewsConfig.ts # Reviews configuration
│   ├── servicesConfig.ts # Services configuration
│   └── galleryConfig.ts # Gallery configuration
├── components/          # React components
├── data/
│   └── tours.ts        # Tour packages data
├── App.tsx
└── main.tsx
```

## 🔧 Technical Features

- **React Router**: Client-side routing
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **Responsive Design**: Mobile-first approach
- **Configuration-Driven**: Easy content management

## 📞 Support

For customization help:
- WhatsApp: +91 98765 43210
- Email: info@hntoursandtravels.com

---

**Ready for Production!** 🚀

This website is fully configurable and ready for deployment. Simply update the configuration files to match your business requirements.