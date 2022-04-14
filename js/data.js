const template = {
  tag: [
    "Attack",
    "Skill",
    "Sevret",
    "Power",
    "Banish",
    "Ethereal",
    "Innate",
    "Retain",
  ],
  keyword: [],
  part: ["Eyes", "Mouth", "Ears", "Horn", "Back", "Tail"],
  class: [
    "Beast",
    "Bug",
    "Bird",
    "Plant",
    "Aquatic",
    "Reptile",
    "Mech",
    "Dawn",
    "Dusk",
  ],
};

const in_headers = [
  {
    text: "Card Name",
    align: "start",
    sortable: false,
    value: "name",
    filterable: true,
  },
  { text: "Card Class", value: "class", filterable: true },
  { text: "Cost", value: "cost", filterable: false },
  { text: "Attack", value: "attack", filterable: false },
  { text: "Shield", value: "shield", filterable: false },
  { text: "Heal", value: "heal", filterable: false },
  { text: "Card Tag", value: "tag", filterable: true },
//   { text: "Axie Part", value: "part", filterable: false },
//   { text: "Description", value: "description", filterable: false },
];

const in_cards = [
  {
    name: "Anemone",
    class: "Bug",
    part: "Back",
    cost: 24,
    attack: 159,
    shield: 4.0,
    heal: 6.0,
    tag: "Attack",
  },
  {
    name: "Babylonia",
    class: "Plant",
    part: "Horn",
    cost: 51,
    attack: 452,
    shield: 4.9,
    heal: 25.0,
    tag: "Skill",
  },
  {
    name: "Blue Moon",
    class: "Aquatic",
    part: "Back",
    cost: 65,
    attack: 518,
    shield: 7,
    heal: 26.0,
    tag: "Power",
  },
];

const in_cardClass = [
  "Beast",
  "Bug",
  "Bird",
  "Plant",
  "Aquatic",
  "Reptile",
  "Mech",
  "Dawn",
  "Dusk",
];
