const array1 = [34, 22, 11, 18, 45, 7];
const array2 = [10, 20, 30, 40, 50];

//using for loop
const checkSort1 = (array) => {
  let isSorted = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      isSorted = false;
      return;
    }
  }

  return !isSorted ? false : true;
};

//using while loop
const checkSort2 = (array) => {
  let isSorted = true;
  let i = 0;
  while (i < array.length) {
    if (array[i] > array[i + 1]) {
      isSorted = false;
      return;
    }
    i++;
  }

  return !isSorted ? false : true;
};

console.log(checkSort1(array1) ? "Array is sorted" : "Array is not sorted");
console.log(checkSort1(array2) ? "Array is sorted" : "Array is not sorted");
console.log("============")
console.log((checkSort2(array2)) ? 'Array is sorted' : 'Array is not sorted');
console.log((checkSort2(array1)) ? 'Array is sorted' : 'Array is not sorted');
