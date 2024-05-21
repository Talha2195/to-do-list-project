import {makeInputDom} from "../../miscModules/typeInputDom";
import { createImage } from "../../miscModules/imagesDom";
import { makeDom } from "../../miscModules/dividantDom";
function invokeTopBarButton() {
makeInputDom ('#topBarButtonDiv', 'button', '', 'home');
createImage ('#home', 'img', 'homeIcon', 'home icon image');
makeDom ('#topBarButtonDiv', 'div', 'searchBar');
createImage ('#searchBar', 'img', 'searchIcon', 'search icon image');
makeInputDom ('#searchBar', 'input', '', 'searchInput', 'search', 'Search');
}
export{invokeTopBarButton};