//Javascript program to find the maximum element of an array
const array = [34, 22 , 11 , 18, 45, 7];

//using for loop
const findMax1 = () =>{
    let max = Number.MIN_VALUE; //It will assign the variable maximum lowest value which can be possible.
    for(let i = 0 ; i<array.length ; i++){
        max = Math.max(max , array[i]);
    }
    return max;
}

//using while loop
const findMax2 = () =>{
    let max = Number.MIN_VALUE;
    let i = 0;
    while(i<array.length){
        max = Math.max(max , array[i]);
        i++;
    }
    return max;
}

console.log(`The maximum element from the array is ${findMax1()}`);
console.log(`The maximum element from the array is ${findMax2()}`);