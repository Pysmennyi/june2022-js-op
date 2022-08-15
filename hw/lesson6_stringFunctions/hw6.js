// - Знайти та вивести довижину настипних стрінгових значень
let s1 = 'hello world';
let s2 = 'lorem ipsum';
let s3 = 'javascript is cool';

console.log(s1.length);
console.log(s2.length);
console.log(s3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(s1.toUpperCase());
console.log(s2.toUpperCase());
console.log(s3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
let s4 = 'HELLO WORLD';
let s5 = 'LOREM IPSUM';
let s6 = 'JAVASCRIPT IS COOL';
console.log(s4.toLowerCase());
console.log(s5.toLowerCase());
console.log(s6.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
str = ' dirty string   ';
console.log(str);
console.log(str.trim());
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str2 = 'Ревуть воли як ясла повні';
const stringToarray = (str) => str.split(' ');
console.log(stringToarray(str2));
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні'];
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr2 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(arr2.map(value => value.toString()));
// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];

function sortNums(arr, direction) {
    if (direction === `ascending`) {
        arr.sort((a, b) => a - b)
    } else if (direction === `descending`) {
        arr.sort((a, b) => b - a);
    }
    return arr;
}

console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]
//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(a => a.monthDuration >=5));
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }