
// Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа которое ввёл пользователь.

const integerNumber = parseInt(prompt("Please enter integer number"));

let result = 'There are integers which square is lower then entered number \n';

for (let i = 1; i <= 100; i++) {
    const squareNumber = Math.pow(i, 2);
    if (squareNumber <= integerNumber){
        result += `${i}\n`;
    } 
    else {
        break;
    }
}
console.log(result);

