function makeInputDom (body, element, text, id){
        const container = document.querySelector(body)
        const content = document.createElement(element);
        content.textContent = text;
        content.setAttribute('id', id);
        container.appendChild(content);
    }
export {makeInputDom};