import {makeInputDom} from "../../miscModules/typeInputDom";
function invokeTopBarButton() {
    makeInputDom ('#topBarButtonDiv', 'button', 'Home', 'home');
    makeInputDom ('#topBarButtonDiv', 'button', 'Search', 'search');
    makeInputDom ('#topBarButtonDiv', 'button', 'New note', 'newNote');
}
export{invokeTopBarButton};