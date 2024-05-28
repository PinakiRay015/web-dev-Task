const givenNum = 6;
if(givenNum == 1 || givenNum == 0){
    console.log("Not a prime number");
}else{
    var isPrime = true;

    for(let i = 2 ; i<givenNum ; i++){
        isPrime = (givenNum % i == 0) ? false : true; //ternary operator is used here
        break;
    }
}

console.log((isPrime) ? `${givenNum} is a prime number` : `${givenNum} is not a prime number`); //ternary operator is used here