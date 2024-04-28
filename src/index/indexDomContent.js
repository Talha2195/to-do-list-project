import {makeDom} from "../miscModules/dividantDom";
function invokeDomContent (){  
const sideBar = makeDom ('body', 'div', 'sideBar');
const contentPage = makeDom ('body', 'div', 'content','Content Area');
const topBar = makeDom ('body', 'div', 'topBar');
const footBar = makeDom ('body', 'div', 'footer', 'footer');
}
export {invokeDomContent};