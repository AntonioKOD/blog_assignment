const usernameEl= document.getElementById('username');
const titleEl= document.getElementById('title');
const contentEl = document.getElementById('content');



document.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = usernameEl.value;
    const title = titleEl.value;
    const content = contentEl.value;
    if ( username && title && content) {
    const newPost ={
        username: username,
        title: title,
        content: content,
    }
    localStorage.setItem('posts', JSON.stringify( newPost));
    window.location.href = 'blog.html';
    }
    usernameEl.value = '';
    titleEl.value = '';
    contentEl.value = '';

});
