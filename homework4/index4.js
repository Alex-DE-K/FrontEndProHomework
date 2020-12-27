
// Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, 
// не имеющих других делителей кроме 1 и самого себя).

const theNumber = parseInt(prompt("Please enter the number"));
    
let resultMessage = 0;
for (let i = 0; i < theNumber; i++) {
    if (theNumber <= 1) {
        resultMessage = (`The entered Number ${theNumber} is NOT prime integer`);
        break;
    }
    if (theNumber <= 3) {
        resultMessage = (`The entered Number ${theNumber} is prime integer`);
        break;
    }
    if (theNumber % 2 === 0) {
        resultMessage = (`The entered Number ${theNumber} is NOT prime integer`);
        break; 
    }
    else {
        resultMessage = (`The entered Number ${theNumber} is prime integer`);
    }
}
console.log (resultMessage);
    