let array = [10, 20, 10, 20, 30 , 40];

const removeDuplicate = () =>{
    let uniqueArray = [];
    for(let i = 0 ; i<array.length ; i++){
        if(!uniqueArray.includes(array[i])){
            uniqueArray.push(array[i]);
        }
    }

    return uniqueArray;
}

console.log("Before removing duplicates: "+array);
console.log("After removing duplicates: "+removeDuplicate());
