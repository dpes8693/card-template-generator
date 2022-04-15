# card-template-generator

製作卡牌圖鑑模板格式

## 採坑 
### 0414抓不到資料
headers: (this.headers = headers),

```js

0413 update
0412 add initial
{
    "id": 1,
    "set",
    "mode",
    "img",
    "relationId",
    "number": [
        "attack",
        "defense",
        "cost",
    ],
    "string": {
        "single": [
            "name",
            "description",
        ],
        "multiple": [
            "tag",
            "part",
            "class",
            "keyword",
        ]
    },
}
```

innate 天賦
banish

===
class bonus ATK DEF HEAL

taunt 嘲諷 
bleed 流血 -15/卡
weak  -20% ATK
fragile 脆弱的 玻璃 -20%DEF
doubt 懷疑 -20% HEAL
vulnerable 益傷 +20%ATK 
Cleanser 清除負面

sleep 不能用任何卡 被攻擊後解除!
stunned 不能用任何卡
Fear 用ATK卡 洗垃圾
;Hex 用非攻擊洗垃圾
;Stealth 潛行(不會被指定 打到) 用攻擊暴露
Disarmed 不能 攻擊卡!
Silence  只能用 攻擊卡!


bubble 泡泡 max:3 轉成 Bomb攻擊造成20全體傷害反彈
bomb 攻擊打20 All
feather 羽毛 2ATK 2HEAl //非多重 max:10 攻擊時花費全部
Leaf +5 hp max:5
rage +2atk max:10  +1能量!!
poison 毒 -3HP max:30
Shield Boost 1 無限 shield
Attack Boost 1 無限 sword
HEAL   Boost 1 無限 healbox

;; Heal block
;;meditate 冥想

;dispel remove 1 buff max:5
;steal 偷取X
===
背單字:innate,vulnerable,stunned,rage

keyword:
[Ethereal Innate Banish Retain]
[
keyword
"void","daze","jinx","goo","burn","blackmail","confused",
"mandarine","strawberry","pure water","pacu","lumber shield",
]
[
"shuffle",
"summon"
"if",
add:竹子,鳥,Nut
動物系列 鳥樹菇苗
狀態系列
]
名稱不理他 用遊戲內建即可....或是ctrl+f

developed by Vietnamese studio Sky Mavis,known for its in-game economy

    "id": 1,
            "tag": ["Attack", "Skill", "Sevret", "Power", "Banish", "Ethereal", "Innate", "Retain"], 
            "keyword": [ ],
            "part": ["Eyes", "Mouth", "Ears", "Horn", "Back", "Tail"],

            "class": ["Beast", "Bug", "Bird", "Plant", "Aquatic", "Reptile", ],
            "Mech", "Dawn", "Dusk"

卡名分六批
            