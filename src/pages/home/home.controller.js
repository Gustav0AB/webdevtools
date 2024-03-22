import view from "./template.html"
import './home.scss';

export default () => {
    const docElement = document.createElement('div');
    docElement.innerHTML = view;

    return docElement;
}