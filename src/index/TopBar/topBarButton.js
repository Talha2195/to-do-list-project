import {makeInputDom} from "../../miscModules/typeInputDom";
function invokeTopBarButton() {
makeInputDom ('#topBarButtonDiv', 'button', 'Home', 'home');
makeInputDom ('#topBarButtonDiv', 'button', 'Search', 'search');
}
export{invokeTopBarButton};