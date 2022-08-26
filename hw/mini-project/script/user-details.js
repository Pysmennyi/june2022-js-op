let url = new URL(location.href);
let id = url.searchParams.get('id');
console.log(id);
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.

fetch(`https://jsonplaceholder.typicode.com/users/${id}/`)
    .then(response => {
            return response.json();
        }
    )

    .then(users => {
        let divGeneral = document.createElement('div');
        document.body.appendChild(divGeneral);
        divGeneral.className = 'generalBlock';

        let div = document.createElement('div');
        div.className = 'userBlock';
        divGeneral.appendChild(div);

        function displayUserInfo(users) {
            for (const user of Object.entries(users)) {
                let innerDiv = document.createElement('div');
                innerDiv.className = "innerDiv";
                div.appendChild(innerDiv);
                if (user && typeof user === "object") {
                    let innerDiv2 = document.createElement('div');
                    for (const innerUser of user) {
                        if (`${innerUser}` === `[object Object]`) {
                            innerDiv2.innerText = `${user[0]}: `;
                        } else {
                            innerDiv2.innerText = `${user[0]}: ${innerUser}`;
                        }
                        innerDiv.appendChild(innerDiv2);

                        if (innerUser && typeof innerUser === "object" && innerUser !== 0) {
                            displayUserInfo(innerUser);
                        }
                    }
                }
            }

        }
        let button = document.createElement('button');
        button.className = 'userButton';
        button.innerText = 'Users posts';
        divGeneral.appendChild(button);
        displayUserInfo(users);


    })

setTimeout(()=>{
fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response => {
        return response.json();
    })
    .then(posts => {
        console.log(posts);
        let takenButton = document.getElementsByTagName('button')[0];
        takenButton.onclick = () => {
            let ul = document.createElement('ul');
            ul.className = "posts";
            for (const post of posts) {
                let li = document.createElement('li');
                li.innerText = post.title;
                ul.appendChild(li);
                let postButton = document.createElement('button');
                postButton.className = 'postButton';
                postButton.innerText = 'post-details';
                li.appendChild(postButton);
                postButton.onclick = () => {
                    window.location = `post-details.html?id=${post.id}`;

                }
                takenButton.disabled =true;

            }
            document.body.appendChild(ul);
        }
    })

}, 50)
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
