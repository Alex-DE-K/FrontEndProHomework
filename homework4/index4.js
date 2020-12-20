
// Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, 
// не имеющих других делителей кроме 1 и самого себя).


const theString = prompt("Please enter the number");
const theNumber = Number(theString); 
    
for (let i = 2; i < theNumber; i++) {
    if (theNumber % i === 0) {
        resultMessage = (`The entered Number ${theNumber} is NOT prime integer`); 
        break;
    }
    else {
        resultMessage = (`The entered Number ${theNumber} is prime integer`);
    }
}
console.log (resultMessage);
    