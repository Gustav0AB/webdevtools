import view from "./template.html"
import './blog.scss';

import { addArticle } from '../../../services/api/apiServices';

export default () => {
    const docElement = document.createElement('div');
    docElement.innerHTML = view;
    
    const addArticlebtn = docElement.querySelector('#add-article');

    addArticlebtn.onclick = () => {
        addArticle(
            docElement.querySelector('#title-article').value,
            docElement.querySelector('#content-article').value,
            docElement.querySelector('#author-article').value
        );

    }

    return docElement;
}