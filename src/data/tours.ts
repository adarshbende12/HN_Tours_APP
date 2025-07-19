export interface TourPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  originalPrice: string;
  discountedPrice: string;
  rating: number;
  image: string;
  category: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
  inclusions: string[];
  exclusions: string[];
  brochureUrl: string;
  gallery: string[];
}

export const tourPackages: TourPackage[] = [
  {
    id: "kerala-gods-own-country",
    title: "Kerala - God's Own Country",
    location: "Kochi, Munnar, Alleppey",
    duration: "4 Days / 3 Nights",
    groupSize: "2-15 People",
    originalPrice: "₹14,000",
    discountedPrice: "₹8,999",
    rating: 4.8,
    image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Nature",
    highlights: ["Tea Gardens & Plantations", "Cheeyappara & Valara Waterfalls", "Top Station Panoramic Views", "Eravikulam National Park", "Kundala Dam Boating", "Echo Point Experience", "Spice Plantation Walk", "Alleppey Backwaters", "2-Hour Shikara Ride", "Traditional Kathakali Show", "Botanical Gardens", "Elephant Camp Visit"],
    brochureUrl: "/brochures/kerala-gods-own-country.pdf",
    gallery: [
      "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kochi to Munnar - Hill Station Journey",
        description: "Your memorable Kerala journey begins with a warm welcome at Ernakulam Railway Station or Kochi International Airport, followed by a scenic drive to the charming hill station of Munnar.",
        activities: [
          "Welcome at Ernakulam Railway Station or Kochi International Airport",
          "Scenic drive to Munnar through Western Ghats",
          "Refreshing stops at Cheeyappara Waterfalls",
          "Photo opportunity at Valara Waterfalls",
          "Peaceful halt at Karadipara View Point with valley views",
          "Walk through aromatic Spice Plantation",
          "Learn about cardamom, pepper, and clove cultivation",
          "Hotel check-in and rest in Munnar",
          "Optional traditional Kathakali dance show",
          "Optional Kalari martial arts performance"
        ]
      },
      {
        day: 2,
        title: "Munnar Sightseeing - Tea Gardens & Nature",
        description: "Explore Munnar's most famous attractions including the highest viewpoints, serene dams, and lush tea gardens that make this hill station truly magical.",
        activities: [
          "After breakfast, drive to Top Station (highest point in Munnar)",
          "Breathtaking views of Kerala-Tamil Nadu border valleys",
          "Visit Sunmoon Valley Point surrounded by misty hills",
          "Explore Ellapatti View Point panoramic vistas",
          "Peaceful Kundala Dam with pedal boating option",
          "Experience Echo Point - shout and hear your echo",
          "Delicious lunch at local restaurant with Kerala flavors",
          "Visit Eravikulam National Park (home to Nilgiri Tahr)",
          "Walking trails with panoramic mountain views",
          "Explore endless green Tea Gardens",
          "Photo Point with perfect tea plantation backdrop",
          "Visit peaceful Botanical Garden",
          "Optional Elephant Camp visit",
          "Return to hotel for rest and dinner"
        ]
      },
      {
        day: 3,
        title: "Munnar to Alleppey - Venice of the East",
        description: "Journey from the misty hills of Munnar to the serene backwaters of Alleppey, famously known as the 'Venice of the East' for its dreamy canals and peaceful waterways.",
        activities: [
          "After breakfast, check out from Munnar hotel",
          "Scenic drive to Alleppey through lush landscapes",
          "Pass through beautiful paddy fields",
          "Drive along charming village roads",
          "Stop at peaceful viewpoints for photography",
          "Optional waterfall visits en route",
          "Arrive in Alleppey around 2:00 PM",
          "Hotel check-in and fresh-up time",
          "Relaxing 2-hour Shikara ride on backwaters",
          "Drift past coconut-lined shores",
          "Glimpses of authentic village life",
          "Peaceful evening on the water",
          "Experience that lingers long after the journey"
        ]
      },
      {
        day: 4,
        title: "Alleppey to Kochi - Departure",
        description: "Explore Alleppey's vibrant local culture and markets before your departure, wrapping up a soulful journey through God's Own Country.",
        activities: [
          "Delicious Kerala breakfast at hotel",
          "Check out and explore Alleppey's vibrant streets",
          "Shopping for local spices and aromatic blends",
          "Browse coir products and handmade souvenirs",
          "Visit local markets for authentic Kerala items",
          "Optional visit to serene Alappuzha Beach",
          "Historic pier and golden sands experience",
          "Peaceful end to your Kerala journey",
          "Transfer to Ernakulam Railway Station or Kochi Airport",
          "Departure based on your schedule",
          "Farewell to God's Own Country with beautiful memories"
        ]
      }
    ],
    inclusions: [
      "3 nights hotel accommodation (Munnar 2 nights + Alleppey 1 night)",
      "Daily breakfast at all hotels",
      "Airport/railway station transfers (Kochi)",
      "Private air-conditioned transportation for all sightseeing",
      "Professional English-speaking guide",
      "2-hour Shikara ride in Alleppey backwaters",
      "Spice plantation guided tour",
      "All entrance fees to national parks and viewpoints",
      "Parking and toll charges",
      "Driver allowances and fuel"
    ],
    exclusions: [
      "Flights/train tickets to Kochi",
      "Lunch and dinner (except breakfast)",
      "Kathakali dance show tickets",
      "Kalari martial arts show tickets",
      "Pedal boating at Kundala Dam",
      "Elephant Camp visit charges",
      "Personal expenses and shopping",
      "Tips and gratuities",
      "Travel insurance",
      "Camera fees at attractions",
      "Any services not mentioned in inclusions"
    ]
  },
  {
    id: "kashmir-valley-extended",
    title: "Kashmir Valley Extended Paradise",
    location: "Srinagar, Gulmarg, Sonamarg, Pahalgam",
    duration: "5 Days / 4 Nights",
    groupSize: "2-15 People",
    originalPrice: "₹20,000",
    discountedPrice: "₹16,999",
    rating: 4.9,
    image: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Nature",
    highlights: ["Gulmarg Gondola & Adventure", "Sonamarg Meadow of Gold", "Thajiwas Glacier Trek", "Luxurious Houseboat Stay", "Frozen Drung Waterfall", "Shiva Temple Panoramic Views", "Free Shikara Ride", "Pahalgam Valley of Shepherds", "Traditional Kashmiri Hospitality", "MAP Accommodation"],
    brochureUrl: "/brochures/kashmir-valley-extended.pdf",
    gallery: [
      "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description: "Welcome to the paradise on earth. Upon arrival, you'll be greeted and provided with a welcome drink before checking into your hotel.",
        activities: [
          "Meet and greet upon arrival",
          "Welcome drink service",
          "Hotel check-in in Srinagar",
          "Rest and acclimatization",
          "Evening at leisure",
          "Dinner at hotel (MAP basis)",
          "Overnight stay in Srinagar hotel"
        ]
      },
      {
        day: 2,
        title: "Gulmarg Excursion",
        description: "Scenic drive to Gulmarg, the 'Meadow of Flowers', for adventure activities and breathtaking mountain views.",
        activities: [
          "After breakfast, scenic drive to Gulmarg (100 km)",
          "Beautiful views of pine forests and snow landscapes",
          "Visit stunning Frozen Drung Waterfall",
          "Adventure activities: skiing, snowboarding, snowmobiling",
          "Sledging and ATV bike rides available",
          "Visit Shiva Temple for panoramic views",
          "Walk through local market for handicrafts",
          "Optional Gondola Cable Car ride (advance booking required)",
          "Return to Srinagar for overnight stay"
        ]
      },
      {
        day: 3,
        title: "Sonamarg Excursion & Houseboat Stay",
        description: "Journey to Sonamarg, the 'Meadow of Gold', followed by a luxurious houseboat experience on Dal Lake.",
        activities: [
          "After breakfast, depart for Sonamarg (82 km)",
          "Scenic drive through beautiful Kashmiri villages",
          "Experience local lifestyle and Kashmiri culture",
          "Hike, sledge, or pony ride to Thajiwas Glacier (3 km)",
          "Optional activities: skiing, yak rides, horse rides, snow biking",
          "Return to Srinagar in evening",
          "Check into luxurious houseboat on Dal Lake",
          "Complimentary 1-hour Shikara boat ride",
          "Dinner at houseboat with breathtaking views",
          "Overnight stay on houseboat"
        ]
      },
      {
        day: 4,
        title: "Pahalgam Excursion",
        description: "Explore Pahalgam, the 'Valley of Shepherds', with its pristine natural beauty and serene landscapes.",
        activities: [
          "After breakfast, check out from houseboat",
          "Drive to Pahalgam for sightseeing",
          "Explore the beautiful valley landscapes",
          "Visit local attractions and viewpoints",
          "Experience the serene mountain environment",
          "Photography opportunities",
          "Check into hotel in Pahalgam",
          "Dinner and overnight stay in Pahalgam"
        ]
      },
      {
        day: 5,
        title: "Departure from Srinagar",
        description: "Final day with shopping opportunities before departure from the beautiful Kashmir valley.",
        activities: [
          "After breakfast, check out from Pahalgam hotel",
          "Drive back to Srinagar",
          "Ample time for shopping in Srinagar",
          "Visit local markets for souvenirs",
          "Purchase famous Kashmiri handicrafts",
          "Car and representative provided until departure",
          "Transfer to airport or railway station",
          "Departure with unforgettable Kashmir memories"
        ]
      }
    ],
    inclusions: [
      "2 nights hotel accommodation in Srinagar (MAP basis)",
      "1 night luxurious houseboat stay on Dal Lake",
      "1 night hotel accommodation in Pahalgam",
      "Modified American Plan (MAP) - daily breakfast & dinner",
      "Welcome drink upon arrival",
      "Airport/railway station transfers",
      "Private transportation for all sightseeing",
      "Complimentary 1-hour Shikara boat ride",
      "Professional local guide",
      "All sightseeing as per itinerary",
      "Parking and toll charges"
    ],
    exclusions: [
      "Flights/train tickets to Srinagar",
      "Lunch during the tour",
      "Gondola Cable Car ride at Gulmarg",
      "Adventure activities charges (skiing, snowboarding, etc.)",
      "Pony rides to Thajiwas Glacier",
      "Yak rides and horse rides at Sonamarg",
      "Personal expenses and shopping",
      "Tips and gratuities",
      "Travel insurance",
      "Any services not mentioned in inclusions"
    ]
  },
  {
    id: "kashmir-valley-tour",
    title: "Kashmir Valley Paradise",
    location: "Srinagar, Gulmarg, Pahalgam",
    duration: "4 Days / 3 Nights",
    groupSize: "2-15 People",
    originalPrice: "₹15,000",
    discountedPrice: "₹12,999",
    rating: 4.9,
    image: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Nature",
    highlights: ["Dal Lake Shikara Ride", "Mughal Gardens", "Gulmarg Gondola", "Frozen Drung Waterfall", "ABC Valley", "Baisaran Valley (Mini Switzerland)", "Houseboat Stay", "Shankaracharya Temple", "Cricket Bat Factory", "Saffron Fields"],
    brochureUrl: "/brochures/kashmir-valley.pdf",
    gallery: [
      "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    itinerary: [
      {
        day: 1,
        title: "Srinagar Sightseeing",
        description: "Arrival in Srinagar and explore the beautiful city with its Mughal gardens and iconic Dal Lake.",
        activities: [
          "Arrival in Srinagar by flight or train",
          "Hotel check-in and freshening up",
          "Shankaracharya Temple visit with panoramic views",
          "Nishat Garden - 'Garden of Joy'",
          "Shalimar Bagh - 'Abode of Love'",
          "Pari Mahal - 'Palace of Fairies'",
          "Shopping at Lal Chowk market",
          "Complimentary 1-hour Shikara ride on Dal Lake",
          "Total travel distance: 40 km"
        ]
      },
      {
        day: 2,
        title: "Gulmarg Adventure",
        description: "Scenic drive to Gulmarg, the 'Meadow of Flowers', for adventure activities and natural beauty.",
        activities: [
          "After breakfast, scenic drive to Gulmarg",
          "Visit stunning Frozen Drung Waterfall",
          "Adventure activities: skiing, snowboarding, snowmobiling",
          "Sledging and ATV bike rides available",
          "Shiva Temple visit for panoramic views",
          "Local market exploration for handicrafts",
          "Optional Gondola Cable Car ride (advance booking required)",
          "Return to Srinagar in evening",
          "Total travel distance: 100 km"
        ]
      },
      {
        day: 3,
        title: "Pahalgam & Houseboat Experience",
        description: "Journey to Pahalgam, the 'Valley of Shepherds', and unique houseboat stay on Dal Lake.",
        activities: [
          "Check out and drive to Pahalgam",
          "Journey through saffron fields and apple gardens",
          "ABC Valley exploration with peaceful atmosphere",
          "Baisaran Valley - 'Mini Switzerland' visit",
          "Cricket bat factory tour",
          "Return to Srinagar for houseboat stay",
          "Exclusive traditional houseboat experience on Dal Lake",
          "Sunset views from houseboat deck",
          "Total travel distance: 180 km"
        ]
      },
      {
        day: 4,
        title: "Departure",
        description: "Final shopping and departure with beautiful memories of Kashmir.",
        activities: [
          "Breakfast on houseboat",
          "Check-out with ample time for shopping",
          "Last-minute souvenir shopping",
          "Transfer to airport or railway station",
          "Departure with unforgettable Kashmir memories"
        ]
      }
    ],
    inclusions: [
      "2 nights hotel accommodation in Srinagar",
      "1 night traditional houseboat stay on Dal Lake",
      "Daily breakfast and dinner",
      "Airport/railway station transfers",
      "Private transportation for all sightseeing",
      "Complimentary 1-hour Shikara ride",
      "Professional local guide",
      "All sightseeing as per itinerary",
      "Parking and toll charges"
    ],
    exclusions: [
      "Flights/train tickets to Srinagar",
      "Lunch during the tour",
      "Gondola Cable Car ride (₹700-1200 per person)",
      "Local taxi for ABC Valleys (₹2000-3000 per cab)",
      "Horse riding to Mini-Switzerland (₹1500 per person)",
      "Adventure activities charges",
      "Personal expenses and shopping",
      "Tips and gratuities",
      "Travel insurance"
    ]
  },
  {
    id: "manali-kullu-manikaran",
    title: "Manali, Kullu & Manikaran Adventure",
    location: "Manali, Sissu, Solang Valley, Atal Tunnel, Kasol, Manikaran, Kullu, Naggar Castle, Jogini Waterfalls",
    duration: "4 Days / 3 Nights",
    groupSize: "2-15 People",
    originalPrice: "₹12,500",
    discountedPrice: "₹8,999",
    rating: 4.8,
    image: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Adventure",
    highlights: ["Hadimba Devi Temple", "Vashisht Temple & Hot Springs", "Van Vihar Park", "Mall Road", "Solang Valley Adventure", "Atal Tunnel", "Sissu Village", "Naggar Castle", "Jogini Waterfalls", "Kullu Valley", "Kasol Cafés", "Manikaran Sahib Hot Springs"],
    brochureUrl: "https://drive.google.com/file/d/1BQPjRr5T8rAdjhWwwp0eaosU1HZMGlID/view?usp=drive_link",
    gallery: [
      "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    itinerary: [
      {
        day: 0,
        title: "Delhi to Manali (Overnight Journey)",
        description: "Assemble at the pickup point in Delhi by evening for an overnight journey to Manali.",
        activities: ["Departure from Majnu-ka-Tilla, Delhi", "Overnight bus journey (11-12 hours)", "Water bottle and blankets provided", "Scenic mountain views during approach"]
      },
      {
        day: 1,
        title: "Arrival in Manali & Local Sightseeing",
        description: "Check-in at hotel after fresh-up. Explore local attractions.",
        activities: ["Check-in at hotel after fresh-up", "Hadimba Devi Temple", "Vashisht Temple & Hot Springs", "Van Vihar Park", "Mall Road – Shopping & Cafés", "Overnight stay in Manali"]
      },
      {
        day: 2,
        title: "Solang Valley – Atal Tunnel – Sissu Excursion",
        description: "After breakfast, full-day sightseeing to Solang Valley, Atal Tunnel, and Sissu Village.",
        activities: ["After breakfast, full-day sightseeing to:", "Solang Valley – Adventure activities", "Atal Tunnel", "Sissu Village – Snowy landscapes & views", "Return to Manali by evening. Overnight stay"]
      },
      {
        day: 3,
        title: "Naggar Castle & Jogini Waterfall",
        description: "Visit Naggar Castle and trek to Jogini Waterfalls.",
        activities: ["Visit:", "Naggar Castle – Historic and scenic spot", "Jogini Waterfalls – Small trek & photo point", "Free time for café hopping or shopping. Overnight stay"]
      },
      {
        day: 4,
        title: "Kullu – Kasol – Manikaran Sahib & Departure",
        description: "Early check-out and depart for Kullu, Kasol, and Manikaran Sahib before your evening departure for Delhi.",
        activities: ["Early check-out and depart for:", "Kullu – Shawl factory / optional rafting", "Kasol – Cafés & scenic views", "Manikaran Sahib – Gurudwara & hot springs", "Evening departure for return journey to Delhi"]
      }
    ],
    inclusions: [
      "4 Nights Hotel Stay",
      "Volvo / Tempo Traveller (Delhi-Manali-Delhi)",
      "Daily Breakfast",
      "Daily Dinner",
      "Private/Group Transport for Local Sightseeing",
      "Driver/Guide Support",
      "Pre-tour overnight journey from Delhi"
    ],
    exclusions: [
      "Lunch during the tour",
      "Adventure activities at Solang Valley",
      "Personal expenses and shopping",
      "Tips and gratuities",
      "Travel insurance",
      "Any activities not mentioned in inclusions"
    ]
  },
  {
    id: "manali-kullu-adventure",
    title: "Manali & Kullu Adventure",
    location: "Manali, Kullu, Rohtang Pass",
    duration: "3 Days / 2 Nights",
    groupSize: "2-15 People",
    originalPrice: "₹10,000",
    discountedPrice: "₹6,499",
    rating: 4.7,
    image: "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Adventure",
    highlights: ["Rohtang Pass Visit", "Solang Valley Activities", "Atal Tunnel Experience", "Hidimba Temple", "Hot Springs", "Adventure Sports"],
    brochureUrl: "https://drive.google.com/file/d/1BQPjRr5T8rAdjhWwwp0eaosU1HZMGlID/view?usp=drive_link",
    gallery: [
      "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    itinerary: [
      {
        day: 0,
        title: "Delhi to Manali - Overnight Journey",
        description: "Begin your adventure with an overnight bus journey from Delhi to Manali via semi-sleeper Volvo AC bus.",
        activities: ["Departure from Majnu-ka-Tilla, Delhi", "Overnight bus journey (11-12 hours)", "Water bottle and blankets provided", "Scenic mountain views during approach"]
      },
      {
        day: 1,
        title: "Manali Local Sightseeing",
        description: "Arrive in Manali and explore the beautiful local attractions with private cab transportation.",
        activities: ["Hotel check-in and breakfast", "Hidimba Devi Temple (built in 1553)", "Vashisht Temple and hot water springs", "Club House shopping and activities", "Old Manali exploration", "Tibetan Monastery and Market", "Mall Road shopping"]
      },
      {
        day: 2,
        title: "Adventure Day - Solang Valley & Rohtang Pass",
        description: "Experience the thrill of high-altitude adventures and scenic beauty.",
        activities: ["Solang Valley adventure activities", "Atal Tunnel experience (9km world's longest)", "Rohtang Pass visit (13,500 feet altitude)", "Horse riding and mountain biking", "Alternative Sissu visit if Rohtang closed", "Return to hotel for dinner"]
      },
      {
        day: 3,
        title: "Kullu Exploration & Departure",
        description: "Explore Kullu's heritage and local markets before returning to Delhi.",
        activities: ["Hotel checkout after breakfast", "Naggar Castle visit (600 years old)", "Waterfalls visit (Noy or Sajra)", "Kullu Shawl Factory tour", "Dry Fruits Market shopping", "Vaishno Devi Temple", "Evening departure to Delhi"]
      }
    ],
    inclusions: [
      "Semi-sleeper Volvo AC bus (Delhi-Manali-Delhi)",
      "2 nights hotel/cottage accommodation",
      "Daily breakfast and dinner",
      "Private cab for all sightseeing (Shift model or above)",
      "Rohtang Pass visit with permits",
      "Atal Tunnel experience",
      "All parking charges",
      "Water bottle and blankets on bus",
      "Emergency support system in cabs"
    ],
    exclusions: [
      "Lunch during the tour",
      "Adventure activities at Solang Valley",
      "Horse riding at Rohtang Pass",
      "Mountain bike rides",
      "River crossing activities at Club House",
      "Personal expenses and shopping",
      "Travel insurance",
      "Any activities not mentioned in inclusions"
    ]
  },
  {
    id: "kerala-backwaters",
    title: "Kerala Backwaters Experience",
    location: "Alleppey, Kumarakom, Kochi",
    duration: "5 Days / 4 Nights",
    groupSize: "2-10 People",
    originalPrice: "₹18,000",
    discountedPrice: "₹12,499",
    rating: 4.9,
    image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Nature",
    highlights: ["Houseboat Stay", "Spice Gardens", "Ayurvedic Spa", "Local Cuisine", "Backwater Cruise"],
    brochureUrl: "/brochures/kerala-backwaters.pdf",
    gallery: [
      "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi",
        description: "Welcome to God's Own Country. Explore the historic port city.",
        activities: ["Airport pickup", "Chinese fishing nets", "St. Francis Church", "Dutch Palace", "Spice market"]
      },
      {
        day: 2,
        title: "Kochi to Alleppey",
        description: "Journey to the Venice of the East.",
        activities: ["Drive to Alleppey", "Houseboat check-in", "Backwater cruise", "Traditional Kerala lunch"]
      },
      {
        day: 3,
        title: "Houseboat Experience",
        description: "Full day cruising through the serene backwaters.",
        activities: ["Village visits", "Coir making demonstration", "Bird watching", "Sunset cruise"]
      },
      {
        day: 4,
        title: "Kumarakom Bird Sanctuary",
        description: "Explore the famous bird sanctuary and spice plantations.",
        activities: ["Bird sanctuary visit", "Spice plantation tour", "Ayurvedic massage", "Cultural show"]
      },
      {
        day: 5,
        title: "Departure",
        description: "Return to Kochi for departure.",
        activities: ["Hotel checkout", "Last-minute shopping", "Airport transfer", "Tour concludes"]
      }
    ],
    inclusions: [
      "Houseboat accommodation (1 night)",
      "Hotel accommodation (3 nights)",
      "All meals during houseboat stay",
      "Daily breakfast at hotels",
      "Air-conditioned transportation",
      "English-speaking guide",
      "All entrance fees"
    ],
    exclusions: [
      "Flights to/from Kochi",
      "Lunch and dinner at hotels",
      "Personal expenses",
      "Ayurvedic treatments",
      "Tips and gratuities",
      "Travel insurance"
    ]
  }
];