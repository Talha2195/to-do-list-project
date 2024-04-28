import {makeInputDom} from "../../miscModules/typeInputDom";
function invokeTopBarButton() {
    const topBarButtonOne = makeInputDom ('#topBar', 'button', 'Search', 'search');
    const topBarButtonTwo = makeInputDom ('#topBar', 'button', 'Home', 'home');
    const topBarButtonThree = makeInputDom ('#topBar', 'button', 'New note', 'newNote');
}
export{invokeTopBarButton};