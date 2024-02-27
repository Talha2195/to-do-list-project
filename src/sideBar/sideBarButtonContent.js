import { inputDom } from "../miscModules/typeInputDom";
function invokeButtonDom () {
    const buttonOne = new inputDom ('#sideBar', 'button', 'Search', 'search');
    const buttonTwo = new inputDom ('#sideBar', 'button', 'Home', 'home');
    const buttonThree = new inputDom ('#sideBar', 'button', 'New note', 'newNote');
    const buttonFour = new inputDom ('#sideBar', 'button', 'Today', 'today');
    const buttonFive = new inputDom ('#sideBar', 'button', 'Upcoming', 'upcoming');
    const buttonsix = new inputDom ('#sideBar', 'button', 'New Project', 'newProject');
    buttonOne.makeInputDom();
    buttonTwo.makeInputDom();
    buttonThree.makeInputDom();
    buttonFour.makeInputDom();
    buttonFive.makeInputDom();
    buttonsix.makeInputDom();
}
export{invokeButtonDom};
