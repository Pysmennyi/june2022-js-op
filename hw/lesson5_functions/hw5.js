let pi = 4.14;
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let triangleAriaCalc = (a, b) => 1 / 2 * a * b;
console.log(triangleAriaCalc(3, 3));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleAreaCalc = (r) => pi * r;
console.log(circleAreaCalc(13));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cilinderAreaCalc = (h, r) => 2 * pi * r * (h + r);
console.log(cilinderAreaCalc(2, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        console.log(arrElement);
    }
}

let array = [1, 2, 3, 4, 5, 6, 7];
arrayDisplay(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paraString(String) {
    document.write(`<p>${String}</p>`)
}

paraString(`Hello`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listing(String) {
    document.write(`<ul>
<li>${String}</li>
<li>${String}</li>
<li>${String}</li>
</ul>`)
}

listing(`list`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listingNumbered(String, numberTimes) {
    document.write(`<ul>`);
    for (let i = 0; i < numberTimes; i++) {
        document.write(`<li># ${i + 1} ${String}</li>`)
    }
    document.write(`</ul>`)
}

listingNumbered(`list`, 22);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr1 = [2, 3, 42, 54, 4, 2, 1, 0.2];

function arrayListing(array) {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li># ${i + 1}) ${array[i]}</li>`)
    }
    document.write(`</ul>`)
}

arrayListing(arr1);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'oleg', age: 28, id: 6},
    {name: 'anya', age: 31, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
];

function objectDispay(object) {
    for (const user of object) {
        for (let userKey in user) {
            document.write(`<div>${user[userKey]}</div>`)
        }
        document.write(`-----------------`)
    }
}

objectDispay(users);

// - створити функцію яка повертає найменьше число з масиву
let minNum = (array) => Math.min.apply(Math, array)
console.log(minNum(arr1));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
function arrElemSum(array) {
    let number = 0;
    for (let i = 0; i < array.length; i++) {
        number += array[i];
    }
    return number;
}

console.log(arrElemSum(arr1));