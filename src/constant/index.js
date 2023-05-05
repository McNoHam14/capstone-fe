export const BASE_URL = "http://localhost:3000";
export const BE_URL = "http://localhost:4000";

export const EVENTS = [
  {
    name: "SPORT",
    event: [
      { type: "Football", subEvent: ["5a side", "11a side"] },
      { type: "Cricket", subEvent: ["20/20", "50 overs"] },
      { type: "Tennis", subEvent: ["Singles", "Doubles"] },
    ],
  },

  {
    name: "FAMILY",
    event: [
      { type: "Parent & Baby Class", subEvent: ["Newborn", "Baby", "Toddler"] },
      { type: "Singalong", subEvent: ["English", "Welsh"] },
    ],
  },

  {
    name: "CULTURE",
    event: [
      { type: "Play", subEvent: ["Drama", "Comedy"] },
      { type: "Live Music", subEvent: ["Band", "Singer"] },
    ],
  },

  {
    name: "FOOD/DRINK",
    event: [
      { type: "Pizza", subEvent: ["New menu"] },
      { type: "French", subEvent: ["Wine tasting", "5 course meal"] },
    ],
  },
];
