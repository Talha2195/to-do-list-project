import { inputDom } from "../../miscModules/typeInputDom";
function invokeTopBarButton() {
    const topBarButtonOne = new inputDom ('#topBar', 'button', 'Search', 'search');
    const topBarButtonTwo = new inputDom ('#topBar', 'button', 'Home', 'home');
    const topBarButtonThree = new inputDom ('#topBar', 'button', 'New note', 'newNote');
    topBarButtonOne.makeInputDom();
    topBarButtonTwo.makeInputDom();
    topBarButtonThree.makeInputDom();
}
export{invokeTopBarButton};