// // - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// //     Перевірте  скрипт при a, що дорівнює 1, 0, -3
// console.log(`task 1:`);
// // Task solution
// // if (x!==0){
// //     console.log(`True`);
// // }else {
// //     console.log(`False`);
// // }
//
// //Check 1
// x = 1;
// if (x !== 0) {
//     console.log(`True`);
// } else {
//     console.log(`False`);
// }
// //Check 2
// x = 0;
// if (x !== 0) {
//     console.log(`True`);
// } else {
//     console.log(`False`);
// }
// //Check 3
// x = -3;
// if (x !== 0) {
//     console.log(`True`);
// } else {
//     console.log(`False`);
// }
// console.log("")
//
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// // який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю або четверту частину години).
// console.log(`task 2:`);
// let time = +prompt();
//
// console.log("Variant 1");
//
// if (time > 0 && time < 15) {
//     console.log(`1 quarter`);
// } else if (time >= 15 && time < 30) {
//     console.log(`2 quarter`);
// } else if (time >= 30 && time < 45) {
//     console.log(`3 quarter`);
// } else if (time >= 45 && time < 59) {
//     console.log(`4 quarter`);
// } else {
//     console.log(`out of range`);
// }
// console.log("")
// console.log("Variant 2:");
// switch (true) {
//     case (time < 15):
//         console.log(("1 quarter"));
//         break;
//     case  (time < 30):
//         console.log(("2 quarter"));
//         break;
//     case (time < 45):
//         console.log(("3 quarter"));
//         break;
//     case  (time < 59):
//         console.log(("4 quarter"));
//         break;
//     default:
//         console.log(("out of range"));
// }
// console.log("")
// console.log("Variant 3:");
//
// function getRange(time) {
//     let quarter = ``;
//     switch (true) {
//         case (time < 15):
//             console.log(quarter = ("1 quarter"));
//             break;
//         case  (time < 30):
//             console.log(quarter = ("2 quarter"));
//             break;
//         case (time < 45):
//             console.log(quarter = ("3 quarter"));
//             break;
//         case  (time < 59):
//             console.log(quarter = ("4 quarter"));
//             break;
//         default:
//             console.log(quarter = ("out of range"));
//     }
//     return quarter;
// }
//
// getRange(time);
// console.log("")
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// // місяця потрапляє це число (у першу, другу чи третю).
// console.log(`task 3:`);
// let day = +prompt();
// console.log("Variant 1");
// if (day > 0 && day < 10) {
//     console.log(`1 decade`);
// } else if (day >= 11 && day < 20) {
//     console.log(`2 decade`);
// } else if (day >= 21 && day < 31) {
//     console.log(`3 decade`);
// } else {
//     console.log(`out of range`);
// }
// console.log("")
// console.log("Variant 2:");
// switch (true) {
//     case (day <= 10):
//         console.log(("1 decade"));
//         break;
//     case  (day <= 20):
//         console.log(("2 decade"));
//         break;
//     case (day <= 31):
//         console.log(("3 decade"));
//         break;
//     default:
//         console.log(("out of range"));
// }
//
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий
// // номер дня тижня і на екрані відображається інфа що заплановано на цей день
// // (можна замість плану на день, назву дня англійською).
// console.log(`task 4:`);
// let weekDay = +prompt();
// switch (weekDay){
//     case 1:
//         console.log(`Monday`);
//         break;
//     case 2:
//         console.log(`Tuesday`);
//         break;
//     case 3:
//         console.log(`Wednesday`);
//         break;
//     case 4:
//         console.log(`Thursday`);
//         break;
//     case 5:
//         console.log(`Friday`);
//         break;
//     case 6:
//         console.log(`Saturday`);
//         break;
//     case 7:
//         console.log(`Sunday`);
//         break;
//     default:
//         console.log(`Out of range`);
// }
//
// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
// console.log(`task 5:`);
// let num1 = +prompt();
// let num2 = +prompt();
//
// if (num1>num2){
//     console.log(num1);
// }else if (num2>num1){
//     console.log(num2);
// }else if (num1===num2){
//     console.log(`entered numbers are equal, you entered number: ${num1}`);
// }else {
//     console.log(`one or more variables not a number`)
// }
//
// //     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined,
// //     null  і тд включно).
// //     Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
// //         якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
// console.log(`task 6:`);
// let x = 5;
// if (!!x === false) {
//     x = "default";
//     console.log(x);
// } else {
//     console.log(typeof (x));
// }