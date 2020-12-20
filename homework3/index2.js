
// Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?


const theString = prompt("Please enter the 2 Digit number");
const theNumber = Number(theString);

const digitCheckOne = theNumber % 10;
const digitCheckTwo = Math.floor(theNumber / 10);

if ( digitCheckTwo < digitCheckOne ) {
    result = (`In your 2-digit Number ${theString} The First Digit is Less`)
}
else if (digitCheckTwo == digitCheckOne) {
    result = (`In your 2-digit Number ${theString} The Digits are Equal`);
}
else {
    result = (`In your 2-digit Number ${theString} The First Digit is Greater`);
}
alert (result);