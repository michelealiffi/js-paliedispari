'use strict'

let word = prompt('Inserire parola');

function checkPalindrome(word) {    
    let re = /[\W_]/g;
    let lowRegStr = word.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}

if (checkPalindrome(word)) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}