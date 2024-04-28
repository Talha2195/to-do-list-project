import { makeInputDom } from "../miscModules/typeInputDom";
function invokeSideBarButton () {
    const sideBarButtonOne = makeInputDom ('#sideBar', 'button', 'Today', 'today');
    const sideBarButtonTwo= makeInputDom ('#sideBar', 'button', 'Upcoming', 'upcoming');
    const sideBarButtonThree = makeInputDom ('#sideBar', 'button', 'New Project', 'newProject');
}
export{invokeSideBarButton};
