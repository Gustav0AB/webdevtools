import { pages } from "../pages/index";

let content = document.getElementById('root');

const router = (route) => {
    content.innerHTML = '';
    switch(route){
        case '#/': 
            return content.appendChild(pages.home())
        case '#/blog': 
            return content.appendChild(pages.blog())
        case '#/blog/styles': 
            return content.appendChild(pages.styles())
        /*case '#/blog/add': 
            return content.appendChild(pages.addBlog())
        case '#/applications/reports': 
            return content.appendChild(pages.csvGraph())
        */
        default :  
            return content.appendChild(pages.notFound())

    }
}

export {router}