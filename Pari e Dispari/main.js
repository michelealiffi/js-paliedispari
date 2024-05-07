'use strict'

let request = '';

do {
    request = prompt('Scegliere tra pari e dispari');
    
    if(request == 'pari') {
        console.log('Hai scelto pari');
        break;
    } else if(request == 'dispari') {
        console.log('Hai scelto dispari');
        break;
    } else {
        console.log('Scegli di nuovo');
        continue;
    }
} while(true);

let requestNumber = 0;

do {
    requestNumber = Number(prompt('Scegliere un numero tra 1 a 5'));

    if(requestNumber == NaN || requestNumber > 5 || requestNumber < 1) {
        console.log('Scegli un numero valido');
        continue;
    } else {
        console.log('Ottima scelta!');
        break;
    }
} while(true);

debugger

console.log('Hai scelto il numero: ' + requestNumber);

const randomNumber = Math.floor(Math.random() * 5) + 1;

console.log('Il pc ha scelto: ' + randomNumber);

let totalNumber = '';

function checkNumberSum(totalNumber) {

    totalNumber = requestNumber + randomNumber;

    let result = 'dispari';

    if(totalNumber % 2 == 0) {
        result = 'pari';
    }

    console.log("Il numero è " + result + ": " + totalNumber);

    if(result != request) {
        console.log('Il pc ha vinto, ritenta sarai più fortunato');
    } else {
        console.log('Bravo user! Hai vinto!');
    }

}

checkNumberSum(totalNumber);