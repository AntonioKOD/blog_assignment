const usernameEl = document.getElementById('username');
const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content');

document.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = usernameEl.value;
    const title = titleEl.value;
    const content = contentEl.value;
    if (username && title && content) {
        const newPost = {
            username: username,
            title: title,
            content: content,
        };

        // Retrieve existing posts from local storage or initialize an empty array
        let existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
        if (!Array.isArray(existingPosts)) {
            existingPosts = [];
        }


        // Add the new post to the existing posts array
        existingPosts.push(newPost);

        // Save the updated posts array back to local storage
        localStorage.setItem('posts', JSON.stringify(existingPosts));

        // Redirect to blog.html
        window.location.href = 'blog.html';
    }
    usernameEl.value = '';
    titleEl.value = '';
    contentEl.value = '';
});