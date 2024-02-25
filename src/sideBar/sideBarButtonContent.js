import { buttomDom } from "./sideBarButtonDom";
function invokeButtonDom () {
    const buttonOne = new buttomDom ('Search', 'search');
    const buttonTwo = new buttomDom ('Home', 'home');
    const buttonThree = new buttomDom ('New', 'newNote');
    const buttonFour = new buttomDom ('Today', 'today');
    const buttonFive = new buttomDom ('Upcoming', 'upcoming');
    buttonOne.makeButtonDom();
    buttonTwo.makeButtonDom();
    buttonThree.makeButtonDom();
    buttonFour.makeButtonDom();
    buttonFive.makeButtonDom();
}
export{invokeButtonDom};
