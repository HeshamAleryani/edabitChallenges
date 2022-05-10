// ----------------------------------------------------------------
//Level -3 :Hard
// ----------------------------------------------------------------
// 1-Seven Boom!
function sevenBoom(arr) {
  return arr.toString().includes(7) ? "Boom!" : "there is no 7 in the array";
}
//------------------------
// 2-Tower of Hanoi
function towerHanoi(discs) {
  return Math.pow(2, discs) - 1;
}
//------------------------
// 3-Number of Boomerangs
function countBoomerangs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] === arr[i + 2]) {
      count++;
    }
  }
  return count;
}
//------------------------
// 4-Oddish vs. Evenish
function oddishOrEvenish(num) {
  const nts = num.toString();
  const nta = Array.from(nts);
  const na = nta.map((i) => Number(i));
  const total = na.reduce((prev, curr) => prev + curr, 0);
  if (total % 2 === 0) {
    return "Evenish";
  }
  return "Oddish";
}
//------------------------
// 5-How Many Days Between Two Dates
function getDays(date1, date2) {
  const dn1 = date1.getTime();
  const dn2 = date2.getTime();
  const difMiliSec = Math.abs(dn1 - dn2);
  return difMiliSec / 1000 / 60 / 60 / 24;
}
//------------------------
// 6-Length of a Nested Array
function getLength(arr) {
  return arr.flat(Infinity).length;
}
//------------------------
// 7-Up the Hill, Down the Hill
function aveSpd(upTime, upSpd, downSpd) {
  return downSpd / 2;
}
//------------------------
// 8-Return the Most Expensive Piece of Jewellery
function mostExpensive(obj) {
  let max = 0;
  let maxLabel = "";
  for (let key in obj) {
    let value = obj[key];
    if (value > max) {
      max = value;
      maxLabel = key;
    }
  }
  return "The most expensive one is the " + maxLabel;
}
//------------------------
// 9-Check If the Brick Fits through the Hole
function doesBrickFit(a, b, c, w, h) {
  return a * b <= w * h || a * c <= w * h || b * c <= w * h;
}
//------------------------
// 10-Disarium Number
function isDisarium(n) {
  const nts = n.toString();
  const nta = Array.from(nts);
  const na = nta.map((i) => Number(i));
  var newArr = [];
  let p = 1;
  for (let i = 0; i < na.length; i++) {
    newArr.push(Math.pow(na[i], p));
    p++;
  }
  console.log(newArr);
  const total = newArr.reduce((prev, curr) => prev + curr, 0);
  if (total === n) {
    return true;
  }
  return false;
}
