const prompt = require('prompt-sync')();
let newWord1 = ''
let newWord2 = ''
const reverseWord1 = (word) =>{
    for(let i = word.length-1 ; i>=0 ; i--){
       newWord1 += word[i];
    }
    return newWord1;
}

const reverseWord2 = (word) =>{
    let i = word.length-1;
    while(i>=0){
        newWord2 += word[i];
        i--;
    }
    return newWord2;
}


let word1 = prompt('Enter your name : ')
console.log(reverseWord1(word1));
let word2 = prompt('Enter your name : ')
console.log(reverseWord2(word2));