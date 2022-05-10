// ----------------------------------------------------------------
//Level -2 :EASY
// ----------------------------------------------------------------

//1-Bitwise Operations:
function bitwiseAND(n1, n2) {
  const bitAnd = (n1 & n2).toString(2);
  return parseInt(bitAnd, 2);
}

function bitwiseOR(n1, n2) {
  const bitAnd = (n1 | n2).toString(2);
  return parseInt(bitAnd, 2);
}

function bitwiseXOR(n1, n2) {
  const bitAnd = (n1 ^ n2).toString(2);
  return parseInt(bitAnd, 2);
}

//------------------------
// 2-Add up the Numbers from a Single Number
function addUp(num) {
  return (num * (num + 1)) / 2;
}
//------------------------
// 3-Matchstick Houses
function matchHouses(step) {
  return step > 0 ? (6 - 1) * step + 1 : 0;
}
//------------------------
// 4-Left Shift by Powers of Two
function shiftToLeft(x, y) {
  const a = y < 0 ? y * -1 : y;
  return x * 2 ** a;
}
//------------------------
// 5-Find the Smallest and Biggest Numbers
function minMax(arr) {
  const findMin = Math.min(...arr);
  const findMax = Math.max(...arr);
  return [findMin, findMax];
}

//------------------------
// 6-Is it Time for Milk and Cookies?
function timeForMilkAndCookies(date) {
  var month = date.getMonth();
  var day = date.getDate();

  return month == 11 && day == 24;
}
//------------------------
// 7-Which Function Returns the Larger Number?
function whichIsLarger(f, g) {
  if (f() > g()) {
    return "f";
  } else if (f() < g()) {
    return "g";
  } else {
    return "neither";
  }
}
//------------------------
// 8-Find the Amount of Potatoes
function potatoes(str) {
  var count = str.match(/potato/g).length;
  return count;
}

//------------------------
// 9-Tuck in Array
function tuckIn(arr1, arr2) {
  return arr1.concat(arr2);
}
//------------------------
// 10-Convert a Number to Base-2
function bitwiseAND(n1) {
  const bitAnd = n1.toString(2);
  return bitAnd;
}
