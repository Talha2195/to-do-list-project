import { inputDom } from "../miscModules/typeInputDom";
function invokeSideBarButton () {
    const sideBarButtonOne = new inputDom ('#sideBar', 'button', 'Today', 'today');
    const sideBarButtonTwo= new inputDom ('#sideBar', 'button', 'Upcoming', 'upcoming');
    const sideBarButtonThree = new inputDom ('#sideBar', 'button', 'New Project', 'newProject');
    sideBarButtonOne.makeInputDom();
    sideBarButtonTwo.makeInputDom();
    sideBarButtonThree.makeInputDom();
}
export{invokeSideBarButton};
