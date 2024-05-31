let array = [10,20,30,40,50];

//creating function to find the sum of elements of an array. I used enhanced for loop here. (For each)
const findSum1 = (array) =>{
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });

    return sum;
}

//using while loop
const findSum2 = (array) =>{
    let sum = 0;
    let i = 0;
    while(i<array.length){
        sum += array[i];
        i++;
    }

    return sum;
}

//I create this function in such format which will take another function as a parameter. And as a paramter i will pass the function which takes an array as parameter and the function will provide the sum of all elements.
const findAverage = (element) =>{
        let avg = element/array.length;
    return avg;
}

console.log(findAverage(findSum1(array)));
console.log(findAverage(findSum2(array)));