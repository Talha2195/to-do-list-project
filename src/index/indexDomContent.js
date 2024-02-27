import { domCreator} from "../miscModules/dividantDom";
function invokeDomContent (){    
const sideBar = new domCreator('body', 'div', 'sideBar');
sideBar.makeDom();
const contentPage = new domCreator('body', 'div', 'content', 'Content Area');
contentPage.makeDom();
}
export {invokeDomContent};