import view from "./template.html"
//import './home.scss';

export default () => {
    const docElement = document.createElement('div');
    docElement.innerHTML = view;

    let contactBtn = docElement.querySelector('#contact-me')

    contactBtn.onclick = () => {
        console.log('hello')
        window.open(`mailto:gusalvbar@gmail.com?subject=${docElement.querySelector('#contact-name')} - ${docElement.querySelector('#contact-subject').value}&body=${docElement.querySelector('#contact-body').value}`);
    }
    return docElement;
}