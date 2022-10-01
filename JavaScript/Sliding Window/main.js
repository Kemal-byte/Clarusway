const array = [10, 5, 2, 7, 8, 7];
let k = 5;
let a = k;
let newArray = [];
let maxNumber = 0;

for (let i = 0; i < array.length - k + 1; i++) {
  for (let j = i; j < a; j++) {
    newArray.push(array[j]);
    maxNumber = Math.max(...newArray);
  }
  console.log(`Maximum Number in this array ${newArray} is ${maxNumber}`);
  a++;
  newArray = [];
}
