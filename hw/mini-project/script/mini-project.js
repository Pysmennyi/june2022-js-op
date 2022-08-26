// В index.html
// 1 получить массив объектов user
// с endpoint`а https://jsonplaceholder.typicode.com/users

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let bodyDiv = document.createElement('div');
        bodyDiv.className = 'bodyDiv';
        document.body.appendChild(bodyDiv);

        let generalDiv = document.createElement('div');
        generalDiv.className = 'generalDiv';
        bodyDiv.appendChild(generalDiv);

// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
        for (const user of users) {
        let div = document.createElement('div');
        div.className = 'userInfo';
            div.innerText = `${user.id} ${user.name}`;
            let ButtonDiv = document.createElement('div');
            ButtonDiv.className = "buttonDiv"
            div.appendChild(ButtonDiv);

            generalDiv.appendChild(div);

// 3 Добавить каждому блоку кнопку/ссылку ,
// при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
            let button = document.createElement('button');
            button.innerText = 'details';
            button.onclick = ()=> {
                window.location = `user-details.html?id=${user.id}`;

            }
            ButtonDiv.appendChild(button);

        }
    })

//
//

//
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

