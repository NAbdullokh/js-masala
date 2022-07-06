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

function correct(string) {
  const corrections = {
    5: "S",
    0: "O",
    1: "I",
  };
  return string
    .split("")
    .map((char) =>
      corrections.hasOwnProperty(char) ? corrections[char] : char
    )
    .join("");
}
console.log(correct("L0ND0N"));
