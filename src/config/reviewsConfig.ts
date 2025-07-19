export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export const reviewsData: Review[] = [
  {
    id: 1,
    name: "uma uppalapathi",
    location: "Manali",
    rating: 5,
    text: "Had a great stay at HN Cottage in Manali! The South Indian food was amazing and felt just like home. The rooms were clean and cozy, staff were very friendly, and the driver was polite and helpful throughout our trip. Highly recommend for a peaceful and comfortable stay!",
    date: "a few days ago",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "ruhid akram",
    location: "India",
    rating: 5,
    text: "The hospitality is top notch, especially food is very tasty. Room was spacious and comfortable. View is very good from the rooms as well. Staff are very good.",
    date: "recently",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Prem Battu",
    location: "Manali",
    rating: 5,
    text: "It was very good taking package with hn cottages I really like the way that hari bro and Teja received each every body in person from starting to the end. I recommend every one. Its a nice place to stay and that food u cant get anywhere in manali it is like home.",
    date: "a week ago",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 4,
    name: "Avinash Jampa",
    location: "India",
    rating: 5,
    text: "We take package for 3 days 2 night package with HN Motovlog, best thing in this package is food, staff behaviour is good, rooms are good and very spacious and rooms also very neat and clean, cab drivers are also very polite and giving sufficient time to explore the places, Overall a good package worth for money",
    date: "a few weeks ago",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 5,
    name: "Podili Srinu",
    location: "India",
    rating: 5,
    text: "I Stayed Here For 4 Days Next Level Hospitality bale chusukunnaru main advantage is nature madhyalo bale anipinchinchi staff also very polite and hospitality adiripoindi must visit telugu style food also superb",
    date: "recently",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 6,
    name: "Dr Pratyusha",
    location: "Manali",
    rating: 5,
    text: "The Hotel HN Cottages was a fantastic choice for our vacation. The location was perfect, just a walk from center of manali. The rooms were spacious and clean, with comfortable beds. The staff was incredibly friendly and helpful. Overall, we highly recommend this hotel for families and would definitely stay here again on our next trip. Would like to go for other trip packages also with HN group...",
    date: "recently",
    avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];