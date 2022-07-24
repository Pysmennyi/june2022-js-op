/*- Створити змінні. Присвоїти кожному з них значення:*/
/*
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let one = 1;
let ten = 10;
let nine3 = -999;
let oneTwoThree = 123;
let pi = 3.14;
let twoPSeven = 2.7;
let sixteen = 16;
let bTrue = true;
let bFalse = false;
*/

// let arr = [hello, owu, com, ua, one, ten, nine3, oneTwoThree, pi, twoPSeven, sixteen, bTrue, bFalse];
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
/*
//VARIANT 1

for (let i = 0; i < 1; i++) {
    console.log(arr.valueOf());
    document.write(arr.valueOf());
    alert(arr);
//}
//VARIANT 2
//1
console.log(hello);
document.write(hello);
alert(hello);

//2
console.log(owu);
document.write(owu);
alert(owu);
*/

/*//3
console.log(com);
document.write(com);
alert(com);

//4
console.log(ua);
document.write(ua);
alert(ua);

//5
console.log(one);
document.write(one);
alert(one);

//6
console.log(ten);
document.write(ten);
alert(ten);

//7
console.log(nine3);
document.write(nine3);
alert(nine3);

//8
console.log(oneTwoThree);
document.write(oneTwoThree);
alert(oneTwoThree);

//9
console.log(pi);
document.write(pi);
alert(pi);

//10
console.log(twoPSeven);
document.write(twoPSeven);
alert(twoPSeven);

//11
console.log(sixteen);
document.write(sixteen);
alert(sixteen);

//12
console.log(bTrue);
document.write(bTrue);
alert(bTrue);

//13
console.log(bFalse);
document.write(bFalse);
alert(bFalse);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName;
let middleName;
let lastName;

firstName = `Winston`;
middleName = `Andrijowych`;
lastName = `Kapszyszak`;

let person = `${firstName} ${middleName} ${lastName}`

console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);*/

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('please enter your name');
let midName = prompt(`please enter your middle name`);
let age = prompt(`please enter your age`);

console.log(`${name} ${midName} ${age} `);
