import view from "./index.html"
import './index.scss';

export default () => {
    const docElement = document.createElement('div');
    docElement.innerHTML = view;
 
    const addPagesToListBtn = docElement.querySelector('#add-to-list-btn');
    const getPages = docElement.querySelector('#request-content-btn');
    const download = docElement.querySelector('#download');
    const downloadImgs = docElement.querySelector('#download-images');
    
    let pages = [], allContent = '', allImgSrc = [];
    
    addPagesToListBtn.onclick = () => {
        if(docElement.querySelector('#input-pages').value.split(' ').length > 1){
            docElement.querySelector('#input-pages').value.split(' ').forEach((urls) => {
                pages.push(urls);
            }) 
    
        }else{
            pages.push(docElement.querySelector('#input-pages').value);
        }
    
        docElement.querySelector("#list-container").innerHTML = '';
        const listOfPages = document.createElement('ul');
        listOfPages.classList.add('items')
        let liContent = '';
        pages.forEach((page) => {
            liContent += `<li>${page}</li>`
        })
        
        listOfPages.innerHTML = liContent;
        docElement.querySelector("#list-container").appendChild(listOfPages);
    }
    
    getPages.onclick = () => {
        let filter = docElement.querySelector('#content-filter').value;
        let requestDone = 0;
        pages.forEach((url) => {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    let allHTMLContent = document.createElement('body');
                    allHTMLContent.innerHTML = xhttp.responseText;
                    let content =  allHTMLContent.querySelector(!filter?'main':filter);
                    console.log(content)
    
                    allHTMLContent.querySelectorAll('div, h1, h2, h3, h4, h5, table,tr, td,  p, span, a, iframe, ul, li').forEach((element) => { 
                        element.removeAttribute('class');
                        element.removeAttribute('style');
                        element.removeAttribute('border');
                    });
    
                    let generalContent = document.createElement('div');
                    generalContent.classList.add('internal-page');
                    generalContent.innerHTML = content.innerHTML;
    
                    /* Get images source*/
                    let ul = document.createElement('ul');
                    ul.classList.add('items');
                    content.querySelectorAll('img').forEach((url) => { 
                        allImgSrc.push(url.getAttribute("src"));
    
                        let imgList = document.createElement('li');
                        let a = document.createElement('a');
                        a.href = url.getAttribute("src");
                        a.download = `${url.getAttribute("src").split('/')[url.getAttribute("src").split('/').length - 1]}`;
                        a.innerText = 'Download'
                        imgList.innerHTML = `${url.getAttribute("src").split('/')[url.getAttribute("src").split('/').length - 1]}`
                        imgList.appendChild(a);
                        ul.appendChild(imgList);
                    })
    
                    /* Get html source*/
                    allContent += `${url}\n\n\n\n\n${generalContent.innerHTML} \n\n\n\n\n\n`;
    
                    requestDone++;
                    console.log(`Content from ${url} obtained successfully`)
                    if(pages.length == requestDone){
                        download.removeAttribute('style')
                    }
    
                    docElement.querySelector('#js-request-content').innerHTML += `
                        <h3>${url}: ${requestDone}/${pages.length}</h3>
                        <h4>Images Found</h4>
                        <ul class='items'>${ul.innerHTML}</ul>
                    `
                }
            };
            xhttp.open("GET", url , true);
            xhttp.send();
        });
    }
    
    download.onclick = () => {
        let content = allContent;
        //console.log(allContent)
        let file = new File(["\ufeff"+content], 'contentFile.txt', {type: "text/plain:charset=UTF-8"});
        url = window.URL.createObjectURL(file);
    
        let a = document.createElement("a");
        a.style = "display: none";
        a.href = url;
        a.download = file.name;
        a.click();
        window.URL.revokeObjectURL(url);
    }
    
    
    downloadImgs.onclick = () => {
        let imagesDone = 0 ;
        console.log(allImgSrc)
        setTimeout(() => {
            allImgSrc.forEach((source) => {
                fetch(source)
                .then(resp => resp.blob())
                .then(blob => {
                    console.log(blob);
                    console.log(window.URL.createObjectURL(blob))
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    a.download = "img";
                    docElement.body.appendChild(a);
                    console.log(a)
                    a.click();
                    window.URL.revokeObjectURL(url);
                    imagesDone++;
                    docElement.querySelector('#images-done').innerHTML = `Images downloaded ${imagesDone}/${allImgSrc.length} `
                })
            })
          }, "1000");
    
    }

    return docElement;
}