import { makeInputDom } from "../miscModules/typeInputDom";
import { createImage } from "../miscModules/imagesDom";
function invokeSideBarButton () {
makeInputDom ('#leftBarContentDiv', 'button', 'New Note', 'newNote');
createImage('#newNote', 'img', 'plusicon', 'plus icon');
makeInputDom ('#leftBarContentDiv', 'button', 'All Projects', 'upcoming');
createImage ('#upcoming', 'img', 'upcomingIcon', 'calender icon');
}
export{invokeSideBarButton};
