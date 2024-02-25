class createDom {
    constructor(container, type, id, text) {
        this.container = container;
        this.type = type;
        this.id = id;
        this.text = text;
    }
    makeIndexDom () {
        const container = document.querySelector(this.container);
        const content = document.createElement(this.type);
        content.classList.add(this.id);
        content.textContent = this.text;
        container.appendChild(content);
    }
}
export {createDom};