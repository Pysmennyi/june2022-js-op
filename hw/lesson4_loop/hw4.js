// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

document.write(` <h1 class="taskTitle">Task 1: </h1>`)

for (let i = 0; i < 10; i++) {
    let number = i + 1;
    document.write(`<div> #${number} Hello</div>`)

}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(` <h1 class="taskTitle">Task 2: </h1>`)
for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} - String index</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(` <h1 class="taskTitle">Task 3: </h1>`)
let i = 0
while (i < 20) {
    let number = i + 1;
    document.write(`<h1>Title #${number}</h1>`)
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(` <h1 class="taskTitle">Task 4: </h1>`)
let i2 = 0
while (i2 < 20) {
    document.write(`<h1>${i2} Заголовок</h1>`)
    i2++;
}
//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
document.write(` <h1 class="taskTitle">Task 5: </h1>`)
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let j = 0; j < listOfItems.length; j++) {
    let listOfItem = listOfItems[j];
    document.write(`<ul>
<li>${listOfItem}</li>
</ul>`)

}
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
document.write(` <h1 class="taskTitle">Task 6: </h1>`)
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
for (let j = 0; j < products.length; j++) {
    const product = products[j];
    document.write(`<div>
<h3>${product.title}, price - ${product.price}</h3>
<img src="${product.image}" class="product-image">

</div>`)

}
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

//
//
//
// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'oleg', age: 28, status: false},
    {name: 'anya', age: 31, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// за допомоги циклу вивести:
//     - користувачів зі статусом true
document.write(` <h1 class="taskTitle">Task 7.1: </h1>`)
for (const user of users) {
    for (let userKey in user) {
        if (user.status) {
            document.write(`<div>${user[userKey]}</div>`)
        }
    }
    document.write(`-----------------`)
}
// - користувачів зі статусом false
document.write(` <h1 class="taskTitle">Task 7.2: </h1>`)
for (const user of users) {
    for (let userKey in user) {
        if (!user.status) {
            document.write(`<div>${user[userKey]}</div>`)
        }
    }
    document.write(`-`)
}
// - користувачів які старші за 30 років
document.write(` <h1 class="taskTitle">Task 7.3: </h1>`)
for (const user of users) {
    for (let userKey in user) {
        if (user.age > 30) {
            document.write(`<div>${user[userKey]}</div>`)
        }
    }
    document.write(`-----------------`)
}