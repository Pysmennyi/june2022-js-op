let url = new URL(location.href);
let postId = url.searchParams.get('id');
console.log(postId);


fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(postDetail => {
            return postDetail.json();
        }
    )
    .then(posts => {
        let div = document.createElement('div');
        div.className = 'post';
        document.body.appendChild(div);

        function displayPost(posts) {
            for (const details of Object.entries(posts)) {

                let innerDiv = document.createElement('div');
                innerDiv.className = "innerPostDiv";
                div.appendChild(innerDiv);


                for (const detail of details) {
                    if (`${detail}` === `[object Object]`) {
                    } else {
                        innerDiv.innerText = `${details[0]}: ${detail}`;
                    }

                    if (detail && typeof detail === "object" && detail !== 0) {
                        displayPost(detail);
                    }
                }
            }

        }


        displayPost(posts);

    });

setTimeout(()=>{
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => {
        return response.json();
    })
    .then(comments => {
        console.log(comments);

        // let div = document.createElement('div');
        // div.className = "comments"
        // document.body.appendChild(div);


        function displayComments(comments) {
            let divComment = document.createElement('div');
            divComment.className = "commentBlock"
            document.body.appendChild(divComment);

            for (const comment of comments) {
                let innerCommentDiv = document.createElement('div');
                innerCommentDiv.className = "comment";
                divComment.appendChild(innerCommentDiv);
                innerCommentDiv.innerText = `Comment with id ${comment.id}: ${comment.body}`;

            }

        }

        displayComments(comments);
    })


},80)
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//