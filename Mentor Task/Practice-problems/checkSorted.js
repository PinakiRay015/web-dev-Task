const array1 = [34, 22 , 11 , 18, 45, 7];
const array2 = [10, 20 , 30 , 40 , 50];
let isSorted1 = true;

//using for loop
const checkSort = (array) =>{
    for(let i = 0 ; i<array.length ; i++){
        if(array[i] > array[i+1]){
            isSorted1 = false;
            return;
        }
    }

    return (!isSorted1) ? false : true;
}

console.log((checkSort(array2)) ? 'Array is sorted' : 'Array is not sorted');
