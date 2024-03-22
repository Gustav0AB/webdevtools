import './commons/navbar/navbar.controller' 
import { router } from './routes/index.routes';
import './assets/styles.scss'

window.onload = () =>{
    window.scroll(0, 0);
    router(window.location.hash ==''?'#/':window.location.hash)
    //window.location.pathname = '/#/';
};
window.addEventListener('hashchange', () => {
    window.scroll(0, 0);
    router(window.location.hash)
})