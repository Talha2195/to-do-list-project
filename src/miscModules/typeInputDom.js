class inputDom {
    constructor (body,element,text,id) {
        this.body = body;
        this.element = element;
        this.text = text;
        this.id = id;
    }
    makeInputDom (){
        const container = document.querySelector(this.body)
        const content = document.createElement(this.element);
        content.textContent = this.text;
        content.setAttribute('id', this.id);
        container.appendChild(content);
    }
}
export {inputDom};