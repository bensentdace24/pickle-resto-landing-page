import { images } from "./images";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "Popular Picks" | "Appetizers" | "Mains" | "Drinks" | "Desserts";
  featured?: boolean;
};

// Static prototype data.
// Later: this list will be replaced by a call to the Laravel API
// (e.g. GET /api/menu-items) backed by PostgreSQL.
export const menuItems: MenuItem[] = [
  {
    id: "chicken-inasal",
    name: "Chicken Inasal Platter",
    description: "Charcoal-grilled chicken marinated in calamansi, lemongrass and annatto oil, served with garlic rice.",
    price: 250,
    image: images.chicken,
    category: "Popular Picks",
    featured: true,
  },
  {
    id: "pasta-alfredo",
    name: "Pasta Alfredo Supreme",
    description: "Creamy alfredo pasta tossed with mushrooms, smoked bacon bits and shaved parmesan.",
    price: 220,
    image: images.pasta,
    category: "Popular Picks",
    featured: true,
  },
  {
    id: "smash-burger",
    name: "Smash House Burger",
    description: "Double smashed beef patty, cheddar, caramelized onions and house sauce on a toasted brioche bun.",
    price: 180,
    image: images.burger,
    category: "Popular Picks",
    featured: true,
  },
  {
    id: "chicken-wings",
    name: "Sizzling Buffalo Wings",
    description: "Crispy chicken wings tossed in tangy buffalo sauce, served with ranch dip.",
    price: 195,
    image: images.chickenAlt,
    category: "Appetizers",
  },
  {
    id: "cheese-platter",
    name: "Sharing Cheese Platter",
    description: "A curated selection of cheeses, cold cuts, crackers and fresh fruit — perfect after a match.",
    price: 320,
    image: images.cheesePlatter,
    category: "Appetizers",
  },
  {
    id: "seafood-pasta",
    name: "Seafood Marinara Pasta",
    description: "Linguine tossed in a rich tomato marinara loaded with mussels, shrimp and calamari.",
    price: 260,
    image: images.pastaAlt,
    category: "Mains",
  },
  {
    id: "classic-cheeseburger",
    name: "Classic Cheeseburger Meal",
    description: "Juicy beef patty with melted cheese, lettuce and tomato, served with crispy fries.",
    price: 190,
    image: images.burgerAlt,
    category: "Mains",
  },
];

export const featuredMenuItems = menuItems.filter((item) => item.featured);
