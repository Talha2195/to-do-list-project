import { createDom } from "./dom";
function invokeDom (){    
const sideBar = new createDom('body', 'div', 'sideBar','Side Bar');
sideBar.makeDom();
const contentPage = new createDom('body', 'div', 'content', 'Content Area');
contentPage.makeDom();
}
export {invokeDom};