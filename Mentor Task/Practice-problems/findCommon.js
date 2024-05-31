//Javascript program to find the common elements in 2 arrays
let array1 = [7, 18, 45, 55 , 32, 44];
let array2 = [55 , 6 , 22, 44 , 91];

const findCommon1 = () =>{
    let uniqueArray = [];
    for(let i = 0 ; i<array1.length ; i++){
        if(array1.includes(array2[i])){
            uniqueArray.push(array2[i]);
        }
    }

    return uniqueArray;
}

const findCommon2 = () =>{
    let uniqueArray = [];
    let i = 0;
    while(i<array1.length){
        if(array1.includes(array2[i])){
            uniqueArray.push(array2[i]);
        }
        i++;
    }

    return uniqueArray;
}

console.log("The common elements in both the arrays are : "+findCommon1());
console.log("The common elements in both the arrays are : "+findCommon2());