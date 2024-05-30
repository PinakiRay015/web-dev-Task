const prompt = require('prompt-sync')();
let currentBalance = 1000;

const checkBalance = () => {
    console.log(`Your current balance is ${currentBalance}\n`);
}

const deposit = () => {
    let amount = parseInt(prompt("Enter the amount to deposit: "));
    if (amount <= 0) {
        console.log("Depositing amount cannot be zero or less than that");
    } else {
        currentBalance += amount;
        console.log(`${amount} has been successfully deposited\n`);
    }
}

const withdraw = () => {
    let amount = parseInt(prompt("Enter the amount to withdraw: "));
    if (amount <= 0) {
        console.log("Please enter a valid amount to withdraw.\n");
    } else if (amount > currentBalance) {
        console.log("Insufficient balance. Please enter a smaller amount.\n");
    } else {
        currentBalance -= amount;
        console.log(`Amount of Rs. ${amount} has been withdrawn\n`);
    }
}

loop1 : while(true){
    console.log("1 -> Check balance");
    console.log("2 -> Deposit");
    console.log("3 -> Withdraw");
    console.log("4 -> Exit");
    var option = parseInt(prompt("Enter the option: "));
    switch (option) {
        case 1:
            checkBalance();
            break;
        case 2:
            deposit();
            break;
        case 3:
            withdraw();
            break;
        case 4:
            break loop1;
        default:
            console.log("Wrong input. Please enter 1, 2, or 3.\n");
    }
};

console.log("Thank you");
