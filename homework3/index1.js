
// Дано число. Определить, заканчивается оно четной цифрой или нечетной? 
// Вывести последнюю цифру и информацию о том чётная она, или нет.

const theString = prompt("Please enter the number");
const theNumber = Number(theString);

const lastDigit = theNumber % 10;

if( lastDigit % 2 == 0 ) {
    result = (`The Last Digit of the Number is ${lastDigit}. 
The Number is Even.`)
}
else {
    result = (`The Last Digit of the Number is ${lastDigit}. 
The Number is Odd.`);
}

alert (result);