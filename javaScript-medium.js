// ----------------------------------------------------------------
//Level -3 :Medium
// ----------------------------------------------------------------

// 1-How Much is True?
function countTrue(arr) {
  const count = arr.filter((item) => {
    return item == true;
  });
  return count.length;
}
//------------------------
// 2-A Redundant Function
function redundant(str) {
  const f1 = () => {
    return str;
  };
  return f1();
}
//------------------------
// 3-Tile Teamwork Tactics
function possibleBonus(a, b) {
  return a < b && a + 6 >= b;
}
//------------------------
// 4-Right Shift by Division
function shiftToRight(x, y) {
  return Math.floor(x / 2 ** y);
}
//------------------------
// 5-Perimeters with a Catch
function perimeter(l, num) {
  if (l === "s") {
    return num * 4;
  } else if (l === "c") {
    return num * 6.28;
  }
}
//------------------------
// 6-Find Number of Digits in Number
function num_of_digits(num) {
  return Math.abs(num).toString().length;
}
//------------------------
// 7-Find Number of Digits in Number
function addName(obj, name, value) {
  obj[name] = value;
  return obj;
}
//------------------------
// 8-Derivative of a Function
function derivative(b, m) {
  return b * m ** (b - 1);
}
//------------------------
// 9-Which Generation Are You?
function generation(x, y) {
  const ancestors = {
    m: {
      "-3": "great grandfather",
      "-2": "grandfather",
      "-1": "father",
      0: "me!",
      1: "son",
      2: "grandson",
      3: "great grandson",
    },
    f: {
      "-3": "great grandmother",
      "-2": "grandmother",
      "-1": "mother",
      0: "me!",
      1: "daughter",
      2: "granddaughter",
      3: "great granddaughter",
    },
  };

  return ancestors[y][x];
}
//------------------------
// 10-Find the nth Tetrahedral Number
function tetra(n) {
  return (n * (n + 1) * (n + 2)) / 6;
}
