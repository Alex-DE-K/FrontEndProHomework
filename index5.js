
// Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)

const theString = prompt("Please enter the 6-Digit number");
const sixDigitNumber = Number(theString);

const fiveDigitNumber = sixDigitNumber % 100000;
const firstDigit = (sixDigitNumber - fiveDigitNumber) / 100000;

const fourDigitNumber = fiveDigitNumber % 10000;
const secondDigit = (fiveDigitNumber - fourDigitNumber) / 10000;
  
const threeDigitNumber = fourDigitNumber % 1000;
const thirdDigit = (fourDigitNumber - threeDigitNumber) / 1000;
  
const twoDigitNumber = threeDigitNumber % 100;
const fourthDigit = (threeDigitNumber - twoDigitNumber) / 100;
  
const oneDigitNumber = twoDigitNumber % 10;
const fifthDigit = (twoDigitNumber - oneDigitNumber) / 10;
  
const sixthDigit = oneDigitNumber;

if (sixthDigit == firstDigit && fifthDigit == secondDigit && fourthDigit == thirdDigit) {
    result = (`The Number ${theString} is Palindrome`);
}
else {
result = (`The Number ${theString} is NOT Palindrome`);
}

alert (result);