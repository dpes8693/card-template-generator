//要先貼上 [obj]

//將tag[] 轉成 string 壓縮成要的obj
function getFil(arr) {
  let fil = arr.map((el, i, arr) => {
    tagStr = String(el.tags);
    let b = {
      class: el.class,
      name: el.name,
      tag: tagStr,
    };
    return b;
  });
  return fil;
}
//尋找class種族
function getClass(className, arr) {
  let fil = arr.map((el, i, arr) => {
    let nObj = {
      name: el.name,
      tag: el.tag,
    };
    if (el.class === className) {
      return nObj;
    }else{
        return ''
    }
  });
  fil = fil.filter(el => el);
  return fil;
}
//目標
const cards = []

//input
let INPUT = Reptile

let tagger = getClass("reptile", getFil(cards));
// console.log(tagger);

//合併陣列 主,副
function merger(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let targetObj = arr2.find((el) => el.name === arr1[i].name);
    if (targetObj) {
      arr1[i].tag = targetObj.tag;
    } else {
      console.log(arr1[i].name);
    }
  }
}

merger(INPUT, tagger);

console.log(INPUT);

// function question(obj, arr) {
//   let keyArr = Object.keys(obj);
//   for (let i = 0; i < arr.length; i++) {
//     let k = arr[i].name;
//     let tag = keyArr.find((k) => object[k] === value);
//     if (tag) {
//       arr[i].tag = tag;
//     } else {
//       console.log(k);
//     }
//   }
// }
