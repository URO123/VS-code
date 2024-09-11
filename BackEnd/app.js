const API_USERS = "https://jsonplaceholder.typicode.com/users";
const API_POSTS = "https://jsonplaceholder.typicode.com/posts";
const API_COMMENTS = "https://jsonplaceholder.typicode.com/comments";

const elListUsers = document.querySelector('.list');
const elListPosts = document.querySelector('.posts');
const elListComments = document.querySelector('.comments');
// elListPosts.innerHTML = '';
async function getUsers(){
    const res = await fetch(API_USERS);
    const data = await res.json();

    renderUsers(data, elListUsers);
}
getUsers();

let postArray = [];

async function getPosts(){
    const res = await fetch(API_POSTS);
    const data = await res.json();
    data.forEach((element) => {
        postArray.push(element);
    });
    renderPosts(data, elListPosts);
}
getPosts();

let commentArray = [];

async function getComments(){
    const res = await fetch(API_COMMENTS);
    const data = await res.json();
    data.forEach((element) => {
        commentArray.push(element);
    });

    renderComments(data, elListComments);
}
getComments();

function renderUsers(array, node){
    console.log(array);
    array.forEach((el)=>{
        node.innerHTML += `<li class="item" id = ${el.id}>
                <h3 class="item-title">${el.name}</h3>
                <p class="item-email">${el.email}</p>
                <p class="item-phone">${el.phone}</p>
            </li>`
    });
}
function renderPosts(array, node){
    node.innerHTML='';
    console.log(array);
    array.forEach((el)=>{
        node.innerHTML += `<li class="posts-item" id = ${el.id}>
        <h3 class="posts-title">${el.title}</h3>
                <p class="posts-body">${el.body}</p>
            </li>`
    });
}
function renderComments(array, node){
    node.innerHTML='';
    console.log(array);
    array.forEach((el)=>{
        node.innerHTML += `<li class="comments-item">
        <h3 class="comments-name">${el.name}</h3>
                <p class="comments-body">${el.body}</p>
            </li>`
    });
}
elListUsers.onclick = (evt) => {
    elListPosts.classList.add('df')
    console.log(evt.target);
    if (evt.target.classList.contains("item")) {
        let filteredPosts = postArray.filter(
    (item) => item.userId == evt.target.id
    );
    renderPosts (filteredPosts, elListPosts);
}
if (evt.target.matches("h3") || evt.target.matches("p") || evt.target.matches("span")) {
    let filteredPosts = postArray.filter(
        (item) => item.userId == evt.target.parentElement.id );
        renderPosts (filteredPosts, elListPosts);
    }
};

elListPosts.onclick = (evt) => {
    elListComments.classList.add('df')
    console.log(evt.target);
    console.log(evt.target.id);
    if (evt.target.classList.contains("posts-item")) {
    let filteredComments = commentArray.filter(
    (item) => item.postId == evt.target.id
    );
    renderComments (filteredComments, elListComments);
    }
    if (evt.target.matches("h3") || evt.target.matches("p") || evt.target.matches("span")) {
    let filteredComments = commentArray.filter(
    (item) => item.postId == evt.target.parentElement.id );
    renderComments (filteredComments, elListComments);
    }
    };