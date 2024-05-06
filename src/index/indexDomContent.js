import {makeDom} from "../miscModules/dividantDom";
function invokeDomContent (){ 
makeDom ('body', 'div', 'mainDiv');
makeDom ('#mainDiv', 'div', 'topBar');
makeDom('#topBar', 'div', 'topBarButtonDiv')
makeDom ('#mainDiv', 'div', 'leftBar');
makeDom ('#mainDiv', 'div', 'content',);
makeDom ('#mainDiv', 'div', 'footer', 'footer');
}
export {invokeDomContent};