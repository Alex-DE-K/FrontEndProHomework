
// Создать массив, длину и элементы которого задаёт пользователь (строковые значения). 
// Затем отсортировать массив по возрастанию. Затем, удалить элементы из массива с 2 по 4 
// (если длина меньше 4 вывести сообщение). По мере изменений, выводить содержимое массива на страницу.

const userArray = prompt("Please enter array length");
const userArrayLength = Number(userArray);

const newArray = Array(userArrayLength);

for (i = 0; i < newArray.length; i++) {
    newArray [i] = prompt (`Please enter array's ` + i + ` element value`, ``);
}
console.log(newArray); // массив с элементами

newArray.sort ();

console.log(newArray); // массив после сортировки

if(newArray.length >= 4 ){
    newArray.splice(2, 2);
}
else {
    alert(`Array length is ${newArray.length} elements, which is less than 4 elements. Elements removal is not possible!`);
}

console.log(newArray); //массив после удаления элементов