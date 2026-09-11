// Static prototype data for pickleball court rates.
// Later: this will be served from the admin dashboard / Laravel API.
export type CourtRate = {
  id: string;
  session: string;
  time: string;
  rate: string;
  note?: string;
};

export const courtRates: CourtRate[] = [
  {
    id: "daytime",
    session: "Daytime",
    time: "6:00 AM – 5:00 PM",
    rate: "₱150 / hour",
    note: "Per person, walk-ins welcome",
  },
  {
    id: "evening",
    session: "Evening",
    time: "5:00 PM – 10:00 PM",
    rate: "₱200 / hour",
    note: "Court lights included",
  },
  {
    id: "court-rental",
    session: "Full Court Rental",
    time: "Any 1-hour slot",
    rate: "₱600 / hour",
    note: "Good for up to 4 players",
  },
  {
    id: "equipment",
    session: "Paddle & Ball Rental",
    time: "Per session",
    rate: "₱100 / set",
    note: "Optional add-on",
  },
];
