let blogs = [];


function renderBlogs(){
    const posts = JSON.parse(localStorage.getItem('posts'));
    
   blogs = blogs.concat(posts);
    
    console.log(blogs);
  
    const blogList = document.querySelector('#blogs');
    blogList.innerHTML = '';
    
    for(let i = 0; i < blogs.length; i++){
        const post = blogs[i];
        
        const li = document.createElement('li');
        li.setAttribute('class', 'blog-post');
        li.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <small>By: ${post.username}</small>
        `;
        blogList.appendChild(li);
    };
    

  
   
}

function init(){
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if(posts.length > 0){
        blogs = posts;
    }
    renderBlogs();

    
}

init();