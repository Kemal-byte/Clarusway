const array = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
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
