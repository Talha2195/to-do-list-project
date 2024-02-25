class buttomDom {
    constructor (text,id) {
        this.text = text;
        this.id = id;
    }
    makeButtonDom (){
        const container = document.querySelector('#sideBar')
        const x = document.createElement('button');
        x.textContent = this.text;
        x.setAttribute('type', this.id);
        container.appendChild(x);
    }
}
export {buttomDom};