export const BASE_URL = "http://localhost:3000";
export const BE_URL = "http://localhost:4000";

export const EVENTS = [
  {
    name: "SPORTS",
    event: [
      { type: "Football", subEvent: ["5a side", "11a side", "Kickabout"] },
      { type: "Cricket", subEvent: ["20/20", "50 overs"] },
      { type: "Tennis", subEvent: ["Singles", "Doubles"] },
    ],
  },
  {
    name: "FAMILY",
    event: [
      {
        type: "Newborn",
        subEvent: ["Parent & Baby Class", "Storytime"],
      },
      {
        type: "Baby",
        subEvent: ["Parent & Baby Class", "Singalong", "Softplay", "Storytime"],
      },
      {
        type: "Toddler",
        subEvent: [
          "Parent & Baby Class",
          "Singalong",
          "Softplay",
          "Storytime",
          "Swimming",
        ],
      },
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
