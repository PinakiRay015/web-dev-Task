const prompt = require('prompt-sync')();
let array = [10, 20, 30, 40, 50];
let emptyArray = [];
let targetElement = parseInt(prompt("Enter the element you want to remove: "))

//using for loop
const removeElement1 = (array) =>{
    for(let i=0 ; i<array.length ; i++){
        if(targetElement !== array[i]){
            emptyArray.push(array[i]);
        }
    }
    return emptyArray;
}

//using while loop

const removeElement2 = (array) =>{
    let i = 0;
    while(i<array.length){
        if(targetElement !== array[i]){
            emptyArray.push(array[i]);
        }
        i++;
    }
    return emptyArray;
}

console.log(removeElement1(array));
console.log(removeElement2(array));