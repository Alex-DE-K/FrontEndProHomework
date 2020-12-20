
// Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа которое ввёл пользователь.

const theString = prompt("Please enter the number");
const theNumber = Number(theString);


for (i = 1; i <= 100; i++) {
    const squareNumber = Math.pow(i, 2);
    if (squareNumber <= theNumber){
            console.log(i);
    } 
}

