// function name(params) {
//   return params === params.split("").reverse().join("")
//     ? "bular teng"
//     : "tengmas";
// }

// console.log(name("kiyik"));

// function doubleChar(str) {
//   var res = "";
//   for (let i = 0; i < str.length; i++) {
//     res += str[i] + str[i];
//   }
//   return res;
// }
// console.log(doubleChar("abd"));

// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
// }
// console.log(goals(0, 0, 0));

// function pipeFix(numbers){
// 	let arr = [];
// 	for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }

// function remove(string) {
//   for (let i = 0; i < string.length; i++) {
//     return string[string.length - 1] === "!"
//       ? string.slice(0, string.length - 1)
//       : string;
//   }
// }
// console.log(remove("Hi!"));

// function doubleInteger(i) {
//   return i * 2;
// }
// console.log(doubleInteger(2));

// function getDivisorsCnt(n) {
//   var res = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//       res += 1;
//     }
//   }
//   return res;
// }
// console.log(getDivisorsCnt(4));

// function problem(x) {
//   return typeof x == "number" ? x * 50 + 6 : "Error";
// }
// console.log(problem(5));

// function correct(string) {
//   const corrections = {
//     5: "S",
//     0: "O",
//     1: "I",
//   };
//   return string
//     .split("")
//     .map((char) =>
//       corrections.hasOwnProperty(char) ? corrections[char] : char
//     )
//     .join("");
// }
// console.log(correct("L0ND0N"));

// function uzbekTeam(yil) {
//   console.log(
//     yil === "2022"
//       ? "U-23 jamoasi chempion bolmaydi"
//       : "U-23 jamoasi chempion boladi"
//   );
// }

// uzbekTeam("2022");

// var fruits = ["Banana", "Orange", "Apple", "Mango", "olma"];

// function deleteMove(name) {
//   return fruits.filter((value) => value !== name);
// }
// console.log(deleteMove("Orange"));

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// for (let keys in menu) {
//   if (typeof menu[keys] == "number") {
//     console.log(2 * menu[keys]);
//   } else console.log("fail");
// }

// function inArray(a1, a2) {
//   return a1.filter((value) => a2.some((vl) => vl.includes(value))).sort();
// }
// console.log(
//   inArray(
//     ["xyz", "live", "strong"],
//     ["lively", "alive", "harp", "sharp", "armstrong"]
//   )
// );

// function getGrade(s1, s2, s3) {
//   let res = (s1 + s2 + s3) / 3;
//   return res < 60
//     ? "F"
//     : res < 70
//     ? "D"
//     : res < 80
//     ? "C"
//     : res < 90
//     ? "B"
//     : "A";
// }
// console.log(getGrade(95, 90, 93));

function name(params) {
  if (params.length === 0) {
    return 0.0;
  }
  var a = 0;
  for (let i = 0; i < params.length; i++) {}
}
