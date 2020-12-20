
// Один доллар стоит 30 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов.

for(let i = 10; i <= 100; i+=10){
    const multiplicationResult = i * 30;

    console.log(`For ${i}$ you should pay ${multiplicationResult} UAH`);
}

