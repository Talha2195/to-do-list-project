import { makeInputDom } from "../miscModules/typeInputDom";
import { createImage } from "../miscModules/imagesDom";
function invokeSideBarButton () {
makeInputDom ('#leftBarContentDiv', 'button', 'New Note', 'newNote');
createImage('#newNote', 'img', 'plusicon', 'plus icon');
makeInputDom ('#leftBarContentDiv', 'button', 'Upcoming', 'upcoming');
createImage ('#upcoming', 'img', 'upcomingIcon', 'calender icon');
makeInputDom ('#leftBarContentDiv', 'details', '', 'existingProjects');
makeInputDom ('#existingProjects', 'summary', 'Projects', 'nameTag');
makeInputDom ('#existingProjects', 'button', 'genericButton', 'genericButtonOne');
makeInputDom ('#existingProjects', 'button', 'genericButton', 'genericButtonTwo');
makeInputDom ('#existingProjects', 'button', 'genericButton', 'genericButtonThree');
makeInputDom ('#existingProjects', 'button', 'genericButton', 'genericButtonFour');
}
export{invokeSideBarButton};
