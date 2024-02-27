import { clearContentPage } from "../miscModules/clearPage";
import { invokeTextFieldDom } from "./notePageDom";
function loadNotePage (){
    clearContentPage();
    invokeTextFieldDom();
}
export {loadNotePage};