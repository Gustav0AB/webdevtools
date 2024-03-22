import view from "./index.html"
import './index.scss';
import { WordPress } from '../../utils/wordpress'; 

export default () => {
    const docElement = document.createElement('div');
    docElement.innerHTML = view;
 

    docElement.querySelector('#add-blog').onclick = () => {
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

        docElement.querySelector('#content-blogs').prepend(newBlog);
    }

    docElement.querySelector('#setup-info').onclick = () => {
    }

    docElement.querySelector('#upload-blogs').onclick = () => {
        const wp = new WordPress({
            /*
            url: docElement.querySelector('js-website-url').value,
            username: docElement.querySelector('js-username').value,
            password: docElement.querySelector('js-password').value*/
            url: 'https://allstarsrvstg.wpenginepowered.com/',
            username: 'gustavo@dealerattract.com',
            password: "oWtR E2ly uexr eVZn ezrw oD4k"
        });

        let posts = []
        docElement.querySelectorAll('.blog').forEach((blog)=>{
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



    return docElement;
}