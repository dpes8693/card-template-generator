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
  //Card Tag
  {
    text: "",
    value: "tag",
    filterable: true,
    width: "0",
    align: "",
    sortable: false,
  },
  //part
  {
    text: "",
    value: "part",
    filterable: true,
    sortable: false,
    width: "0",
    align: "",
  },
  {
    text: "Effect",
    value: "cardEffect",
    filterable: true,
    width: "34%",
    align: "",
  },
  { text: "Cost", value: "cost", filterable: false, width: "10%", align: "center" },
  {
    text: "Attack",
    value: "attack",
    filterable: false,
    width: "9%",
    align: "center",
  },
  {
    text: "Shield",
    value: "shield",
    filterable: false,
    width: "9%",
    align: "center",
  },
  { text: "Heal", value: "heal", filterable: false, width: "9%", align: "" },
  { text: "Class", value: "class", filterable: true, width: "12%", align: "center" },
];
//一定要 否則沒img
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
iterator(Aquatic);
iterator(Beast);
iterator(Bird);
iterator(Bug);
iterator(Plant);
iterator(Reptile);
let in_cards = [...Beast, ...Aquatic, ...Plant, ...Bird, ...Bug, ...Reptile];

//
const in_tags = {
  onTag: {
    skill: "This is a utility Card.",
    attack: "This Card does damage.",
    power: "Enhance this Axie's abilities in future rounds.",
    secret: "This Card adds an effect that comes into play next turn.",
    retain: "Do not discard this Card at the end of your turn.",
    banish: "Remove the Card from your deck until the end.",
    ethereal: "Banish after the turn.",
    unplayable: "This Card can not be played.",
    innate: "Start each battle with this Card in your hand.",
  },
  unTag: {
    initial: "The first card played in a turn.",
    scry: "Look at the top Cards of your draw pile. You may discard any of them.",
    cleanse: "Remove debuffs from target, up to 5 stacks.",
    dispel: "Remove 1 buff from target, up to 5 stacks.",
    steal: "Deal pure DMG and gain HP.",
    solo: "Only 1 axie per team can have this effect active.",
    classBonus:
      "Increase ATK/Heal/Shield of abilities if used by an axie of the same class.",
  },
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

const cardType = ["Secret", "Attack", "Power", "Skill"];
//1. tag
const tagKeyword = [
  "Scry",
  "Cleanse",
  "Dispel",
  "Steal",
  // "Solo",
  // "bonus",
  "Retain",
  "Banish",
  "Ethereal",
  // "unplayable",
  "Innate",
  "Initial"
];
//2. status
const statusKeyword = [
  "Taunt",
  "Damage Boost",
  "healing Boost",
  "shield Boost",
  // "bubble Bomb",
  // "fury",
  "Bubble",
  "Cleanser",
  "Meditate",
  "Feather",
  "Leaf",
  "Rage",
  "Stealth",
  "Bleed",
  "Disarmed",
  "Fear",
  "Poison",
  "Sleep",
  "Vulnerable",
  "Death Mark",
  "Doubt",
  "Fragile",
  "Hex",
  "Stunned",
  "Weak",
  // "heal Block",
  // "silence",
];
//3. other addition cards
let aditonCard = [
  "Blackmail",
  "Pure Water",
  "Strawberry",
  "Mandarines",
  "Lumber Shield",
  "Pacu",
  "FEATHER-DAGGER",
  "Lil Bro"
]
//4. Summon
let summon = []

//5. my opinion
// [shuffle,Take,draw,if,more DMG,team,cap,all enemies,random,is attacked,frontmost,furthest,restore,Apply,Multihit Attack,Attacker,gain,Remove,reflected,loss to]
const in_related = [...tagKeyword, ...statusKeyword];
