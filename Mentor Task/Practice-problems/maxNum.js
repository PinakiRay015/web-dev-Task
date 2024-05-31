const array = [34, 22 , 11 , 18, 45, 7];

//using for loop
const findMax1 = () =>{
    let max = Number.MIN_VALUE; //It will assign the variable maximum lowest value which can be possible.
    for(let i = 0 ; i<array.length ; i++){
        max = Math.max(max , array[i]);
    }
    return max;
}

console.log(`The maximum element from the array is ${findMax1()}`);