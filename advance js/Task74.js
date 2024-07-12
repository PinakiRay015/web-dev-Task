

const combinedArrays = (...Array) =>{
    let combinedArray = [];
    Array.forEach(element => {
        combinedArray.push(element)
    });

    return combinedArray;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10]

console.log(combinedArrays(array1 , array2));