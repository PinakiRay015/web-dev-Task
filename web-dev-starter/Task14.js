//Javascript program to check if a number is palindrom or not
const myName = "rohan";
let isPalindrome = true;
for(let i=0 , j=myName.length-1 ; i<j ; i++ , j--){
    if(myName.charAt(i) !== myName.charAt(j)){
        isPalindrome = false;
        break;
    }
}

console.log((isPalindrome) ? `${myName} is a palindrom` : `${myName} is not a palindrom`);