// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'>
// // та наповнити його данними з об'єкту.
// for (const simpson of simpsons) {
//     let img = document.createElement('img');
//     img.src = simpson.photo;
//     img.style.width = "100px";
//     img.style.height = "150px";
//
//     let div = document.createElement('div');
//     document.body.appendChild(div);
//
//     let h2 = document.createElement('h2');
//     let b = document.createElement("b");
//     b.innerText = simpson.name + " " + simpson.surname +":";
//     h2.appendChild(b);
//     h2.style.color = "blue";
//
//     let p2 = document.createElement('p');
//     p2.innerText = `${simpson.name} is ${simpson.age} years old`;
//     let p3 = document.createElement('p');
//     p3.innerText = `${simpson.name} Info: ${simpson.info};`;
//     div.append(h2, img, p2, p3);
//
// }


//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
//
//
//
// Цикл в циклі
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// // Створити для кожного елементу масиву свій блок,
// // блок розділити блоками,
// // в яких будуть зберігатись значення окремих властивостей,
// // для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png
// for (let coursesArrayElement of coursesArray) {
//     let div = document.createElement("div");
//     div.className = "mainBlock";
//     let innerDiv = document.createElement("div");
//     div.appendChild(innerDiv);
//     innerDiv.style.border = '1px solid black';
//     innerDiv.style.display = 'flex';
//
//
//     const h2 = document.createElement('h2');
//     h2.innerText = `${coursesArrayElement.title}`;
//     innerDiv.appendChild(h2);
//
//     const p1 = document.createElement('p');
//     p1.innerText = `${coursesArrayElement.monthDuration} - month`;
//     p1.style.border = '1px solid black';
//     p1.style.padding = '5px';
//     innerDiv.appendChild(p1);
//
//     const p2 = document.createElement('p');
//     p2.innerText = `${coursesArrayElement.hourDuration} - hours`;
//     p2.style.border = '1px solid black';
//     p2.style.padding = '5px';
//     innerDiv.appendChild(p2);
//
//     const divListMain = document.createElement('div');
//     div.appendChild(divListMain);
//
//     const ul = document.createElement('ul');
//     ul.className = "table";
//     ul.style.border = '1px solid black';
//     divListMain.appendChild(ul);
//
//
//     for (const elem of coursesArrayElement.modules) {
//         let li = document.createElement("li");
//         li.innerText = elem;
//         ul.appendChild(li);
//     }
//
//     document.body.appendChild(div);
// }
// ------------------
//
//
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// let div = document.createElement('div');
// div.className = 'wrap, collapse, alpha, beta';
// document.body.appendChild(div);
//
// let diveClone = div.cloneNode(true);
// document.body.appendChild(diveClone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт
// котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let path = document.getElementsByClassName('menu')[0];
// let arr = ['Main','Products','About us','Contacts'];
// for (const elem of arr) {
//     let li = document.createElement('li');
//     li.innerText = elem;
//     path.appendChild(li);
//
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити
// // блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
//
// let div = document.createElement('div');
// document.body.appendChild(div);
//
// for (const elem of coursesAndDurationArray) {
//     let innerDive0 = document.createElement('div');
//     innerDive0.style.border = '1px solid black';
//     div.appendChild(innerDive0);
//
//     let innerDiv1 = document.createElement('div');
//     innerDiv1.innerText = 'course title -' + elem.title;
//     innerDive0.appendChild(innerDiv1);
//
//     let innerDiv2 = document.createElement('div');
//     innerDiv2.innerText = 'duration - ' + elem.monthDuration;
//     innerDive0.appendChild(innerDiv2);
// }
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// з monthDuration елементу.
//     Завдання робити через цикли.
//
let div = document.createElement('div');
document.body.appendChild(div);

for (const elem of coursesAndDurationArray) {
    let innerDive0 = document.createElement('div');
    innerDive0.className = 'item';
    innerDive0.style.border = '1px solid black';
    div.appendChild(innerDive0);

    let h1 = document.createElement('h1');
    h1.innerText = elem.title;
    h1.className = 'heading';
    innerDive0.appendChild(h1);

    let p = document.createElement('p');
    p.innerText = 'duration - ' + elem.monthDuration;
    p.className = 'description';
    innerDive0.appendChild(p);
}