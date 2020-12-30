/*
1) С помощью prompt спрашиваем у пользователя действие. +
2) С помощью prompt спрашиваем у пользователя числа. Числа вводятся через пробел. +
3) Выполняем то действие, которое выбрал пользователь со всеми числами. +

Если ввёл действие которого нет (не +, -, *, /) то выводим соответсвующее сообщение и не выполняем код дальше. +
Удаляем все значения, которые не являются числами. +
т.е. если пользователь ввел "1 ыва 2 56", то калькуляцию мы должны провести тольк с 1 2 56
Для этого у массива есть специальный метод который позволяет убрать ненужные значения.
Всё это делаем красиво использую функции, каждая из которой занимается своей конкретной задачей (НЕ ПИСАТЬ ПРОСТО ПОЛОТНО КОДА).*/

const arrayNumbers = prompt("Please enter the numbers through the space");

const filteredArray = arrayNumbers.split(' ').map(Number).filter((item) => {
    if(item === '' || isNaN(item) || item === 0) {  /*добавил фильтр на 0, чтобы результатом умножения и деления был*/ 
        return false;
    }   
    else {
        return true;
    }
});    

// console.log('filteredArray', filteredArray);

alert('Please note! Items such as "0" or "not a number" will be filtered')

function getOperator (){
    let operator = prompt ('Enter action with numbers: +, -, *, /,', '');
    if (operator !== '+' &&
        operator !== '-' &&
        operator !== '*' &&
        operator !== '/') {
            
            alert ('Enter the right action!');
            return getOperator();
        }
        return operator;
}; 

const operator = getOperator ();

const finalSumResult = filteredArray.reduce(function(item, index) { 
    
    return item + index;
}, 0);

const finalMultiplicationResult = filteredArray.reduce(function(item, index) { 
    
    return item * index; 
});

const finalSubstractionResult = filteredArray.reduce(function(item, index) {
    
    return item - index; 
});

const finalDivisionResult = filteredArray.reduce(function(item, index) {
    
    return item / index; 
});

function getResult (){
    if(operator === '+') {
        return finalSumResult;
    };

    if (operator === '-') {
        return finalSubstractionResult;
    };

    if (operator === '*') {
        return finalMultiplicationResult;
    };

    if (operator === '/') {
        return finalDivisionResult;
    };
};

const finalResult = getResult ();

alert(`The result of action ' ${operator} ' \nwith numbers: ${filteredArray} \nis ${finalResult}.`);




