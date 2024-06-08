const array = [45, 4 , 66 , 89 , 2 , 18 , 45];
let largest = -Infinity;
let smallest = Infinity;

let divByThree = [];

array.forEach(Element =>{
    largest = Math.max(largest, Element);
    smallest = Math.min(smallest, Element);

    if(Element % 3 == 0){
        divByThree.push(Element);
    }
})

console.log(`The largest element of the array is ${largest} & the smallest element of the array is ${smallest}`);
console.log("The elements which can be divisible by 3 are :-");
console.log(divByThree);