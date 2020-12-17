
// Дано трехзначное число. 
// Определить является ли четной сумма его цифр. 
// Определить, кратна ли сумма его цифр пяти. 
// Определить является ли произведение его цифр больше 100. 


const theString = prompt("Please enter the 3 Digit number");
const threeDigitNumber = Number(theString);

const twoDigitNumber = threeDigitNumber % 100;
const firstDigit = (threeDigitNumber - twoDigitNumber) / 100;
  
const oneDigitNumber = twoDigitNumber % 10;
const secondDigit = (twoDigitNumber - oneDigitNumber) / 10;
  
const thirdDigit = oneDigitNumber;

const sumOfDigits = (firstDigit + secondDigit + thirdDigit);


if( sumOfDigits % 2 == 0 ) {
    evenOddResult = (`The Sum of the Number ${theString} Digits is ${sumOfDigits}. 
This value is Odd.`);
}
else {
    evenOddResult = (`The Sum of the Number ${theString} Digits is ${sumOfDigits}. 
This value is Even.`);
}

if( sumOfDigits % 5 == 0 ) {
    multiplicityResult = (`This value is Multiple of five.`);
}
else {
    multiplicityResult = (`This value is not Multiple of five.`);
}

const multiplicationOfDigits = (firstDigit * secondDigit * thirdDigit) 

if ( multiplicationOfDigits > 100 ) {
    multiplicationResult = (`The Multiplication of the Number ${theString} Digits is ${multiplicationOfDigits}. 
This value is More than 100.`);
}
else if ( multiplicationOfDigits == 100 ) {
    multiplicationResult = (`The Multiplication of the Number ${theString} Digits is ${multiplicationOfDigits}. 
This value is Equal to 100.`);
}

else {
    multiplicationResult = (`The Multiplication of the Number ${theString} Digits is ${multiplicationOfDigits}. 
This value is Less than 100.`);
}

const finalResultMessage = (`${evenOddResult}
${multiplicityResult}
${multiplicationResult}`)

  
alert(finalResultMessage);
