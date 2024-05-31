//javascript program to find the sum of all the elements of an array

let array = [1, 2, 3, 4, 5];

//using for loop
let findSum1 = () => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

//using while loop
let findSum2 = () => {
  let sum = 0;

  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }

  return sum;
};
console.log(`Sum of all elements of array is ${findSum1()}`);
console.log(`Sum of all elements of array is ${findSum2()}`);
