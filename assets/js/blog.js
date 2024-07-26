function renderBlogs() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    const blogList = document.querySelector('#blogs');
    blogList.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        const li = document.createElement('li');
        li.setAttribute('class', 'blog-post');
        li.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <small>By: ${post.username}</small>
        `;
        blogList.appendChild(li);
    }
}

function init() {
    renderBlogs();
}

init();