// Placeholder testimonials for the prototype.
// Later: replace with live results from the Google Places API / Google Reviews.
export type Review = {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Angela Reyes",
    role: "Regular Diner",
    rating: 5,
    text: "Great food and amazing atmosphere! The chicken inasal is a must-try and the staff are always so welcoming.",
  },
  {
    id: "r2",
    name: "Marco Villanueva",
    role: "Pickleball Enthusiast",
    rating: 5,
    text: "Best courts in town — well maintained and never overcrowded. I love that I can grab a burger right after my match.",
  },
  {
    id: "r3",
    name: "Kristine Dela Cruz",
    role: "Weekend Regular",
    rating: 4,
    text: "Perfect weekend hangout for our barkada. Good food, good games, good vibes. Will definitely come back!",
  },
  {
    id: "r4",
    name: "Paolo Santos",
    role: "First-time Visitor",
    rating: 5,
    text: "Didn't expect a restaurant with actual pickleball courts! Super fun concept and the pasta was excellent.",
  },
  {
    id: "r5",
    name: "Bianca Fernandez",
    role: "Local Foodie",
    rating: 5,
    text: "The ambiance is so relaxing and the food is consistently good. My go-to spot for family dinners.",
  },
  {
    id: "r6",
    name: "JR Aquino",
    role: "Weekly Player",
    rating: 4,
    text: "Booked the court for our office league. Great facilities and the staff were very accommodating.",
  },
];
