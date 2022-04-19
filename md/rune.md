const axieRunes = [
    {
        id: 1,
        name: "Thick Shield",
        rarity: "common",
        class: "neutral",
        text: "Gain 10 bonus Shield from cards",
        keywords: [""],
        img: "rune_neutral_defensive_1"
    },
    {
        id: 2,
        name: "Pure Skill",
        rarity: "rare",
        class: "neutral",
        text: "Healing and Shield cards gain 15% Class Bonus",
        keywords: ["class bonus"],
        img: "rune_neutral_defensive_2"
    },
    {
        id: 3,
        name: "Mini Legion",
        rarity: "common",
        class: "neutral",
        text: "Summoned Unit have max HP + 10. Deal 2 DMG per Summon to all Enemies at the beginning of your turn",
        keywords: [""],
        img: "rune_neutral_hybrid_1"
    },
    {
        id: 4,
        name: "Pure Instict",
        rarity: "epic",
        class: "neutral",
        text: "All cards gain 15% Class Bonus.",
        keywords: ["class bonus"],
        img: "rune_neutral_hybrid_2"
    },
    {
        id: 5,
        name: "Tough Strike",
        rarity: "common",
        class: "neutral",
        text: "Non Multihit Attack cards deal 10 bonus DMG",
        keywords: [""],
        img: "rune_neutral_offensive_1"
    },
    {
        id: 6,
        name: "Pure Power",
        rarity: "Rare",
        class: "neutral",
        text: "Attack cards gain 15% Class Bonus",
        keywords: ["class bonus"],
        img: "rune_neutral_offensive_2"
    },
    {
        id: 7,
        name: "Leftover Potion",
        rarity: "common",
        class: "neutral",
        text: "Recover 4% of max HP at the end of your turn.",
        keywords: [""],
        img: "rune_neutral_utility_1"
    },
    {
        id: 8,
        name: "Shady Exchange",
        rarity: "mystic",
        class: "neutral",
        text: "Solo. Energy +1 in Even Rounds. Add 1 Daze, 1 Goo, 1 Void to your deck.",
        keywords: ["solo","round","daze","goo","void"],
        img: "rune_neutral_utility_2"
    },
    {
        id: 9,
        name: "Pangolin Scale",
        rarity: "rare",
        class: "beast",
        text: "Cannot gain Shield. Take 25% less DMG.",
        keywords: [""],
        img: "rune_beast_defensive_1"
    },
    {
        id: 10,
        name: "Dominant Predator",
        rarity: "epic",
        class: "beast",
        text: "Deal 20% more DMG against Bleeding Enemies Take 10% less DMG from Bleeding Enemies",
        keywords: [""],
        img: "rune_beast_hybrid_1"
    },
    {
        id: 11,
        name: "Reckless Hunter",
        rarity: "rare",
        class: "beast",
        text: "Deal 20% more DMG. Take 10% more DMG.",
        keywords: [""],
        img: "rune_beast_offensive_1"
    },
    {
        id: 12,
        name: "Endless Anger",
        rarity: "mystic",
        class: "beast",
        text: "Gain 3 Rage when your turn starts. Each Rage grant 1 bonus DMG.",
        keywords: ["rage","rage"],
        img: "rune_beast_utility_1"
    },
    {
        id: 13,
        name: "Vault Builder",
        rarity: "rare",
        class: "bug",
        text: "When your turn ends, gain Shield equal to (3 x the number of cards in your Discard Pile).",
        keywords: [""],
        img: "rune_bug_defensive_1"
    },
    {
        id: 14,
        name: "Shield Leecher",
        rarity: "rare",
        class: "bug",
        text: "When your turn starts, steal 50% Shield from the Enemy with highest Shield.",
        keywords: [""],
        img: "rune_bug_hybrid_1"
    },
    {
        id: 15,
        name: "Sturdy Fighter",
        rarity: "mystic",
        class: "bug",
        text: "Non-Multihit Attack cards deal bonus DMG equal to current Shield.",
        keywords: [""],
        img: "rune_bug_offensive_1"
    },
    {
        id: 16,
        name: "Collect and Protect",
        rarity: "epic",
        class: "bug",
        text: "In odd Rounds, draw 1 Additional Card when your turn starts. In even Rounds, gain 30 Shield when your turn starts.",
        keywords: ["round"],
        img: "rune_bug_utility_1"
    },
    {
        id: 17,
        name: "Venom Born",
        rarity: "rare",
        class: "bird",
        text: "Poison on this Axie grants (Healing 1 HP per stack) instead of HP loss.",
        keywords: ["poison"],
        img: "rune_bird_defensive_1"
    },
    {
        id: 18,
        name: "Raven's Tactic",
        rarity: "epic",
        class: "bird",
        text: "Deal 20% bonus DMG if HP is above 50%. Take 20% less DMG if HP is below 50%.",
        keywords: [""],
        img: "rune_bird_hybrid_1"
    },
    {
        id: 19,
        name: "Energy Guru",
        rarity: "rare",
        class: "bird",
        text: "Attack cards also deal 5 DMG per Energy Cost to all Enemies.",
        keywords: [""],
        img: "rune_bird_offensive_1"
    },
    {
        id: 20,
        name: "Feather Descend",
        rarity: "mystic",
        class: "bird",
        text: "When your turn starts, grant 2 Feather to your team.",
        keywords: ["feather"],
        img: "rune_bird_utility_1"
    },
    {
        id: 21,
        name: "Gaia's Embrace",
        rarity: "mystic",
        class: "plant",
        text: "Shielding cards of this Axie also restore HP equal to 100% of Shield gained but grant 25% less Shield",
        keywords: [""],
        img: "rune_plant_defensive_1"
    },
    {
        id: 22,
        name: "Rise And Ruin",
        rarity: "epic",
        class: "plant",
        text: "Add 1 Forest Breath and 1 Forest Wrath to your deck.",
        keywords: ["forest breath","forest wrath"],
        img: "rune_plant_hybrid_1"
    },
    {
        id: 23,
        name: "Miracle Leaf",
        rarity: "rare",
        class: "plant",
        text: "Start Battle with 3 Leaf. Non-Multihit Attacks consume 1 Leaf and deal 15 bonus DMG",
        keywords: ["leaf","leaf"],
        img: "rune_plant_offensive_1"
    },
    {
        id: 24,
        name: "Healing Pulse",
        rarity: "rare",
        class: "plant",
        text: "All teammates regen 8 HP when your turn ends. Increase Healing card effect by 20%.",
        keywords: [""],
        img: "rune_plant_utility_1"
    },
    {
        id: 25,
        name: "Calcium Armor",
        rarity: "rare",
        class: "aquatic",
        text: "Axie max HP +30 At the beginning of your turn, gain Shield equal to 3% of max HP.",
        keywords: [""],
        img: "rune_aquatic_defensive_1"
    },
    {
        id: 26,
        name: "Bloodlust",
        rarity: "epic",
        class: "aquatic",
        text: "Non-Multihit Attacks Steal 15 HP. Multihit Attacks Steal 4 HP per hit.",
        keywords: ["steal","steal"],
        img: "rune_aquatic_hybrid_1"
    },
    {
        id: 27,
        name: "Hearty Warrior",
        rarity: "rare",
        class: "aquatic",
        text: "Axie max HP +30 Attack cards deal bonus DMG equal to 3% of remaining HP.",
        keywords: [""],
        img: "rune_aquatic_offensive_1"
    },
    {
        id: 28,
        name: "Heart of Ocean",
        rarity: "mystic",
        class: "aquatic",
        text: "Increase all Axies' max HP by 75.",
        keywords: [""],
        img: "rune_aquatic_utility_1"
    },
    {
        id: 29,
        name: "Delayed Protection",
        rarity: "rare",
        class: "reptile",
        text: "When your turn starts, gain 12 Shield for each attack this Axie took in the previous turn.",
        keywords: [""],
        img: "rune_reptile_defensive_1"
    },
    {
        id: 30,
        name: "Poison Touch",
        rarity: "epic",
        class: "reptile",
        text: "Apply 1 Poison to Attacker. Take 20% less DMG from poisoned enemies.",
        keywords: ["poison"],
        img: "rune_reptile_hybrid_1"
    },
    {
        id: 31,
        name: "Venom Master",
        rarity: "rare",
        class: "reptile",
        text: "Attack cards apply 1 additional Poison. Non-Multihit Attacks deal 1 bonus DMG per 2 poison on target.",
        keywords: ["poison","poison"],
        img: "rune_reptile_offensive_1"
    },
    {
        id: 32,
        name: "Regenerator",
        rarity: "mystic",
        class: "reptile",
        text: "When your turn start, Cleanse 2 random debuffs if HP is full or recover 10% of max HP if HP isn't full.",
        keywords: ["cleanse"],
        img: "rune_reptile_utility_1"
    },
    {
        id: 33,
        name: "Last Stand",
        rarity: "rare",
        class: "mech",
        text: "When taking a fatal hit, survive with 1 HP untill end of turn (activate 1 time per battle). After that, apply an irremovable Heal Block.",
        keywords: ["heal block"],
        img: "rune_mech_defensive_1"
    },
    {
        id: 34,
        name: "Adaptive Program",
        rarity: "epic",
        class: "mech",
        text: "Gain 10 bonus Shield from cards. Gain 3 Damage Boost whenever using a Shield card.",
        keywords: ["damage boost"],
        img: "rune_mech_hybrid_1"
    },
    {
        id: 35,
        name: "Zap Armor",
        rarity: "rare",
        class: "mech",
        text: "Deal 20% more DMG if this Axie has Shield",
        keywords: [""],
        img: "rune_mech_offensive_1"
    },
    {
        id: 36,
        name: "Shield Backup",
        rarity: "mystic",
        class: "mech",
        text: "This Axie's Shield isn't removed when your enemy's turn ends.",
        keywords: [""],
        img: "rune_mech_utility_1"
    },
    {
        id: 37,
        name: "Arcane Protection",
        rarity: "rare",
        class: "dawn",
        text: "Take 5% less DMG per Buff on this Axie (capped at 20%).",
        keywords: [""],
        img: "rune_dawn_defensive_1"
    },
    {
        id: 38,
        name: "Heaven's Echoes",
        rarity: "epic",
        class: "dawn",
        text: "Your allies gain 1 Damage Boost whenever this Axie attacks. Your allies gain 8 Shield whenever this Axie uses a Skill.",
        keywords: ["damage boost"],
        img: "rune_dawn_hybrid_1"
    },
    {
        id: 39,
        name: "Celestial Might",
        rarity: "rare",
        class: "dawn",
        text: "Deal 5% more DMG per Buff on this Axie (capped at 20%).",
        keywords: [""],
        img: "rune_dawn_offensive_1"
    },
    {
        id: 40,
        name: "Holy Prayer",
        rarity: "mystic",
        class: "dawn",
        text: "Solo. When your turn starts, remove 1 Curse in your deck. Heal all teammates for 30 HP when successfully removing a Curse.",
        keywords: ["solo"],
        img: "rune_dawn_utility_1"
    },
    {
        id: 41,
        name: "Wicked Ward",
        rarity: "rare",
        class: "dusk",
        text: "Gain 15 Shield whenever you play a Curse card.",
        keywords: [""],
        img: "rune_dusk_defensive_1"
    },
    {
        id: 42,
        name: "Malediction",
        rarity: "epic",
        class: "dusk",
        text: "Deal 10% more DMG against debuffed Enemies. Take 20% less DMG from debuffed Enemies",
        keywords: [""],
        img: "rune_dusk_hybrid_1"
    },
    {
        id: 43,
        name: "Cursed Ritual",
        rarity: "rare",
        class: "dusk",
        text: "Attcks deal 3 bonus DMG per Curse card in your deck (capped at 15 DMG).",
        keywords: [""],
        img: "rune_dusk_offensive_1"
    },
    {
        id: 44,
        name: "Gloomy Dice",
        rarity: "mystic",
        class: "dusk",
        text: "In Odd Rounds, apply Hex to all enemies for 2 turns at the start of your turn. In Even Rounds, apply Fear to all enemies for 2 turns at the start of your turn.",
        keywords: ["round","hex","round","fear"],
        img: "rune_dusk_utility_1"
    }
];