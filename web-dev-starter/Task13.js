const fibonacci = (num) => {
    if (num <= 0) return;
    let prevNum = 0;
    let currentNum = 1;
    console.log(prevNum);
    if (num > 1) console.log(currentNum);
    for (let i = 2; i < num; i++) {
        let nextNum = prevNum + currentNum;
        console.log(nextNum);
        prevNum = currentNum;
        currentNum = nextNum;
    }
}

fibonacci(10);
