const findMissingNumber1 = (array) => {
    const n = array.length + 1;
    const totalSum = (n * (n + 1)) / 2;

    let arraySum = 0;
    for (let num of array) {
        arraySum += num;
    }

    return totalSum - arraySum;
};

const findMissingNumber2 = (array) => {
    const n = array.length + 1;
    const totalSum = (n * (n + 1)) / 2;

    let arraySum = 0;
    let i = 0;
    while (i < array.length) {
        arraySum += array[i];
        i++;
    }

    return totalSum - arraySum;
};

// Test cases
console.log(findMissingNumber1([1, 2, 4, 5, 6]));
console.log("========");
console.log(findMissingNumber2([1, 2, 3, 4, 5]));
