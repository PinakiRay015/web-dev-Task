let array1 = [6, 45, 12, 77, 98];
let array2 = [4, 35, 112, 67, 97, 553];

let sortedArray = [];

// sorting the two arrays first.
array1.sort((a, b) => a - b);
array2.sort((a, b) => a - b);

//now we can merge in a sorted manner.
const mergeArray = () => {
    let i = 0, j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            sortedArray.push(array1[i]);
            i++;
        } else {
            sortedArray.push(array2[j]);
            j++;
        }
    }

    // Adding the remaining element from 1st array.
    while (i < array1.length) {
        sortedArray.push(array1[i]);
        i++;
    }

    // Adding the remaing element from 2nd array
    while (j < array2.length) {
        sortedArray.push(array2[j]);
        j++;
    }

    return sortedArray;
}

console.log(mergeArray());