function makeInputDom (body, element, text, id, type, placeholder,style, color){
        const container = document.querySelector(body)
        const content = document.createElement(element);
        content.textContent = text;
        content.setAttribute('id', id);
        content.setAttribute('type', type);
        content.setAttribute('placeholder', placeholder);
        content.setAttribute('style', style);
        container.appendChild(content);
    }
export {makeInputDom};