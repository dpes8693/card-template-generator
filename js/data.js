const template = {
  img: [],
  keyword: [],
  tag: [
    "attack",
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
const baseUrl = "./img/en/cards";
const format = ".png";

const in_cardClass = [
  "Beast",
  "Aquatic",
  "Plant",
  "Bird",
  "Bug",
  "Reptile",
  // "Mech",
  // "Dawn",
  // "Dusk",
];

const in_headers = [
  {
    text: "Card Name",
    align: "start",
    sortable: true,
    value: "name",
    filterable: true,
    width: "15%",
    align: "",
  },
  {
    text: "Effect",
    value: "cardEffect",
    filterable: true,
    width: "35%",
    align: "",
  },
  { text: "Cost", value: "cost", filterable: true, width: "10%", align: "" },
  {
    text: "Attack",
    value: "attack",
    filterable: false,
    width: "9%",
    align: "",
  },
  {
    text: "Shield",
    value: "shield",
    filterable: false,
    width: "9%",
    align: "",
  },
  { text: "Heal", value: "heal", filterable: false, width: "9%", align: "" },
  // { text: "Card Tag", value: "tag", filterable: true },
  { text: "Class", value: "class", filterable: true, width: "11%", align: "" },
  {
    text: "",
    value: "part",
    filterable: true,
    sortable: false,
    width: "1%",
    align: "",
  },
];

iterator(Aquatic);
iterator(Beast);
iterator(Bird);
iterator(Bug);
iterator(Plant);
iterator(Reptile);

let in_cards = [...Beast, ...Aquatic, ...Plant, ...Bird, ...Bug, ...Reptile];

function iterator(arr) {
  arr.forEach((el) => {
    if (el.img[0] === "x") {
      el.img = `${baseUrl}/no card${format}`;
    } else {
      el.img = `${baseUrl}/${el.class.toLowerCase()}/${el.name.toLowerCase()}${format}`;
    }
    el.id = el.name + el.id;
  });
}

//
const in_tags = {
  scry: "Look at the top cards of your draw pile. You may discard any of them.",
  innate: "Start each battle with this card in your hand.",
  cleanse: "Remove debuffs from target, up to 5 stacks.",
  dispel: "Remove 1 buff from target, up to 5 stacks.",
  steal: "Deal pure DMG and gain HP.",
  retain: "Do not discard this card at the end of your turn.",
  unplayable: "This card can not be play.",
  ethereal: "banish after the turn.",
  // solo: "Only 1 axie per team can have this effect active.",
  classBonus:
    "Increase ATK/Heal/Shield of abilities if used by an axie of the same class.",
};

const in_statuses = {
  buff: {
    bubble:
      "Block 5 DMG/stack. Max: 3 stack. Turn into Bubble Bomb upon reaching 3 stacks.",
    cleanser: "Each stack negates 1 debuff applied on the target.",
    feather:
      "When Axie does an attack, consume all Feather stacks to deal 2 bonus DMG per stack and heal 2 HP per stack. Max: 10 stack.",
    healingBoost:
      "Increase healing card effects to this unit by 1 HP per stack.",
    meditate:
      "Meditate for 2 turns. If attacked while Meditating, awake and gain 3 Rage. If not, Cleanse 1 debuff and gain 1 Energy after effect ends.",
    shieldBoost:
      "The Target has Shield gained from cards increased by 1 per stack.",
    bubbleBomb:
      "Next attack explodes Bubble Bomb and deals 20 DMG to all Enemies.",
    damageBoost: "The target has Attack DMG increased by 1 per stack.",
    fury: "Gain 1 Energy when transforms. Deal double damage and last for 1 turn.",
    leaf: "Regen 5 HP at the end of your turn. Max stack: 5.",
    rage: "DMG is increased by 2 per Rage stack. Transform into Fury Form when reaches 10 Rage stack.",
    stealth:
      "Stealth\tThe target cannot be targeted directly. If it uses a card, remove Stealth.",
  },
  debuff: {
    bleed: "Whenever the target uses a card, it loses 15HP.",
    disarmed: "The target cannot use Attack cards.",
    fear: "Whenever the target uses an Attack card, shuffle a Confused into its draw pile.",
    healBlock: "The target cannot be healed.",
    poison:
      "At the start of its turn, the target loses 3 HP per stack and stacks are reduced by 1. Max: 30 stacks.",
    sleep: "The target cannot use cards. If it is attacked, remove Sleep.",
    vulnerable: "The target receives 20% more attack damage.",
    deathMark:
      "Whenever the opponent plays an Attack Card, the target take 13 DMG per Energy spent.",
    doubt: "The target gains 20% less HP from Healing.",
    fragile: "The target gains 20% less Shield from cards.",
    hex: "Whenever the target uses a non-Attack card, shuffle a Confused into its draw pile.",
    silence: "The target cannot use non-Attack cards.",
    stunned: "The target cannot perform any action.",
    weak: "The target deals 20% less attack damage.",
  },
  neutral: {
    taunt: "The target: is always targeted by the enemy's attack abilities.",
  },
};
