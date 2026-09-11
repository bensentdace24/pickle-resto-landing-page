import { images } from "./images";

export type GalleryCategory =
  | "Restaurant"
  | "Food"
  | "Pickleball"
  | "Events"
  | "Customers";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  image: string;
  alt: string;
  tall?: boolean;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "Restaurant", image: images.restaurantInterior, alt: "Cozy restaurant dining area", tall: true },
  { id: "g2", category: "Food", image: images.chicken, alt: "Grilled chicken inasal platter" },
  { id: "g3", category: "Pickleball", image: images.pickleballAerial, alt: "Aerial view of pickleball courts", tall: true },
  { id: "g4", category: "Food", image: images.burger, alt: "Smash house burger with fries" },
  { id: "g5", category: "Customers", image: images.toastFriends, alt: "Friends enjoying a meal together" },
  { id: "g6", category: "Pickleball", image: images.pickleballAction, alt: "Player in action on the pickleball court" },
  { id: "g7", category: "Food", image: images.pasta, alt: "Creamy pasta alfredo" },
  { id: "g8", category: "Events", image: images.toast, alt: "Guests toasting at a celebration" },
  { id: "g9", category: "Pickleball", image: images.pickleballGroup, alt: "Group playing pickleball outdoors", tall: true },
  { id: "g10", category: "Restaurant", image: images.restaurantTable, alt: "Elegant restaurant table setting" },
  { id: "g11", category: "Events", image: images.toastGlasses, alt: "Guests celebrating with a toast" },
  { id: "g12", category: "Customers", image: images.pickleballCelebrate, alt: "Player celebrating a win" },
];

export const galleryCategories: GalleryCategory[] = [
  "Restaurant",
  "Food",
  "Pickleball",
  "Events",
  "Customers",
];
