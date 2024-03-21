import { WordPress } from '../../../utils/wordpress.js'; 

/*
const wpCofig = {
    url: 'https://allstarsrvstg.wpenginepowered.com/',
    username: 'gustavo@dealerattract.com',
    password: "oWtR E2ly uexr eVZn ezrw oD4k"
};

let mediaUrl = '/wp-content/uploads/2024/03';
*/

document.getElementById('add-blog').onclick = () => {
    let newBlog = document.createElement('div');
    newBlog.classList.add('blog')
    newBlog.innerHTML = `
        <label>
            title
            <input type="text">
        </label>
        <label >
            HTML content
            <textarea></textarea>
        </label>
    `;

    document.getElementById('content-blogs').prepend(newBlog);
}

document.getElementById('setup-info').onclick = () => {
}

document.getElementById('upload-blogs').onclick = () => {
    const wp = new WordPress({
        /*
        url: document.getElementById('js-website-url').value,
        username: document.getElementById('js-username').value,
        password: document.getElementById('js-password').value*/
        url: 'https://allstarsrvstg.wpenginepowered.com/',
        username: 'gustavo@dealerattract.com',
        password: "oWtR E2ly uexr eVZn ezrw oD4k"
    });

    let posts = []
    document.querySelectorAll('.blog').forEach((blog)=>{
        let newPost = {
            title : blog.querySelector('input').value,
            content : blog.querySelector('textarea').value,
            status : 'publish'
        };

        posts.push(newPost)
    })

    console.log(posts)

    posts.forEach((post) => {
        wp.createPost(post , () => {
            alert('The post was upload')
        })
    })
    
}

