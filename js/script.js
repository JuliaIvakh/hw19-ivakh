//Task 1
const arr = ["a", "b", "c", "d"];
const arr2 = arr.splice(2).join("+");
const arr1 = arr.splice(0).join("+");
const resultString = arr1 + "," + arr2;
console.log(resultString);

//Task 2
const array = [2, 5, 3, 9];
const arrayResult = array[0] * array[1] + array[2] * array[3];
console.log(arrayResult);

//Task 3
const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr3[1][0]);
//or
const result3 = arr3[1].find((item) => item === 4);
console.log(result3);

//Task 4
const obj = { js: ["jQuery", "Angular"], php: "hello", css: "world" };
console.log(obj.js[0]);

//Task 5
const arr5 = [];
let str = "";
for (let i = str; i < 15; i++) {
  str += "x";
  arr5.push(str);
}
console.log(arr5);

//Task 6
const arr6 = [];
for (let i = 1; i < 6; i++) {
  let str = "";
  for (let j = 0; j < i; j++) {
    str += i;
  }
  arr6.push(str);
}
console.log(arr6);

//Task 7
function arrayFill(symb, num) {
  const arr7 = [];
  for (let i = 0; i < num; i++) {
    arr7.push(symb);
  }
  return arr7;
}
console.log(arrayFill("x", 5));

//Task 8
const arr8 = [2, 2, 2, 2, 2, 1];
let { result: a8 } = arr8.reduce(
  (acc, item) => {
    if (acc.sum > 10) {
      return acc;
    }
    acc.sum += item;
    acc.result += 1;
    return acc;
  },
  { sum: 0, result: 0 }
);
console.log(a8);

//Task 9
const arr9 = [1, 2, 3, 4, 5];
arr9.sort((a, b) => b - a);
console.log(arr9);

//Task 10
const arr10 = [[1, 2, 3], [4, 5], [6]];
let sum10 = 0;
const newarr10 = arr10.flat(Infinity);
for (let i = 0; i < newarr10.length; i++) {
  sum10 += newarr10[i];
}
console.log(sum10);

// //Task 11
const arr11 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
let sum11 = 0;
const newarr11 = arr11.flat(Infinity);
for (let i = 0; i < newarr11.length; i++) {
  sum11 += newarr11[i];
}
console.log(sum11);
