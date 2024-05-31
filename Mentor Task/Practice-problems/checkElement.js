let prompt = require('prompt-sync')();
let array = [4, 35, 112, 67, 97, 553];
let targetElement = parseInt(prompt("Enter the target element: "));

//using for loop
const findPosition1 = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (targetElement === array[i]) {
            return i;
        }
    }
    return `${targetElement} is not present`;
}

//using while loop
const findPosition2 = (array) =>{
    let i = 0;
    while(i<array.length){
        if(targetElement === array[i]){
            return i;
        }
        i++;
    }
    return `${targetElement} is not present`
}

console.log(findPosition1(array));
console.log(findPosition2(array));
