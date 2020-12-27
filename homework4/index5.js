
// Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. 
// (Например, числа 9, 81 можно получить, а 13 - нельзя).


const theNumber = parseInt(prompt("Please enter the number"));

let resultMessage = 0;

for (let i = 1; i < 100; i++) {
    let risedNumber = Math.pow(3, i);
    if (risedNumber > theNumber) {
        resultMessage = (`Ho Ho Ho! We can't get the Number ${theNumber} by means of raising 3 to the n-th power. The entered number is lower than 3` );
        break;
    }
    if (theNumber === risedNumber) {
        resultMessage = (`We can get the Number ${theNumber} by means of raising 3 to the n-th power`);
        break;
    }
    else {
        resultMessage = (`We can't get the Number ${theNumber} by means of raising 3 to the n-th power`);
    }
} 

console.log(resultMessage);