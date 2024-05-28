//Reversing an array using for each (for iteration) and using reverse() function to iterate the array from backwards
let array = [10, 20, 30, 40, 50];
let newArray = [];
console.log("Array before reversing");
array.forEach(element => {
    console.log(element);
});
console.log("Array after reversing");
array.reverse().forEach(element =>{
    newArray.push(element)
})
console.log(newArray);
console.log("=========");


//reversing an array without using the 2nd array
let sampleArray = [45, 33 , 12, 56 , 5]
console.log("Array before reversing");
console.log(sampleArray);
for(let i=0 , j=sampleArray.length-1 ; i<j ; i++,j--){
    let temp = sampleArray[i];
    sampleArray[i] = sampleArray[j];
    sampleArray[j] = temp;
}

console.log("Array after reversing");
console.log(sampleArray);