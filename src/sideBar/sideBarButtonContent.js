import { makeInputDom } from "../miscModules/typeInputDom";
function invokeSideBarButton () {
makeInputDom ('#leftBarContentDiv', 'button', 'Today', 'today');
makeInputDom ('#leftBarContentDiv', 'button', 'Upcoming', 'upcoming');
makeInputDom ('#leftBarContentDiv', 'button', 'New Project', 'newProject');
makeInputDom ('#leftBarContentDiv', 'details', '', 'existingProjects');
makeInputDom ('#existingProjects', 'summary', 'Projects', 'nameTag');
makeInputDom ('#existingProjects', 'button', 'genericButton', 'genericButtonOne');
makeInputDom ('#existingProjects', 'button', 'genericButton', 'genericButtonTwo');
makeInputDom ('#existingProjects', 'button', 'genericButton', 'genericButtonThree');
makeInputDom ('#existingProjects', 'button', 'genericButton', 'genericButtonFour');
makeInputDom ('#existingProjects', 'button', 'genericButton', 'genericButtonFive');
makeInputDom ('#existingProjects', 'button', 'genericButton', 'genericButtonSix');
makeInputDom ('#existingProjects', 'button', 'genericButton', 'genericButtonSeven');
}
export{invokeSideBarButton};
