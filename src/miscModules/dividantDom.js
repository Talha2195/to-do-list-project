function makeDom (container, type, id, text) {
        const dividant = document.querySelector(container);
        const content = document.createElement(type);
        content.setAttribute('id', id);
        content.textContent = text;
        dividant.appendChild(content);
    }
export {makeDom};