//Javascript program to find the largest element of an array
let array = [22 , 34 , 1 , 56 , 18 , 45];
let largest = 0;
array.forEach(element => {
    largest = Math.max(element , largest)
});

console.log(`${largest} is the largest element of an array`);