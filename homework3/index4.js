
// Дано трехзначное число. 
// Верно ли, что все его цифры одинаковые? 
// Есть ли среди его цифр одинаковые?

const theString = prompt("Please enter the 3-Digit number");
const threeDigitNumber = Number(theString);

const twoDigitNumber = threeDigitNumber % 100;
const firstDigit = (threeDigitNumber - twoDigitNumber) / 100;
  
const oneDigitNumber = twoDigitNumber % 10;
const secondDigit = (twoDigitNumber - oneDigitNumber) / 10;
  
const thirdDigit = oneDigitNumber;

if (firstDigit == secondDigit && secondDigit == thirdDigit) {
commonEqualityResult = (`The Digits of the Number ${theString} are Equal`);
}
else {
commonEqualityResult = (`The Digits of the Number ${theString} are NOT Equal`);
}

if (firstDigit == secondDigit) {
perticularEqualityResult = (`The First and the Second Digits of the Number ${theString} are Equal`);
}

else if (secondDigit == thirdDigit) {
perticularEqualityResult = (`The Second and the Third Digits of the Number ${theString} are Equal`);
}

else if (firstDigit == thirdDigit) {
perticularEqualityResult = (`The First and the Third Digits of the Number ${theString} are Equal`);
}

else {
    perticularEqualityResult = (`There is No Equal Digits in the Number ${theString}`);
}

if (firstDigit == secondDigit && secondDigit == thirdDigit) {
    resultMessage = (commonEqualityResult);
}
else {
    resultMessage = (perticularEqualityResult);
}

alert (resultMessage);
