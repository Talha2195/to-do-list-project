function makeInputDom (body, element, text, id, type, placeholder){
        const container = document.querySelector(body)
        const content = document.createElement(element);
        content.textContent = text;
        content.setAttribute('id', id);
        content.setAttribute('type', type);
        content.setAttribute('placeholder', placeholder);
        container.appendChild(content);
    }
export {makeInputDom};