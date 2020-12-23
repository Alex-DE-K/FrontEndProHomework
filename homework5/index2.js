// Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]


const newArray = Array(16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47);

// Найти сумму и количество положительных элементов.

let sumOfPositiveElements = 0; 
let numberOfPositiveElements = 0;

for (i = 0; i < newArray.length; i++) { 
    if (newArray[i] > 0) {
        sumOfPositiveElements += newArray[i];
        numberOfPositiveElements++   
    }
}

console.log(`the sum of positive elements`, sumOfPositiveElements)
console.log(`the number of positive elements`, numberOfPositiveElements)

// Найти минимальный элемент массива и его порядковый номер.

let newArrayMinElement = 0;
let newArrayMinElementIndex = 0;


for (i = 0; i < newArray.length; i++) {
    if (newArray[i] < newArrayMinElement) {
        newArrayMinElement = newArray[i];
        newArrayMinElementIndex = i;
    }
}
console.log (`min element`, newArrayMinElement);
console.log (`min element index`, newArrayMinElementIndex);

// Найти максимальный элемент массива и его порядковый номер.

let newArrayMaxElement = 0;
let newArrayMaxElementIndex = 0;
for (i = 0; i < newArray.length; i++) {
    if (newArray[i] > newArrayMaxElement) {
        newArrayMaxElement = newArray[i];
        newArrayMaxElementIndex = i;
    }
}
console.log (`max element`, newArrayMaxElement);
console.log (`max element index`, newArrayMaxElementIndex);

// Определить количество отрицательных элементов.

let numberOfNegativeElements = 0;

for (i = 0; i < newArray.length; i++) { 
    if (newArray[i] < 0) {
        numberOfNegativeElements++   
    }
}
console.log(`the number of negative elements`, numberOfNegativeElements)

// Найти количество нечетных положительных элементов.

let numberOfEvenPositiveElements = 0;

for (i = 0; i < newArray.length; i++) { 
    if (newArray[i] % 2 != 0 && newArray[i] > 0) {
        numberOfEvenPositiveElements++;
    }
}
console.log(`the number of even positive elements`, numberOfEvenPositiveElements)


// Найти количество четных положительных элементов.

let numberOfOddPositiveElements = 0;

for (i = 0; i < newArray.length; i++) { 
    if (newArray[i] % 2 == 0 && newArray[i] > 0) {
        numberOfOddPositiveElements++;
    }
}
console.log(`the number of odd positive elements`, numberOfOddPositiveElements)

// Найти сумму четных положительных элементов.

let sumOfOddPositiveElements = 0;

for (i = 0; i < newArray.length; i++) { 
    if (newArray[i] % 2 == 0 && newArray[i] > 0) {
        sumOfOddPositiveElements += newArray[i];  
    }
}
console.log(`the sum of odd positive elements`, sumOfOddPositiveElements)

// Найти сумму нечетных положительных элементов.

let sumOfEvenPositiveElements = 0;

for (i = 0; i < newArray.length; i++) { 
    if (newArray[i] % 2 != 0 && newArray[i] > 0) {
        sumOfEvenPositiveElements += newArray[i];   
    }
}
console.log(`the sum of even positive elements`, sumOfEvenPositiveElements)

// Найти произведение положительных элементов.

let multiplicationOfPositiveElements = 1; 

for (i = 0; i < newArray.length; i++) { 
    if (newArray[i] > 0) {
        multiplicationOfPositiveElements *= newArray[i];
        multiplicationOfPositiveElements = multiplicationOfPositiveElements.toExponential(2);
    }
}

console.log(`the multiplication of positive elements`, multiplicationOfPositiveElements);

// Найти наибольший среди элементов массива, остальные обнулить.


let arrayMaxElement = 0; 
for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > arrayMaxElement) {
        arrayMaxElement = newArray[i];
    }
    if (newArray[i] !== Math.max(...newArray)) {
        newArray[i] = 0;
    }
  }

  console.log(newArray)