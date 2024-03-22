import { pages } from "../pages/index";

let content = document.getElementById('root');

const router = (route) => {
    content.innerHTML = '';
    switch(route){
        case '#/': 
            return content.appendChild(pages.home())
        case '#/blog': 
            return content.appendChild(pages.addBlog())
        case '#/internals': 
            return content.appendChild(pages.addInternals())
        default :  
            return content.appendChild(pages.notFound())

    }
}

export {router}