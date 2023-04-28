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
