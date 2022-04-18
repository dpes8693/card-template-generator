//32張 2022/04/17
//null 7
//o 39
//x 0 [Concentrate,Passion,Feather Dagger,Big Sister,Paper Wing,Rubber Duckling,Lil Bro]
//id沒有按官方順序
//39 all
let Bird = [
  {
    name: "Balloon",
    part: "Back",
    cost: 1,
    attack: 60,
    shield: "-",
    heal: "-",
    cardEffect: " Apply Fear for 4 turns.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:1
  },
  {
    name: "Cloud",
    part: "Tail",
    cost: 1,
    attack: 70,
    shield: "-",
    heal: "-",
    cardEffect: " This attack targets the frontmost non-summoned enemy.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:2
  },

  {
    name: "Cuckoo",
    part: "Horn",
    cost: 1,
    attack: "-",
    shield: "-",
    heal: "-",
    cardEffect:
      " Target an ally. Remove Sleep. The next attack of the target his turn deals 50 more DMG.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:3
  },
  {
    name: "Cupid",
    part: "Back",
    cost: 1,
    attack: 60,
    shield: "-",
    heal: "-",
    cardEffect: " Apply Bleed for 4 turns.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:4
  },
  {
    name: "Curly",
    part: "Ear",
    cost: 1,
    attack: 65,
    shield: "-",
    heal: "-",
    cardEffect: " Deal 25% more DMG to shield.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:5
  },
  {
    name: "Doubletalk",
    part: "Mouth",
    cost: 1,
    attack: 65,
    shield: "-",
    heal: "-",
    cardEffect: " if Initial, apply Sleep for 4 turns.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:6
  },
  {
    name: "Feather Fan",
    part: "Tail",
    cost: 2,
    attack: 35,
    shield: "-",
    heal: "-",
    cardEffect:
      " Randomly deal 4 hits. Your team gains 1 Feather per enemy hit.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:7
  },
  {
    name: "Feather Spear",
    part: "Horn",
    cost: 1,
    attack: 65,
    shield: "-",
    heal: "-",
    cardEffect: " Deal 20 more DMG for each Spear card used this turn.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:8
  },
  {
    name: "Granma's Fan",
    part: "Tail",
    cost: 1,
    attack: 25,
    shield: "-",
    heal: "-",
    cardEffect: " Innate. attack all enemies. Apply Vulnerable for 4 turns.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:9
  },
  {
    name: "Kestrel",
    part: "Horn",
    cost: 1,
    attack: 50,
    shield: "-",
    heal: "-",
    cardEffect: " Apply Disarmed for 4 turns.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:10
  },
  {
    name: "Kingfisher",
    part: "Back",
    cost: 1,
    attack: "-",
    shield: "-",
    heal: "-",
    cardEffect:
      " Target any ally. Next attack against the target is reflected for 85 DMG.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:11
  },
  {
    name: "Lil Bro",
    part: "Back",
    cost: 1,
    attack: 30,
    shield: "-",
    heal: "-",
    cardEffect:
      " Innate. Randomly deal 2 hits. Discard 1 copy of Feather Dagger per Enemy hit.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:12
  },
  {
    name: "Little Owl ear",
    part: "Ear",
    cost: 1,
    attack: 60,
    shield: "-",
    heal: "-",
    cardEffect: " All Little Owl cards of this Axie gain 6 DMG this battle.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:13
  },
  {
    name: "Little Owl eyes",
    part: "Eyes",
    cost: 1,
    attack: 60,
    shield: "-",
    heal: "-",
    cardEffect: " All Little Owl cards of this Axie gain 6 DMG this battle.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:14
  },
  {
    name: "Little Owl mouth",
    part: "Mouth",
    cost: 1,
    attack: 60,
    shield: "-",
    heal: "-",
    cardEffect: " All Little Owl cards of this Axie gain 6 DMG this battle.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:15
  },
  {
    name: "Lucas",
    part: "Eyes",
    cost: 0,
    attack: "-",
    shield: "-",
    heal: "-",
    cardEffect: " Put 1 Bird card from your draw pile into your hand. Banish.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:16
  },
  {
    name: "Peace Maker e",
    part: "Ear",
    cost: 1,
    attack: 60,
    shield: "-",
    heal: "-",
    cardEffect:
      " Apply Weak for 2 turns. If target previously has Weak, deal 15 more DMG.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:17
  },
  {
    name: "Peace Maker m",
    part: "Mouth",
    cost: 1,
    attack: 60,
    shield: "-",
    heal: "-",
    cardEffect:
      " Apply Weak for 2 turns. If target previously has Weak, deal 15 more DMG.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:18
  },

  {
    name: "Pink Cheek",
    part: "Ear",
    cost: 0,
    attack: "-",
    shield: "-",
    heal: "-",
    cardEffect: " Discard up to 2 cards then draw that many. Banish.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:19
  },
  {
    name: "Post Fight",
    part: "Tail",
    cost: 1,
    attack: 100,
    shield: "-",
    heal: "-",
    cardEffect: " This Axie loses 35 HP.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:20
  },
  {
    name: "Raven",
    part: "Back",
    cost: 1,
    attack: 60,
    shield: "-",
    heal: "-",
    cardEffect: " Shuffle 1 Jinx into your opponent's discard pile.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:21
  },
  {
    name: "Risky Bird",
    part: "Ear",
    cost: 1,
    attack: 90,
    shield: "-",
    heal: "-",
    cardEffect: " Apply Weak to this Axie for 2 turns.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:22
  },
  {
    name: "The Last One",
    part: "Tail",
    cost: 1,
    attack: 70,
    shield: "-",
    heal: "-",
    cardEffect: " Deal 20 more DMG if this is the only card in your hand.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:23
  },
  {
    name: "Tri Feather",
    part: "Back",
    cost: 1,
    attack: 25,
    shield: "-",
    heal: "-",
    cardEffect: " attack all enemies.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:24
  },
  {
    name: "Trump",
    part: "Horn",
    cost: 1,
    attack: 65,
    shield: "-",
    heal: "-",
    cardEffect: " Deal 20 more DMG for each Trump card used this turn.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:25
  },
//
  {
    name: "Concentrate",
    part: "Eyes",
    cost: 2,
    attack: "-",
    shield: "-",
    heal: "-",
    cardEffect: " All Multihit attack cards of this Axie gain +18 DMG.",
    class: "Bird",
    tag: "Power",
    img: "o",
    keyword: "-",
    id:26
  },
  {
    name: "Passion",
    part: "Eyes",
    cost: 0,
    attack: "-",
    shield: 25,
    heal: "-",
    cardEffect: " Innate. Draw 2 cards. Banish.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:27
  },
  {
    name: "Feather Dagger",
    part: "Mouth",
    cost: 0,
    attack: 10,
    shield: "-",
    heal: "-",
    cardEffect: " Deal 2 hits.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:28
  },
  {
    name: "Big Sister",
    part: "Horn",
    cost: 0,
    attack: "-",
    shield: "-",
    heal: "-",
    cardEffect: " Discard 1 copy of Lil Bro.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:29
  },
  {
    name: "Paper Wing",
    part: "Back",
    cost: 1,
    attack: 50,
    shield: "-",
    heal: "-",
    cardEffect: " Retain. Deal 9 bonus DMG per card in your hand.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:30
  },
  {
    name: "Rubber Duckling",
    part: "Back",
    cost: 0,
    attack: "-",
    shield: "-",
    heal: 5,
    cardEffect:
      " Retain. heal any Ally. Gain 1 Energy. If retained, +15 heal Bonus (up to +45). Banish.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:31
  },
  {
    name: "Pigeon Post",
    part: "Back",
    cost: 1,
    attack: 55,
    shield: "-",
    heal: "-",
    cardEffect: " Add 1 Blackmail to Opponent's hand.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:32
  },
  // not in 330~390 x7
  {
    name: "Early Bird",
    part: "Ear",
    cost: 1,
    attack: 65,
    shield: "-",
    heal: "-",
    cardEffect: " If Initial, draw 1 card.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:330
  },
  {
    name: "Eggshell",
    part: "Horn",
    cost: 1,
    attack: 75,
    shield: "-",
    heal: "-",
    cardEffect: " Apply Taunt to this Axie for 2 turns.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:340
  },
  {
    name: "Hungry Bird",
    part: "Mouth",
    cost: 1,
    attack: 65,
    shield: "-",
    heal: "-",
    cardEffect: " If Initial, heal 15 HP.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:350
  },
  {
    name: "Mavis",
    part: "Eyes",
    cost: 1,
    attack: "-",
    shield: "-",
    heal: "-",
    cardEffect: " Summon 1 Mavis.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:360
  },
  {
    name: "Robin",
    part: "Eyes",
    cost: 1,
    attack: "-",
    shield: "-",
    heal: "-",
    cardEffect: " Summon a Little Robin.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:370
  },
  {
    name: "Swallow",
    part: "Tail",
    cost: 1,
    attack: 70,
    shield: "-",
    heal: "-",
    cardEffect: " If Initial, deal 15 more DMG.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:380
  },
  {
    name: "Wing Horn",
    part: "Horn",
    cost: 1,
    attack: 65,
    shield: "-",
    heal: "-",
    cardEffect: " If Initial, this attack targets the second frontmost enemy.",
    class: "Bird",
    tag: "",
    img: "o",
    keyword: "-",
    id:390
  },
];
