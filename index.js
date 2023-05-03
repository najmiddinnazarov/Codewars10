// #8kyu Training JS #1: create your first JS function and print "Hello World!"
/* function helloWorld() {
  var str = "Hello World!";
  console.log(str);
}
 */

// #8kyu Training JS #2: Basic data types--Number
/* let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

function equal1() {
  let a = v1,
    b = v1;
  return a + b;
}
function equal2() {
  let a = v3,
    b = v1;
  return a - b;
}
function equal3() {
  let a = v1,
    b = v5;
  return a * b;
}
function equal4() {
  let a = v4,
    b = v5;
  return a / b;
}
function equal5() {
  let a = v6,
    b = v3;
  return a % b;
}
 */

// #8kyu Training JS #3: Basic data types--String
/* var a1 = "A",
  a2 = "a",
  b1 = "B",
  b2 = "b",
  c1 = "C",
  c2 = "c",
  d1 = "D",
  d2 = "d",
  e1 = "E",
  e2 = "e",
  n1 = "N",
  n2 = "n";
function Dad() {
  return d1 + a2 + d2;
}
function Bee() {
  return b1 + e2 + e2;
}
function banana() {
  return b2 + a2 + n2 + a2 + n2 + a2;
}
function answer1() {
  return "no";
}
function answer2() {
  return "no";
}
function answer3() {
  return "yes";
}
 */

// #8kyu Training JS #4: Basic data types--Array
/* function getLength(arr) {
  return arr.length;
}
function getFirst(arr) {
  return arr[0];
}
function getLast(arr) {
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  arr.push(el);
  return arr;
}
function popElement(arr) {
  arr.pop();
  return arr;
} */

// #8kyu Training JS #5: Basic data types--Object
/* function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
} */

// #8kyu Training JS #6: Basic data types--Boolean and conditional statements if..else
/* function trueOrFalse(val) {
  if (val) return "true";
  else return "false";
} */

// #8kyu Training JS #7: if..else and ternary operator
/* function saleHotdogs(n) {
  if (n < 5) return n * 100;
  else if (n >= 5 && n < 10) return n * 95;
  else return n * 90;
}
console.log(saleHotdogs(1));
 */

// #8kyu Training JS #8: Conditional statement--switch
/* function howManydays(month) {
  var days;
  switch (month) {
    case 2:
      days = 28;
      break;
    case 4:
      days = 30;
      break;
    case 6:
      days = 30;
      break;
    case 9:
      days = 30;
      break;
    case 11:
      days = 30;
      break;
    default:
      days = 31;
  }
  return days;
}
console.log(howManydays(2)); */

// #8kyu Training JS #9: loop statement --while and do..while
/* function padIt(str, n) {
  let start = 0;
  while (start < n) {
    if (start % 2 === 0) str = `*${str}`;
    else str = `${str}*`;
    start++;
  }
  return str;
} */

// #8kyu Training JS #10: loop statement --for
/* function pickIt(arr) {
  var odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }
  return [odd, even];
}
 */

// #8kyu Training JS #11: loop statement --break,continue
/* function grabDoll(dolls) {
  var bag = [];
  for (i in dolls) {
    if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll")
      bag.push(dolls[i]);
    if (bag.length < 3) continue;
    break;
  }
  return bag;
}
console.log(
  grabDoll([
    "Mickey Mouse",
    "Barbie doll",
    "Hello Kitty",
    "Hello Kitty",
    "Hello Kitty",
    "Snow white",
  ])
);
 */

// #8kyu Training JS #12: loop statement --for..in and for..of
/* function giveMeFive(obj) {
  let result = [];
  for (const key in obj) {
    if (key.length == 5) result.push(key);
    if (obj[key].length == 5) result.push(obj[key]);
  }
  return result;
}
console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" }));
 */

// #8kyu Training JS #13: Number object and its properties
/* function whatNumberIsIt(n) {
  if (n === Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE";
  } else if (n === Number.MIN_VALUE) {
    return "Input number is Number.MIN_VALUE";
  } else if (isNaN(n)) {
    return "Input number is Number.NaN";
  } else if (n === Number.NEGATIVE_INFINITY) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else if (n === Number.POSITIVE_INFINITY) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else {
    return "Input number is " + n;
  }
}
console.log(whatNumberIsIt(1.7976931348623157e308)); */

// #8kyu Training JS #14: Methods of Number object--toString() and toLocaleString()
/* function colorOf(r, g, b) {
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
console.log(colorOf(255, 2, 0)); */

// #8kyu Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
/* function howManySmaller(arr, n) {
  return arr.map((d) => d.toFixed(2)).filter((d) => d < n).length;
}
console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));
 */

// #8kyu Training JS #16: Methods of String object--slice(), substring() and substr()
/* function cutIt(arr) {
  return arr.map((vl) => vl.slice(0, Math.min(...arr.map((vl) => vl.length))));
}
console.log(cutIt(["ab", "cde", "fgh"]));
 */

// #8kyu Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
/* function firstToLast(str, c) {
  let first = str.indexOf(c);
  let last = str.lastIndexOf(c);
  return first == -1 ? -1 : last - first;
}
console.log(firstToLast("ababc", "c"));
 */
// #8kyu Training JS #18: Methods of String object--concat() split() and its good friend join()
/* function splitAndMerge(string, separator) {
  return string
    .split(" ")
    .map((vl) => [...vl].join(separator))
    .join(" ");
}
console.log(splitAndMerge("My name is John", "-"));
 */

// #7kyu Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
/* function alienLanguage(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((vl) =>
      vl.replace(vl.substring(0, vl.length - 1), (x) => x.toUpperCase())
    )
    .join(" ");
}
console.log(alienLanguage("HELLO WORLD"));
 */

// #7kyu Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
/* function topSecret(str) {
  let dict = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let Dict = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return str.replace(/[a-z]/gi, (v) => {
    if (v === v.toLowerCase()) {
      return dict.indexOf(v.toLowerCase()) - 3 < 0
        ? dict[dict.indexOf(v.toLowerCase()) - 3 + 26]
        : dict[dict.indexOf(v.toLowerCase()) - 3];
    }
    if (v === v.toUpperCase()) {
      return Dict.indexOf(v) - 3 < 0
        ? Dict[Dict.indexOf(v) - 3 + 26]
        : Dict[Dict.indexOf(v) - 3];
    }
    return v;
  });
}
answer1 = "3745";
answer2 = "RILc";
answer3 = "Expired biscuits";
console.log(topSecret("Pb qdph lv Mrkq"));
 */

// #7kyu Training JS #21: Methods of String object--trim() and the string template
/* function fiveLine(s) {
  let str = "";
  s = s.trim();
  for (let i = 1; i <= 5; i++) {
    str += `${s.repeat(i)}\n`;
  }
  return str.slice(0, -1);
}
console.log(fiveLine("  a"));
 */

// #7kyu Training JS #22: Unlock new skills--Arrow function,spread operator and deconstruction
/* var shuffleIt = (arr, ...args) => {
  for (var i = 0; i < args.length; i++) {
    var [a, b] = [args[i][0], args[i][1]];
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  return arr;
};
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3]));
 */

// #7kyu Training JS #24: methods of arrayObject---splice() and slice()
/* function threeInOne(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i += 3) {
    array.push(arr[i] + arr[i + 1] + arr[i + 2]);
  }
  return array;
}
console.log(threeInOne([1, 3, 5, 2, 4, 6, 7, 7, 7]));
 */

// #7kyu Training JS #26: methods of arrayObject---map()
/* function isolateIt(arr) {
  return arr.map((v) => {
    if (v.length % 2 == 0) {
      return v.slice(0, v.length / 2) + "|" + v.slice(v.length / 2);
    }
    if (v.length % 2 !== 0) {
      return v.slice(0, v.length / 2) + "|" + v.slice(v.length / 2 + 1);
    }
  });
}
console.log(isolateIt(["abcd", "efgh"]));
 */

// #7kyu Training JS #27: methods of arrayObject---filter()
/* function countGrade(scores) {
  let obj = {
    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    X: 0,
  };
  scores.filter((score) => {
    if (score == 100) obj["S"]++;
    if (score < 100 && score >= 90) obj["A"]++;
    if (score < 90 && score >= 80) obj["B"]++;
    if (score < 80 && score >= 60) obj["C"]++;
    if (score < 60 && score >= 0) obj["D"]++;
    if (score == -1) obj["X"]++;
  });
  return obj;
}
console.log(countGrade([50, 60, 70, 80, 90, 100])); */

// #7kyu Training JS #28: methods of arrayObject---every() and some()
/* function mirrorImage(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if ([...`${arr[i]}`].reverse().join("") === `${arr[i + 1]}`) {
      return [arr[i], arr[i + 1]];
    }
  }
  return [-1, -1];
}
console.log(mirrorImage([454, 86, 57, 75, 16, 88]));
 */

// #7kyu Training JS #29: methods of arrayObject---concat() and join()
/* function bigToSmall(arr) {
  return []
    .concat(...arr)
    .sort((a, b) => b - a)
    .join(">");
}
console.log(
  bigToSmall([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
 */

// #7kyu Training JS #30: methods of arrayObject---reduce() and reduceRight()
/* function tailAndHead(arr) {
  let output = [];
  for (let i = 0; i < arr.length - 1; i++)
    output.push((arr[i] % 10) + Number(`${arr[i + 1]}`[0]));
  return output.reduce((a, b) => a * b);
}
console.log(tailAndHead([1, 2, 3, 4, 5]));
 */

// #7kyu Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
/* function blackAndWhite(arr) {
  if (!Array.isArray(arr)) return `It's a fake array`;
  else if (arr.includes(5) && arr.includes(13)) return `It's a black array`;
  else return `It's a white array`;
}
console.log(blackAndWhite([4, 13]));
 */

// #7kyu Training JS #32: methods of Math---round() ceil() and floor()
/* function roundIt(n) {
  let arr = `${n}`.split(".");
  if (arr[0].length > arr[1].length) return Math.floor(n);
  else if (arr[0].length < arr[1].length) return Math.ceil(n);
  else return Math.round(n);
}
console.log(roundIt(3.45));
 */

// #7kyu Training JS #33: methods of Math---max() min() and abs()
/* function maxMin(arr1, arr2) {
  const arr = arr2.map((v, i) => v - arr1[i], 0);
  return [
    Math.max(...arr.map((v) => Math.abs(v))),
    Math.min(...arr.map((v) => Math.abs(v))),
  ];
}
console.log(maxMin([1, 3, 5], [9, 8, 7]));
 */

// #7kyu Training JS #34: methods of Math---pow() sqrt() and cbrt()
/* function cutCube(volume, n) {
  return !(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1);
}
console.log(cutCube(512, 8));
 */
