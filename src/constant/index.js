export const BASE_URL = "http://localhost:3000";
export const BE_URL = "http://localhost:4000";

export const EVENTS = [
  {
    name: "SPORTS",
    event: [
      {
        type: "Football",
        subEvent: [
          { name: "5a side", limit: 10 },
          { name: "11a side", limit: 22 },
          { name: "Kickabout", limit: null },
        ],
      },
      {
        type: "Cricket",
        subEvent: [
          { name: "20/20", limit: 22 },
          { name: "50 overs", limit: 22 },
        ],
      },
      {
        type: "Tennis",
        subEvent: [
          { name: "Singles", limit: 2 },
          { name: "Doubles", limit: 4 },
        ],
      },
    ],
  },
  {
    name: "FAMILY",
    event: [
      {
        type: "Newborn",
        subEvent: [
          { name: "Parent & Baby Class", limit: 14 },
          { name: "Storytime", limit: 25 },
        ],
      },
      {
        type: "Baby",
        subEvent: [
          { name: "Parent & Baby Class", limit: 14 },
          { name: "Storytime", limit: 25 },
          { name: "Singalong", limit: 12 },
          { name: "Softplay", limit: 30 },
        ],
      },
      {
        type: "Toddler",
        subEvent: [
          { name: "Parent & Baby Class", limit: 14 },
          { name: "Storytime", limit: 25 },
          { name: "Singalong", limit: 12 },
          { name: "Softplay", limit: 30 },
          { name: "Swimming", limit: 8 },
        ],
      },
    ],
  },
  {
    name: "CULTURE",
    event: [
      {
        type: "Play",
        subEvent: [
          { name: "Drama", limit: 45 },
          { name: "Comedy", limit: 30 },
        ],
      },
      {
        type: "Live Music",
        subEvent: [
          { name: "Singer", limit: 120 },
          { name: "Band", limit: 100 },
        ],
      },
    ],
  },
  {
    name: "FOOD/DRINK",
    event: [
      {
        type: "Pizza",
        subEvent: [{ name: "New Menu", limit: 60 }],
      },
      {
        type: "French",
        subEvent: [
          { name: "Wine Tasting", limit: 35 },
          { name: "5 course meal", limit: 25 },
        ],
      },
    ],
  },
];
