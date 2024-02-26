import { createDom } from "./indexDom";
function invokeDomContent (){    
const sideBar = new createDom('body', 'div', 'sideBar');
sideBar.makeIndexDom();
const contentPage = new createDom('body', 'div', 'content', 'Content Area');
contentPage.makeIndexDom();
}
export {invokeDomContent};