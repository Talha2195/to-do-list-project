import { makeInputDom } from "../miscModules/typeInputDom";
function invokeSideBarButton () {
makeInputDom ('#leftBar', 'button', 'Today', 'today');
makeInputDom ('#leftBar', 'button', 'Upcoming', 'upcoming');
makeInputDom ('#leftBar', 'button', 'New Project', 'newProject');
makeInputDom ('#leftBar', 'button', 'genericButton', 'genericButtonOne');
makeInputDom ('#leftBar', 'button', 'genericButton', 'genericButtonTwo');
makeInputDom ('#leftBar', 'button', 'genericButton', 'genericButtonThree');
makeInputDom ('#leftBar', 'button', 'genericButton', 'genericButtonFour');
makeInputDom ('#leftBar', 'button', 'genericButton', 'genericButtonFive');
makeInputDom ('#leftBar', 'button', 'genericButton', 'genericButtonSix');
makeInputDom ('#leftBar', 'button', 'genericButton', 'genericButtonSeven');
}
export{invokeSideBarButton};
