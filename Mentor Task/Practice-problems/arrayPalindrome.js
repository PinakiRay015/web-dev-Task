//using while loop
const isPalindrome1 = (array) => {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    if (array[start] !== array[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
};

//using for loop
const isPalindrome2 = (array) => {
  for (let start = 0, end = array.length - 1; start < end; start++, end--) {
    if (array[start] !== array[end]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome1([1, 2, 3, 2, 1]));
console.log(isPalindrome1([1, 2, 3, 4, 5]));

console.log("=============");

console.log(isPalindrome2([1, 2, 3, 4, 5]));
console.log(isPalindrome2([1, 2, 3, 2, 1]));

