import { images } from "./images";

// Static prototype data.
// Later: this becomes dynamic and editable through the admin dashboard.
export type Promotion = {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  details: string;
};

export const promotions: Promotion[] = [
  {
    id: "weekend-pickleball",
    tag: "20% OFF Court Rental",
    title: "Weekend Pickleball Promo",
    description: "Book any court every Saturday and Sunday and enjoy 20% off your full-court rental rate.",
    image: images.pickleballAerial,
    details:
      "Valid every Saturday and Sunday, 6:00 AM – 10:00 PM. Discount is automatically applied to full-court rentals of 1 hour or more. Not valid with other promos. Walk-ins and advance bookings both welcome — just mention the Weekend Pickleball Promo at the counter.",
  },
  {
    id: "family-feast",
    tag: "Buy 1 Take 1",
    title: "Midweek Family Feast",
    description: "Order any Popular Picks main course on Tuesdays and Wednesdays and get a second one free.",
    image: images.foodSpread,
    details:
      "Promo runs every Tuesday and Wednesday, lunch and dinner service. Applicable to select Popular Picks mains. Dine-in only. Limit of 2 redemptions per table.",
  },
  {
    id: "student-smash",
    tag: "15% OFF",
    title: "Student Smash Hour",
    description: "Students get 15% off court rentals and drinks every weekday from 2 PM to 5 PM.",
    image: images.pickleballAction,
    details:
      "Valid Monday to Friday, 2:00 PM – 5:00 PM with a valid school ID. Applies to court rental fees and non-alcoholic beverages. Cannot be combined with other ongoing promotions.",
  },
];
