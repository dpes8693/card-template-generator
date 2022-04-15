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

let sortFunc = function mixSort(_a, _b) {
  const reg = /[a-zA-Z0-9]/;
  // 比對僅針對字串，數字參與對比會導致對比的字串轉為number型別，變成NaN
  const a = _a.toString();
  const b = _b.toString();
  // 比對0號位的原因是字串中有可能出現中英文混合的情況，這種僅按首位排序即可
  if (reg.test(a[0]) || reg.test(b[0])) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  } else {
    return a.localeCompare(b);
  }
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
  { text: "Cost", value: "cost", filterable: false, sort: sortFunc },
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
    cost: 0,
    attack: 159,
    shield: 4.0,
    heal: 6.0,
    tag: "Attack",
  },
  {
    name: "Babylonia",
    class: "Plant",
    part: "Horn",
    cost: "",
    attack: 452,
    shield: 4.9,
    heal: 25.0,
    tag: "Skill",
  },
  {
    name: "Blue Moon",
    class: "Aquatic",
    part: "Back",
    cost: 1,
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
