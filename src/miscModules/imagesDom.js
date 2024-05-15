function createImage(body, element, imageName, id, altText){
    const container = document.querySelector(body);
        const content = document.createElement(element);
        content.setAttribute('src', imageName);
        content.setAttribute('id', id);
        content.setAttribute('alt', altText);
        container.appendChild(content);
}
export{createImage};